<script>
  import Router from 'svelte-spa-router';
  import Layout from './layout/Layout';
  import routes from './router';

  import './App.css';

  const name = 'Svelte';
</script>

<Layout>
  <Router {routes} />
</Layout>
