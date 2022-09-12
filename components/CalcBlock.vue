<template>
  <div class="container">
    <section class="calc" id="calc">
      <div class="calc__main">
        <div class="calc__main_top">
          <h2 class="calc__main_top-title">Рассчитайте стоимость установки Септика для вашего участка</h2>
          <div class="calc__main_top-subtitle">Ответьте на 4 вопросов и получите расчёт стоимости и сроков установки септика на ваш участок</div>
        </div>
        <div class="calc__main_bottom">
          <div class="calc__main_bottom-top">
            <div class="calc__main_bottom-top--sqr">1</div>
            <div class="calc__main_bottom-top--text">На сколько человек нужна канализация?</div>
          </div>
          </div>
          <div class="calc__main_bottom-main">
            <div class="calc__main_bottom-main--choise">
              <div class="calc__main_bottom-main--choise_item">1 - 10</div>
              <div class="calc__main_bottom-main--choise_item calc__main_bottom-main--choise_item-active">10 - 50</div>
              <div class="calc__main_bottom-main--choise_item">50 - 200</div>
            </div>
            <button type="button" class="calc__main_bottom-main--btn">Следующий вопрос</button>
          </div>
        </div>
    </section>
  </div>
</template>
<script>
  export default {
    name: 'CalcBlock'
  }
</script>

<style lang="scss">
  .calc {
    margin-top: 160px;
    width: 100%;
    border: 1px solid #E3E3E3;
    padding: 8px;
    &__main {
      border: 1px solid #E3E3E3;
      &_top {
        padding: 40px;
        &-title {
          max-width: 695px;
          margin-bottom: 24px;
          font-family: 'Roboto Condensed';
          font-weight: 700;
          font-size: 40px;
          line-height: 48px;
          text-transform: uppercase;
          color: #000000;
        }
        &-subtitle {
          max-width: 409px;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #3F3F3F;
        }
      }
      &_bottom {
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
          &--choise {
            display: flex;
            column-gap: 40px;
            margin-bottom: 40px;
            &_item {
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 32px 24px;
              gap: 8px;
              width: 200px;
              height: 80px;
              border: 1px solid #E3E3E3;
              cursor: pointer;
              &-active {
                color: #000000;
                border: 1px solid #000000;
              }
            }
          }
          &--btn {
            max-width: 226px;
            display: flex;
            padding: 24px 36px;
            border: 2px solid #FF0000;
            border-radius: 4px;
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
