<script>
  import { onMount, onDestroy, beforeUpdate } from 'svelte';
  import { fade } from 'svelte/transition';
  import TokenList from '../components/tokens/TokenList';
  import TokenInfo from '../components/tokens/TokenInfo';
  import { getToken } from '../common/utils';
  import { token } from '../store/token';

  export let params = {};
  const name = 'Svelte';

  onMount(() => {
    console.log($token);
  });
  onDestroy(() => {
    console.log('destroy');
  });
  beforeUpdate(() => {
    $token = getToken(params.symbol);
  });
</script>

<TokenList params={params}/>
<TokenInfo/>
