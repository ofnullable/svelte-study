<main class="error card">
  <h1>{params.status}</h1>
  <img src="{TakenSvg}" alt="" />
  <h2>We couldn't find this page!</h2>
</main>

<script>
  import { location } from 'svelte-spa-router';
  import TakenSvg from '../assets/undraw_Taken.svg';

  export let params = {};
</script>

<style lang="scss">
  .error {
    width: 100%;
    margin: 16px auto;
    max-width: 1440px;
    padding: 16px;
    align-items: center;
    justify-content: center;

    h1 {
      margin: 0.5em;
      font-size: 5rem;
      color: #e12343;
    }

    img {
      max-height: 60%;
    }
  }
</style>
