<script>
  import { link } from 'svelte-spa-router';
  import active from 'svelte-spa-router/active';
  import { css } from 'emotion';

  export let token;

  const tokenListItem = css`
    color: inherit;
    display: flex;
    padding: 0 16px;
    border-radius: 4px;
    text-decoration: none;
    border: 2px solid transparent;

    &.active {
      border: 2px solid #1aaaba;
    }
    ul {
      width: 100%;
      margin: 0;
      padding: 0;
      list-style: none;
      justify-content: space-between;
    }
    li {
      width: 100%;
      display: flex;
    }
    span {
      cursor: pointer;
      padding: 14px 8px;
      font-size: 1.2em;
      display: inline-block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    span:nth-child(1) {
      width: 25%;
      color: #414141;
      font-weight: 700;
    }
    span:nth-child(2) {
      width: 55%;
      color: #676767;
    }
    span:nth-child(3) {
      width: 30%;
    }
  `;
</script>

<a class={tokenListItem} href={`/${token.symbol}`} use:link use:active={{path: `/${token.symbol}`,className:'active'}}>
  <ul>
    <li>
      <span>{token.symbol}</span>
      <span>{token.name}</span>
      <span>{token.lastPrice || '-'}</span>
    </li>
  </ul>
</a>