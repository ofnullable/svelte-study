<script>
  import { css } from 'emotion';

  import media from '../../common/media';

  const tokenInfo = css`
    width: calc(72% - 16px);

    ${media.down('lg')} {
      width: 100%;
    }
  `;
</script>

<div class={`card ${tokenInfo}`}>
  <div class="card__title">Card Title</div>
  <div class="card__body">Card Body</div>
  <div class="card__footer">Card footer</div>
</div>
