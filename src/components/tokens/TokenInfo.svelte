<div class="{`card ${tokenInfoWrapper}`}">
  <div class="card__title">
    <div class="{tokenInfo}">
      <span class="symbol">{$token.symbol}</span>
      <span class="name">{$token.name}</span>
      <p class="{tokenPrice}">{$token.lastPrice || '-'}</p>
    </div>
    <div class="{balanceInfo}"></div>
  </div>
  <div class="card__body">
    <TokenBalance />
  </div>
  <!--  <div class="card__footer">Card footer</div>-->
</div>

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
    .card__title {
      display: flex;
    }
  `;

  const tokenInfo = css`
    flex: 1 0;
    .symbol {
      font-size: 1.2rem;
      font-weight: bold;
    }
    .name {
      margin-left: 0.5rem;
    }
  `;

  const tokenPrice = css`
    margin: 8px 0 0;
    color: #1aaaba;
    font-size: 2rem;
  `;

  const balanceInfo = css`
    flex: 1 0;
    display: flex;
  `;
</script>
