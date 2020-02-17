<style lang="scss">
  footer {
    width: 100%;
    padding: 40px;
    margin: 0 auto;
    color: #676767;
    max-width: 1440px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 1199.98px) {
    footer {
      margin: 0;
      width: 100%;
      padding: 8px 16px;
    }
  }

  @media (max-width: 767.98px) {
    footer {
      padding: 8px;
      margin-top: 2rem;
      align-items: flex-end;
      flex-direction: column;

      & > * {
        padding-top: 0.5rem;
      }
    }
  }

  a {
    color: #414141;
    text-decoration: none;
  }

  .icon {
    fill: none;
    stroke-width: 2;
    stroke: currentColor;
    vertical-align: middle;
  }
</style>

<footer>
  <div class="links">
    <a href="https://github.com/ofnullable/svelte-study" target="_blank">
      <svg class="icon" width="20" height="20" viewBox="0 0 24 24">
        <path
            d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'/>
      </svg>
    </a>
  </div>
  <div>Copyright &copy; icondelta, Inc. All rights reserved.</div>
</footer>
