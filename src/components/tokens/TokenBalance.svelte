<script>
  import { css } from 'emotion';
  import TokenBalanceForm from './TokenBalanceForm';

  let type = 'DEPOSIT';

  $: active = type === 'DEPOSIT';

  const changeType = e => {
    const { target } = e;
    type = target.textContent;
  };

  const balanceMenu = css`
    span {
      cursor: pointer;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      display: inline-flex;
      padding: 0.5em 1em;
      border: 2px solid transparent;
      min-width: 15%;
      justify-content: center;

      &.active {
        background: #fafafa;
        border-bottom: 2px solid #1aaaba;
      }
    }
  `;
</script>

<div class={balanceMenu}>
  <span on:click={changeType} class:active>DEPOSIT</span>
  <span on:click={changeType} class:active={!active}>WITHDRAW</span>
  <TokenBalanceForm type={type}/>
</div>