export default (() => {
  const keys = ['xs', 'sm', 'md', 'lg', 'xl'];

  const values = {
    xs: 576,
    sm: 768,
    md: 992,
    lg: 1200,
    xl: 1920,
  };

  function up(key) {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `@media (min-width: ${value}px)`;
  }

  function down(key) {
    const endIndex = keys.indexOf(key);

    if (endIndex + 1 === keys.length) {
      // xl down applies to all sizes
      return up(0);
    }

    const value = typeof values[key] === 'number' && endIndex > 0 ? values[key] : key;
    return `@media (max-width: ${value - 5 / 100}px)`;
  }

  function between(start, end) {
    const endIndex = keys.indexOf(end);

    if (endIndex + 1 === keys.length) {
      return up(start);
    }

    return `@media (min-width: ${values[start]}px) and (max-width: ${values[end] - 5 / 100}px)`;
  }

  function only(key) {
    const index = keys.indexOf(key);
    if (index === keys.length) {
      return up(key);
    }
    return between(key, values[keys[index]]);
  }

  function width(key) {
    return values[key];
  }

  return {
    keys,
    values,
    up,
    down,
    between,
    only,
    width,
  };
})();
