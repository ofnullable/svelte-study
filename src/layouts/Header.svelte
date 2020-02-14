<script>
  import { link } from 'svelte-spa-router';
  import { css } from 'emotion';

  const nav = css`
    display: flex;
    height: 100%;

    & a {
      color: #000;
      height: 100%;
      font-weight: 700;
      font-size: 1.5rem;
      margin-right: 1rem;
      align-items: center;
      display: inline-flex;
      text-decoration: none;

      &.title {
        margin-right: 1em;
        text-transform: uppercase;
      }
    }
  `;
</script>

<header>
  <nav class={nav}>
    <a class="title" href="/" use:link>svelte</a>
    <a href="/dashboard" use:link>dashboard</a>
  </nav>
</header>
