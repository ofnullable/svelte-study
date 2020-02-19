<script>
  import { css } from 'emotion';
  import InputWrapper from '../common/InputWrapper';
  import { token } from '../../store/token';

  export let type;

  let tokenAmount;
  let icxAmount;

  const formWrapper = css`
    display: flex;
    & > div {
      width: calc(50% - 0.5rem);
      &:last-of-type {
        padding-left: 1rem;
      }
    }
    label {
      padding: .5rem;
      display: inline-flex;
    }
    input {
      width: 70%;
    }
    button {
      width: 28%;
      margin: 0;
      border: none;
      border-radius: 4px;
      padding: 8px 12px;
    }
  `;
</script>

<div class={formWrapper}>
  <InputWrapper label={`${type} ${$token.symbol}`}>
    <div>
      <input type="number" bind:value={tokenAmount}>
      <button>{type}</button>
    </div>
  </InputWrapper>
  <InputWrapper label={`${type} ICX`}>
    <div>
      <input type="number" bind:value={icxAmount}>
      <button>{type}</button>
    </div>
  </InputWrapper>
</div>