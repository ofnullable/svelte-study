<Router {routes} on:conditionsFailed="{routeFailed}" />

<script>
  import Router, { replace, wrap } from 'svelte-spa-router';
  import Trade from './pages/Trade';
  import Error from './pages/Error';
  import DashBoard from './pages/DashBoard';

  import { token } from './store/token';
  import { getToken } from './common/utils';

  import 'normalize.css';
  import './App.scss';

  const routes = {
    '/': wrap(Trade, _ => {
      replace('/AC3');
      return true;
    }),
    '/dashboard': DashBoard,
    '/:symbol': wrap(Trade, detail => {
      const symbol = detail.location.replace(/\//, '');
      const currToken = symbol ? getToken(symbol) : 'AC3';
      if (currToken) {
        $token = currToken;
        return true;
      }
      return false;
    }),
    '/error/:status': Error,
    '*': Error,
  };

  const routeFailed = e => {
    console.error(e);
    replace('/error/404');
  };
</script>
