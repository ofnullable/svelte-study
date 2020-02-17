<script>
  import { fade } from 'svelte/transition';

  const name = 'Svelte';

  export const params = {};
</script>

<style>
  h1 {
    color: #e12343;
  }
</style>

<div in:fade>
  <h1>Hello {name}!</h1>
  <div class="card">
    <div class="card__title">Card Title</div>
    <div class="card__body">Card Body</div>
    <div class="card__footer">Card footer</div>
  </div>
</div>
