<template>
  <section class="calc-block">
    <div class="calc-block__main">
      <div class="calc-block__main_top">
        <h2 class="calc-block__main_top-title">Рассчитайте стоимость установки Септика для вашего участка</h2>
        <div class="calc-block__main_top-subtitle">Ответьте на 4 вопросов и получите расчёт стоимости и сроков установки септика на ваш участок</div>
      </div>
      <div class="calc-block__main_bottom">
        <div class="calc-block__main_bottom-top">
          <div class="calc-block__main_bottom-top--sqr">1</div>
          <div class="calc-block__main_bottom-top--text">На сколько человек нужна канализация?</div>
        </div>
        </div>
        <div class="calc-block__main_bottom-main">
          <div class="calc-block__main_bottom-main--choise">
            <div class="calc-block__main_bottom-main--choise_item">1 - 10</div>
            <div class="calc-block__main_bottom-main--choise_item">10 - 50</div>
            <div class="calc-block__main_bottom-main--choise_item">50 - 200</div>
          </div>
          <div class="calc-block__main_bottom-main--btn">Следующий вопрос</div>
        </div>
      </div>
  </section>
</template>
<script>
  export default {
    name: 'CalcBlock'
  }
</script>

<style lang="scss">
  .calc-block {
    margin-top: 160px;
    width: 100%;
    border: 1px solid #E3E3E3;
    padding: 8px;
    &__main {
      border: 1px solid #E3E3E3;
      display: flex;
      flex-direction: column;
      &_top {
        display: flex;
        flex-direction: column;
        padding: 40px;
        gap: 24px;
        &-title {
          max-width: 695px;
          font-family: 'Roboto Condensed';
          font-style: normal;
          font-weight: 700;
          font-size: 40px;
          line-height: 48px;
          text-transform: uppercase;
          color: #000000;
        }
        &-subtitle {
          max-width: 409px;
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #3F3F3F;
        }
      }
      &_bottom {
        display: flex;
        flex-direction: column;
        border-top: 1px solid #E3E3E3;
        &-top {
          width: 100%;
          display: flex;
          border-bottom: 1px solid #E3E3E3;
          background: #FCFCFC;
          padding-left: 40px;
          column-gap: 22px;
          &--sqr {
            padding: 22px 24px;
            border-left: 1px solid #E3E3E3;
            border-right: 1px solid #E3E3E3;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 18px;
            text-align: center;
            color: #000000;
          }
          &--text {
            display: flex;
            align-items: center;
          }
        }
        &-main {
          display: flex;
          flex-direction: column;
          padding: 40px;
          gap: 40px;
          &--choise {
            display: flex;
            column-gap: 40px;
            &_item {
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 32px 24px;
              gap: 8px;
              width: 200px;
              height: 80px;
              border: 1px solid #E3E3E3;
            }
          }
          &--btn {
            width: 226px;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            padding: 24px 36px;
            gap: 10px;
            border: 2px solid #FF0000;
            border-radius: 4px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 18px;
            color: #FF0000;
          }
        }
      }
    }
  }

</style>
