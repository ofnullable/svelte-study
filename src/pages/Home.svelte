<script>
  import { fade } from 'svelte/transition';

  const name = 'Svelte';
</script>

<style>
  h1 {
    color: #e12343;
  }
</style>

<div in:fade>
  <h1>Hello {name}!</h1>
  <div class="card">
    Card
  </div>
</div>
