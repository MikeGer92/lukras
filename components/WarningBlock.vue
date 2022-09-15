<template>
  <section class="warning" id="warning">
    <div class="container">
      <h2 class="warning__title">ОСТЕРЕГАЙТЕСЬ КОМПАНИЙ ОДНОДНЕВОК</h2>
    </div>
    <div class="warning__info">
      <div class="warning__info_wrap">
        <Corner :style="{'width': '64px', 'height': '64px', 'transform': 'rotate(90deg)'}"></Corner>
        <div class="warning__info_item">
          <h3 class="warning__info_item-title">Снимается гарантии от производителя</h3>
          <h5 class="warning__info_item-descr">Если монтаж произведен НЕ официальным представителем, ГАРАНТИЯ СНИМАЕТСЯ</h5>
        </div>
        <Corner :style="{'width': '64px', 'height': '64px', 'margin-top': '-64px', 'transform': 'rotate(-90deg)', 'align-self': 'flex-end'}"></Corner>
      </div>
      <div class="warning__info_wrap">
        <Corner :style="{'width': '64px', 'height': '64px', 'transform': 'rotate(90deg)'}"></Corner>
        <div class="warning__info_item">
          <h3 class="warning__info_item-title">НЕПРАВИЛЬНЫЙ МОНТАЖ</h3>
          <h4 class="warning__info_item-descr">
            <p class="warning__info_item-descr--text">Затопленние септика</p>
            <p class="warning__info_item-descr--text">Септик выдавит из грунта</p>
            <p class="warning__info_item-descr--text">Поломки в процессе эксплуатации</p>
          </h4>
        </div>
        <Corner :style="{'width': '64px', 'height': '64px', 'margin-top': '-64px', 'transform': 'rotate(-90deg)', 'align-self': 'flex-end'}"></Corner>
      </div>
    </div>

  </section>
</template>

<script>
import Corner from './Corner.vue';
  export default {
    components: { Corner }
}
</script>

<style lang="scss">
  .warning {
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    margin-top: 120px;
    background: #FCFCFC;
    padding: 80px 0;
    &__title {
      max-width: 813px;
      margin: 0 auto;
      font-family: 'Roboto Condensed';
      font-weight: 700;
      font-size: 72px;
      line-height: 80px;
      text-align: center;
      text-transform: uppercase;
      color: #000000;
    }
    &__info {
      display: flex;
      justify-content: space-between;
      max-width: 896px;
      margin-top: 64px;
      display: flex;
      gap: 50px;
      &_wrap {
        display: flex;
        flex-direction: column;
      }
      &_item {
        margin-top: -64px;
        display: flex;
        flex-direction: column;
        padding: 48px 110px 48px 48px;
        gap: 36px;
        &-title {
          max-width: 252px;
          font-family: 'Roboto Condensed';
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          line-height: 24px;
          text-transform: uppercase;
          color: #BF0000;
        }
        &-descr {
          font-weight: 400;
          max-width: 265px;
          font-size: 16px;
          line-height: 24px;
          color: #464646;
        }
      }
    }
  }
  @media (min-width: 671px) and (max-width: 768px) {
    .warning {
      margin-top: 100px;
      padding: 64px 0;
      &__title {
        width: 100%;
        font-size: 48px;
        line-height: 56px;
        gap: 24px;
      }
      &__info {
        max-width: 724px;
        gap: 24px;
        &_item {
          justify-content: space-between;
          padding: 24px;
        }
      }
    }
  }
  @media (min-width: 577px) and (max-width: 670px) {
    .warning {
      margin-top: 80px;
      padding: 48px 0;
      &__title {
        width: 100%;
        font-size: 48px;
        line-height: 56px;
      }
      &__info {
        max-width: 724px;
        flex-wrap: wrap;
        justify-content: center;
        &_item {
          justify-content: space-between;
          padding: 32px;
          gap: 32px;
        }
      }
    }
  }
@media (max-width: 576px) {
  .warning {
    margin-top: 64px;
    padding: 48px 0;
    &__title {
      font-size: 38px;
      line-height: 42px;
    }
    &__info {
      margin-top: 32px;
      max-width: 100%;
      flex-wrap: wrap;
      justify-content: center;
      &_item {
        padding: 32px;
        gap: 32px;
      }
    }
  }
}
</style>
