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
    flex: 1 1;
    display: flex;
    flex-direction: column;
  }

  .container {
    width: 100%;
    margin: 0 auto;
    flex: 1 1 auto;
    max-width: 1440px;
    padding: 8px 16px;
  }

  @media (max-width: 767.98px) {
    .container {
      padding: 8px;
    }
  }
</style>
