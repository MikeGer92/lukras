<template>
  <section class="warning">
    <h2 class="warning__title">ОСТЕРЕГАЙТЕСЬ КОМПАНИЙ ОДНОДНЕВОК</h2>
    <div class="warning__info">
      <div class="warning__info_wrap">
        <Corner :style="{'width': '64px', 'transform': 'rotate(90deg)'}"></Corner>
        <div class="warning__info_item">
          <h3 class="warning__info_item-title">Снимается гарантии от производителя</h3>
          <h5 class="warning__info_item-descr">Если монтаж произведен НЕ официальным представителем, ГАРАНТИЯ СНИМАЕТСЯ</h5>
        </div>
        <Corner :style="{'width': '64px', 'margin-top': '-64px', 'transform': 'rotate(-90deg)', 'align-self': 'flex-end'}"></Corner>
      </div>
      <div class="warning__info_wrap">
        <Corner :style="{'width': '64px', 'transform': 'rotate(90deg)'}"></Corner>
        <div class="warning__info_item">
          <h3 class="warning__info_item-title">НЕПРАВИЛЬНЫЙ МОНТАЖ</h3>
          <h4 class="warning__info_item-descr">
            <p class="warning__info_item-descr--text">Затопленние септика</p>
            <p class="warning__info_item-descr--text">Септик выдавит из грунта</p>
            <p class="warning__info_item-descr--text">Поломки в процессе эксплуатации</p>
          </h4>
        </div>
        <Corner :style="{'width': '64px', 'margin-top': '-64px', 'transform': 'rotate(-90deg)', 'align-self': 'flex-end'}"></Corner>
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
    align-items: center;
    flex-direction: column;
    margin-top: 120px;
    background: #FCFCFC;
    padding: 80px 0;
    &__title {
      max-width: 813px;
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

</style>
