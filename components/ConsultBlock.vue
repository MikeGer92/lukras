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
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      &_image {
        grid-column: span 6;
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
        grid-column: span 6;
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
            order: 0;
          }
        }
      }
    }
  }
  @media (min-width: 541px) and (max-width: 768px) {
    .consult {
      margin: 100px 0;
      grid-template-columns: repeat(12, 1fr);
      &__inter {
        flex-direction: column;
        &_image {
          grid-column: span 12;
          height: 438px;
          background: url('@/assets/images/consultant-small.png') 0px 0px/cover no-repeat;
        }
        &_consl {
          grid-column: span 12;
          gap: 40px;
          &-info {
            padding: 40px 40px 0 40px;
          }
          &-social {
            padding: 40px;
          }
        }
      }
    }
  }
  @media (max-width: 540px) {
    .consult {
      margin: 64px -16px;
      grid-template-columns: repeat(12, 1fr);
      &__inter {
        flex-direction: column;
        &_image {
          grid-column: span 12;
          height: 220px;
          background: url('@/assets/images/consultant-small.png') 0px 0px/cover no-repeat;
          &-title {
            padding: 12px 24px;
            max-width: 132px;
          }
        }
        &_consl {
          grid-column: span 12;
          gap: 24px;
          &-info {
            padding: 24px 32px 0 16px;
            &--title {
              font-size: 24px;
              line-height: 32px;
            }
            &--subtitle {
              margin-top: 16px;
              font-size: 14px;
              line-height: 20px;
            }
          }
          &-form {
            flex-direction: column;
            align-items: center;
            padding: 0;
            &--inputs {
              flex-direction: column;
              gap: 24px;
              &_inp {
                width: 312px;
              }
            }
            &--add {
              flex-direction: column;
              gap: 16px;
              &_btn {
                padding: 24px 115px;
              }
            }
          }
          &-social {
            flex-direction: column;
            padding: 24px;
            gap: 24px;
            align-items: center;
            &--text {
              text-align: center;
            }
          }
        }
      }
    }
  }
</style>
