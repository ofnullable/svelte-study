<script>
  import Router from 'svelte-spa-router';
  import Layout from './layouts/Layout';

  import 'normalize.css';
  import './App.scss';

  const routes = { '/:symbol': Layout, '*': Layout };
</script>

<Router {routes}/>
