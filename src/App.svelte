<script>
  import Router from 'svelte-spa-router';
  import Layout from './layouts/Layout';

  import './App.scss';
  import 'normalize.css';

  const routes = { '/:id': Layout, '*': Layout };
</script>

<Router {routes}/>
