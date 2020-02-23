<div class="{`card ${tokenListStyle} ${visible}`}">
  <div class="card__title">
    <TokenSearchBar bind:searchText />
  </div>
  <div class="card__body">
    <div class="inner_scroll">
      {#if tokenList.length}
        {#each tokenList as token (token.address)}
          <TokenListItem {token} />
        {/each}
      {:else}
        <p>No results found.</p>
      {/if}
    </div>
  </div>
  <div class="card__footer"></div>
</div>
<div class="{`${overlay(visible)} ${visible}`}" on:click="{resetText}"></div>

<script>
  import { css } from 'emotion';

  import TokenListItem from './TokenListItem';
  import TokenSearchBar from './TokenSearchBar';
  import { tokens } from '../../store/token';
  import { menuVisible, toggleVisible } from '../../store/ui';

  import media from '../../common/media';

  let searchText = '';

  $: visible = css`
    ${media.down('lg')} {
      display: ${$menuVisible ? 'flex' : 'none'};
    }
  `;

  $: tokenList =
    searchText || searchText.trim()
      ? $tokens.filter(({ name, symbol }) => new RegExp(searchText, 'i').test(`${symbol} ${name}`))
      : $tokens;

  const resetText = () => {
    searchText = '';
    toggleVisible();
  };

  const overlay = visible => css`
    top: 0;
    left: 0;
    z-index: 99;
    position: absolute;

    ${media.down('lg')} {
      ${visible
        ? css`
            width: 100%;
            height: 100%;
          `
        : css`
            width: 0;
            height: 0;
          `}
    }
  `;

  const tokenListStyle = css`
    top: 8px;
    width: 28%;
    position: sticky;
    height: 650px;
    max-height: 650px;
    float: right;

    .card__body {
      display: flex;
      height: 100%;
      padding: 8px 0;
      overflow: hidden;

      p {
        display: flex;
        margin: 0;
        padding: 16px;
        height: 100%;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        font-weight: bold;
      }
    }

    ${media.down('lg')} {
      top: 58px;
      width: 28%;
      min-width: 300px;
      z-index: 100;
      float: none;
      position: absolute;
      overflow: hidden;
      max-height: 80%;
    }

    ${media.down('md')} {
      width: 35%;
      max-height: 70%;
    }
  `;
</script>
