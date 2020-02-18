<script>
  import { css } from 'emotion';
  import InputWrapper from '../common/InputWrapper';

  export let searchText = '';

  const iconStyle = css`
    cursor: pointer;
    right: 4px;
    bottom: 1.75rem;
    color: #414141;
    position: absolute;
  `;
</script>

<InputWrapper id="search" label="">
  <input id="search" type="search" bind:value={searchText} placeholder="Search Token"/>
  <i class={`material-icons ${iconStyle}`}>search</i>
</InputWrapper>
