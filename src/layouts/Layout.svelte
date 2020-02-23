<div id="root">
  <Header />
  <main class="container">
    <slot />
  </main>
  <Footer />
</div>

<script>
  import Header from './Header';
  import Footer from './Footer';
</script>

<style lang="scss">
  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .container {
    margin: 0 auto;
    width: 100%;
    max-width: 1440px;
    padding: 8px 16px;
    flex: 1 1 auto;
  }

  @media (max-width: 767.98px) {
    .container {
      padding: 8px;
    }
  }
</style>
