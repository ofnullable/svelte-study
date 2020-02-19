<script>
  import { css } from 'emotion';

  export let id;
  export let label;
  export let className;

  const inputWrapper = css`
    position: relative;

    input {
      width: 100%;
      border: none;
      border-radius: 4px;
      padding: 8px 12px;
      background-color: #fafafa;
    }
`;
</script>

<div class={`${inputWrapper} ${className || ''}`}>
  <label for={id}>{label || ''}</label>
  <slot/>
</div>
