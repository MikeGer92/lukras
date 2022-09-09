<template>
  <section class="advant-block">
    <h3 class="advant-block__title">
      <div class="advant-block__title_main">Преимущества септиков <div>ТВЕРЬ</div></div>
      <!-- <div class="advant-block__title_span"></div>
      <div class="advant-block__title_license">&#174;</div> -->
    </h3>
  </section>
</template>

<script>
  export default {
    name: 'AdvantagesBlock'
  }
</script>

<style lang="scss">
  .advant-block {
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    &__title {
      display: flex;
      max-width: 540px;
      text-align: left;
      flex-wrap: wrap;
      &_main {
        display: flex;
        font-family: 'Roboto Condensed';
        font-style: normal;
        font-weight: 700;
        font-size: 72px;
        line-height: 80px;
        text-transform: uppercase;
        color: #000000;
        order: 0;
      }
      &_span {
        display: flex;
        font-family: 'Roboto Condensed';
        font-style: normal;
        font-weight: 700;
        font-size: 72px;
        line-height: 80px;
        text-transform: uppercase;
        color: transparent;
        -webkit-text-stroke: 1px #000000;
        order: 1;

      }
    }
  }

</style>
