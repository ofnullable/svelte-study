<InputWrapper id="search" className="{searchBox}">
  <input id="search" type="search" bind:value="{searchText}" placeholder="Search Token" />
  <i class="{`material-icons ${iconStyle}`}">search</i>
</InputWrapper>

<script>
  import { css } from 'emotion';
  import InputWrapper from '../common/InputWrapper';

  export let searchText = '';

  const searchBox = css`
    border-bottom: 1px solid #9e9e9e;
    padding: calc(1.5rem - 8px) 0 1.5rem;
    input {
      padding: 8px 24px 8px 12px !important; // ...better way?
    }
  `;

  const iconStyle = css`
    cursor: pointer;
    right: 4px;
    bottom: 1.75rem;
    color: #414141;
    position: absolute;
  `;
</script>
