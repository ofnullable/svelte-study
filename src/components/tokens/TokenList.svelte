<script>
  import { css } from 'emotion';
  import { get } from 'svelte/store';

  import TokenListItem from './TokenListItem.svelte';
  import TokenSearchBar from './TokenSearchBar.svelte';
  import { tokens } from '../../store/token';

  import media from '../../common/media';

  export let params = {};

  const tokenListStyle = css`
    width: 28%;
    float: right;
    position: sticky;
    .card__body {
      padding: 8px 0;
    }

    ${media.down('lg')} {
      display: none;
      width: 80%;
    }
    ${media.down('md')} {
      width: 100%;
    }
  `;
</script>

<div class={`card ${tokenListStyle}`}>
  <div class="card__title">
    <TokenSearchBar/>
  </div>
  <div class="card__body">
    {#each $tokens as token (token.address)}
      <TokenListItem token={token} active={token.symbol === params.symbol}/>
    {/each}
  </div>
  <div class="card__footer"></div>
</div>