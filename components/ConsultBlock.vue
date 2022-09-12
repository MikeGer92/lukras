<template>
  <div class="container">
    <section class="consult">
      <div class="consult__inter">
        <div class="consult__inter_image">
          <div class="consult__inter_image-title">Консультант</div>
        </div>
        <div class="consult__inter_consl">
          <div class="consult__inter_consl-info">
            <h3 class="consult__inter_consl-info--title">Получите консультацию нашего специалиста прямо сейчас</h3>
            <div class="consult__inter_consl-info--subtitle">Оставьте ваши контакты или напишите нам на любой из
              наших мессенджеров. Мы поможем вам найти самое
              подходящее решение уже через 30 минут
            </div>
          </div>
          <div class="consult__inter_consl-form">
            <div class="consult__inter_consl-form--inputs">
              <input type="text" class="consult__inter_consl-form--inputs_inp" placeholder="Имя" name="name">
              <input type="text" class="consult__inter_consl-form--inputs_inp" placeholder="Телефон" name="phone">
            </div>
            <div class="consult__inter_consl-form--add">
              <button type="submit" class="consult__inter_consl-form--add_btn">Отправить</button>
              <div type="submit" class="consult__inter_consl-form--add_text">Нажимая кнопку “отправить”, вы соглашаетесь
                с условиями обработки персональных данных
              </div>
            </div>
          </div>
          <div class="consult__inter_consl-social">
            <div class="consult__inter_consl-social--text">Либо напишите нам в удобный мессенджер</div>
            <Social></Social>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Social from './Social.vue';
  export default {
    name: "ConsultBlock",
    components: { Social }
}
</script>

<style lang="scss">
  .consult {
    padding: 8px;
    border: 1px solid #E3E3E3;
    margin: 160px 0;
    &__inter {
      border: 1px solid #E3E3E3;
      display: flex;
      // height: 618px;
      &_image {
        width: 100%;
        max-width: 640px;
        background: url('@/assets/images/consultant.png') 0px 0px/cover no-repeat;
        &-title {
          max-width: 208px;
          padding: 12px 62px;
          font-weight: 400;
          font-size: 14px;
          line-height: 16px;
          text-align: center;
          color: #3F3F3F;
          background: #FCFCFC;
          border: 1px solid #E3E3E3;
          border-top: none;
          border-left: none;
        }
      }
      &_consl {
        display: flex;
        flex-direction: column;
        gap: 48px;
        &-info {
          display: flex;
          flex-direction: column;
          padding: 48px 48px 0 48px;
          &--title {
            font-family: 'Roboto Condensed';
            font-weight: 700;
            font-size: 32px;
            line-height: 40px;
            text-transform: uppercase;
            color: #000000;
          }
          &--subtitle {
            margin-top: 24px;
            max-width: 452px;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #3F3F3F;
          }
        }
        &-form {
          display: flex;
          flex-direction: column;
          padding: 0 48px;
          gap: 24px;
          &--inputs {
            display: flex;
            column-gap: 24px;
            &_inp {
              width: 272px;
              padding: 23px 24px;
              border: 1px solid #E3E3E3;
              font-weight: 400;
              font-size: 16px;
              line-height: 18px;
              color: #B5B5B5;
            }
          }
          &--add {
            display: flex;
            align-items: center;
            gap: 32px;
            &_btn {
              padding: 24px 36px;
              border: 2px solid #FF0000;
              border-radius: 4px;
              font-weight: 500;
              font-size: 16px;
              line-height: 18px;
              color: #FF0000;
            }
            &_text {
              max-width: 275px;
              font-weight: 400;
              font-size: 12px;
              line-height: 18px;
              color: #B5B5B5;
            }
          }
        }
        &-social {
          display: flex;
          justify-content: space-between;
          background: #FCFCFC;
          border-top: 1px solid #E3E3E3;
          padding: 48px;
          &--text {
            max-width: 184px;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #3F3F3F;
          }
        }
      }
    }
  }

</style>
