<script>
  import { css } from 'emotion';

  import { token } from '../../store/token';
  import media from '../../common/media';
  import TokenBalance from './TokenBalance';

  const tokenInfoWrapper = css`
    width: calc(72% - 16px);
    ${media.down('lg')} {
      width: 100%;
    }
  `;

  const tokenInfo = css`
    padding: 4px 0;
    .symbol {
      font-size: 1.2rem;
      font-weight: bold;
    }
    .name {
      margin-left: .5rem;
    }
  `;

  const tokenPrice = css`
    margin: 8px 0 0;
    color: #1aaaba;
    font-size: 2rem;
  `;
</script>

<div class={`card ${tokenInfoWrapper}`}>
  <div class="card__title">
    <div class={tokenInfo}>
      <span class="symbol">{$token.symbol}</span><span class="name">{$token.name}</span>
      <p class={tokenPrice}>{$token.lastPrice || '-'}</p>
    </div>
  </div>
  <div class="card__body">
    <TokenBalance />
  </div>
<!--  <div class="card__footer">Card footer</div>-->
</div>
