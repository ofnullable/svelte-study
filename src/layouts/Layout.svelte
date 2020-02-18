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
    '/:symbol': Trade,
    '*': Error,
  };
</script>

<div id="root">
  <Header/>
  <main class="container">
    <Router {routes}/>
  </main>
  <Footer/>
</div>

<style lang="scss">
  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .container {
    margin: 0 auto;
    width: 100%;
    max-width: 1440px;
    padding: 8px 16px;
    height: calc(100% - 160px);
    flex: 1 1 auto;
  }

  @media (max-width: 767.98px) {
    .container {
      padding: 8px;
    }
  }
</style>
