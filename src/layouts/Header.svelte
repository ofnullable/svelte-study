<script>
  import { token } from '../store/token';
  import { menuVisible, toggleVisible } from '../store/ui';
</script>

<header>
  <nav>
    <div>
      <span class="title">
        <i class="material-icons icon">autorenew</i>
        icondelta
      </span>
    </div>
    <div class="subtitle" on:click={toggleVisible}>
      <p>{`${$token.symbol} ${$token.name}`}</p>
    </div>
  </nav>
</header>

<style lang="scss">
  @keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
    }
  }

  header {
    height: 60px;
    background: #fff;
    box-shadow: 0 3px 10px 0 rgba(66, 66, 66, .05);

    nav {
      width: 100%;
      height: 100%;
      display: flex;
      margin: 0 auto;
      padding: 0 16px;
      max-width: 1440px;
    }
  }

  span {
    cursor: default;
    color: #000;
    height: 100%;
    font-weight: 700;
    font-size: 1.5rem;
    margin-right: 1rem;
    align-items: center;
    display: inline-flex;
    text-decoration: none;

    .icon {
      color: #1aaaba;
      font-size: 2rem;
      margin-right: 0.5rem;
      animation: spin 1.5s infinite linear;
    }
  }

  .title {
    margin-right: 1em;
    text-transform: uppercase;
  }

  .subtitle {
    cursor: pointer;
    font-size: 0;

    p {
      margin: 0;
    }
  }

  @media (max-width: 1199.98px) {
    header {
      height: 50px;
      margin: 0;
      width: 100%;
      padding: 0 8px;

      nav {
        padding: 0 8px;
      }
    }

    .title {
      font-size: 0;
    }

    .subtitle {
      font-size: 1.2rem;
      font-weight: bold;
      align-items: center;
      display: inline-flex;
    }
  }

  @media (max-width: 767.98px) {
    header {
      padding: 0;
    }
  }
</style>
