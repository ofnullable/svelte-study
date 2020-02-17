<script>
  import Router, { replace, wrap } from 'svelte-spa-router';

  import Header from './Header';
  import Footer from './Footer';

  import Trade from '../pages/Trade';
  import Error from '../pages/Error';
  import DashBoard from '../pages/DashBoard';

  const routes = {
    '/': wrap(
        Trade,
        _ => {
          replace('/AC3');
        },
    ),
    '/dashboard': DashBoard,
    '/:id': Trade,
    '*': Error,
  };
</script>

<style lang="scss">
  .container {
    margin: 0 auto;
    width: 100%;
    max-width: 1440px;
    padding: 8px 16px;
  }

  @media (max-width: 1199.98px) {
    .container {
      margin: 0;
    }
  }

  @media (max-width: 767.98px) {
    .container {
      padding: 8px;
    }
  }
</style>

<Header/>
<main class="container">
  <Router {routes}/>
</main>
<Footer/>