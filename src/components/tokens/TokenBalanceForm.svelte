<div class="{formWrapper}">
  <InputWrapper label="{`${type} ${$token.symbol}`}" className="{InputWrapperStyle}">
    <div>
      <input type="number" bind:value="{tokenAmount}" placeholder="0" />
      <button>{type}</button>
    </div>
  </InputWrapper>
  <InputWrapper label="{`${type} ICX`}" className="{InputWrapperStyle}">
    <div>
      <input type="number" bind:value="{icxAmount}" placeholder="0" />
      <button>{type}</button>
    </div>
  </InputWrapper>
</div>

<script>
  import { css } from 'emotion';
  import InputWrapper from '../common/InputWrapper';
  import { token } from '../../store/token';

  export let type;

  let tokenAmount;
  let icxAmount;

  const formWrapper = css`
    display: flex;
  `;

  const InputWrapperStyle = css`
    flex: 1 1 auto;

    label {
      padding: 0.5rem;
      display: inline-flex;
    }

    & > div {
      display: flex;
    }

    input {
      width: auto;
      flex: 2 0 auto;
    }

    button {
      flex: 1 0 auto;
      margin: 0;
      border: none;
      border-radius: 4px;
      padding: 8px 12px;
    }
  `;
</script>
