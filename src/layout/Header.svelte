<script>
  import { link } from 'svelte-spa-router';
</script>

<style type="text/scss" lang="scss">
  nav {
    background-color: yellowgreen;
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;

    & a {
      color: #fff;
      font-size: 1.5rem;
      font-weight: 700;
      text-decoration: none;
      margin: 0 0.5rem;
    }
  }
</style>

<nav>
  <a href="/" use:link>Home</a>
  <a href="/dashboard" use:link>dashboard</a>
</nav>
