<div class="error card">
  <h1>404</h1>
  <h2>page not found..</h2>
  <p>Requested path: {`/${params.wild}`}</p>
</div>

<script>
  export let params = {};
</script>

<style lang="scss">
  .error {
    width: 100%;
    padding: 16px;
    text-align: center;

    h1 {
      margin: 0.5em;
      font-size: 5rem;
      color: #e12343;
    }
  }
</style>
