<Router {routes} />

<script>
  import Router, { replace, wrap } from 'svelte-spa-router';
  import Trade from './pages/Trade';
  import Error from './pages/Error';
  import DashBoard from './pages/DashBoard';

  import 'normalize.css';
  import './App.scss';

  const routes = {
    '/': wrap(Trade, _ => {
      replace('/AC3');
    }),
    '/dashboard': DashBoard,
    '/:symbol': Trade,
    '*': Error,
  };
</script>
