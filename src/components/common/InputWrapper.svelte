<script>
  import { css } from 'emotion';

  export let id;
  export let label;

  const inputWrapper = css`
    padding: calc(1.5rem - 8px) 0 1.5rem;
    position: relative;
    border-bottom: 1px solid #9e9e9e;

    input {
      width: 100%;
      border: none;
      border-radius: 4px;
      padding: 8px 24px 8px 12px;
      background-color: #fafafa;
    }
  `;
</script>

<div class={inputWrapper}>
  <label for={id}>{label}</label>
  <slot/>
</div>
