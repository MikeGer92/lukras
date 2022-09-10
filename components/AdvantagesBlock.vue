<template>
  <div class="container">
    <section class="advant">
      <h3 class="advant__title">
        <div class="advant__title_main">Преимущества септиков</div>
        <div class="advant__title_span">ТВЕРЬ</div>
        <div class="advant__title_license">&#174;</div>
      </h3>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'AdvantagesBlock'
  }
</script>

<style lang="scss">
  .advant {
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    &__title {
      display: flex;
      max-width: 540px;
      text-align: left;
      flex-wrap: wrap;
      font-family: 'Roboto Condensed';
      font-weight: 700;
      font-size: 72px;
      line-height: 80px;
      text-transform: uppercase;
      color: #000000;
      &_main {
        display: flex;
        order: 0;
      }
      &_span {
        display: flex;
        // font-weight: 700;
        // font-size: 72px;
        // line-height: 80px;
        // text-transform: uppercase;
        color: transparent;
        -webkit-text-stroke: 1px #000000;
        order: 1;

      }
    }
  }

</style>
