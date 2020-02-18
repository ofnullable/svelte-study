<script>
  import { fade } from 'svelte/transition';

  let name = '';

  setTimeout(() => {
    name = 'Svelte!';
  }, 1500);
</script>

<style>

</style>

{#if !name}
  <h1 in:fade>Loading....</h1>
{:else}
  <h1 in:fade>{name}</h1>
{/if}
