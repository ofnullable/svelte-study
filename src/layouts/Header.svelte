<script>
  import { link } from 'svelte-spa-router';

  export const params = {};
</script>

<style lang="scss">
  header {
    height: 60px;
    background: #fff;
    box-shadow: 0 3px 10px 0 rgba(66, 66, 66, .05);

    nav {
      width: 100%;
      height: 100%;
      display: flex;
      margin: 0 auto;
      padding: 0 16px;
      max-width: 1440px;
    }
  }

  a {
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

  @media (max-width: 1199.98px) {
    header {
      height: 50px;
      margin: 0;
      width: 100%;
      padding: 0 8px;

      nav {
        padding: 0 8px;
      }
    }
  }

  @media (max-width: 767.98px) {
    header {
      padding: 0;
    }
  }
</style>

<header>
  <nav>
    <a class="title" href="/AC3" use:link>icondelta</a>
  </nav>
</header>
