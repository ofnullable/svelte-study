<script>
  import { onMount } from 'svelte';

  let name = '';

  setTimeout(() => {
    name = 'Svelte!';
  }, 1500);
</script>

<style>

</style>

{#if !name}
  <h1>Loading....</h1>
{:else}
  <h1>{name}</h1>
{/if}
