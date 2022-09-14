<template>
  <div class="contact-form">
    <div class="contact-form__inter">
      <div class="contact-form__inter_title">Наши контакты</div>
      <div class="contact-form__inter_divider"></div>
      <div class="contact-form__inter_wrapp">
        <div class="contact-form__inter_info">
          <div class="contact-form__inter_info-addr">
            <div class="contact-form__inter_info-addr--title">Адрес офиса</div>
            <div class="contact-form__inter_info-addr--address">г. Ростов-на-Дону, ул. Механизаторов 10</div>
          </div>
          <div class="contact-form__inter_info-cont">
            <div class="contact-form__inter_info-cont--phone">
              <div class="contact-form__inter_info-cont--phone_title">Телефон</div>
              <div class="contact-form__inter_info-cont--phone_num">8 (800) 600-90-91</div>
            </div>
            <div class="contact-form__inter_info-cont--mail">
              <div class="contact-form__inter_info-cont--mail_title">E-mail</div>
              <div class="contact-form__inter_info-cont--mail_addr">info@lukras.ru</div>
            </div>
          </div>
        </div>
      </div>
      <div class="contact-form__inter_social">
        <Social></Social>
      </div>
    </div>
  </div>
</template>

<script>
import Social from './Social.vue';
  export default {
    components: { Social }
}
</script>

<style lang="scss">
  .small-form {
    display: none;

  }
  .contact-form {
    max-width: 424px;
    border: 1px solid #E3E3E3;
    background: #FFFFFF;
    padding: 8px;
    &__inter {
      display: flex;
      flex-direction: column;
      border: 1px solid #E3E3E3;
      &_title {
        padding: 40px 89px 48px 40px;
        font-family: 'Roboto Condensed';
        font-weight: 700;
        font-size: 32px;
        line-height: 40px;
        text-transform: uppercase;
        color: #000000;
        order: 0;
      }
      &_divider {
        width: 100%;
        height: 1px;
        background: #E3E3E3;
      }
      &_wrapp {
        padding: 48px 56px 48px 40px;
        border-bottom: 1px solid #E3E3E3;
        order: 1;
      }
      &_info {
        display: flex;
        flex-direction: column;
        gap: 48px;
        &-addr {
          display: flex;
          flex-direction: column;
          &--title {
            font-weight: 400;
            font-size: 16px;
            line-height: 18px;
            color: #3F3F3F;
          }
          &--address {
            margin-top: 16px;
            font-weight: 500;
            font-size: 16px;
            line-height: 18px;
            color: #000000;
          }
        }
        &-cont {
          display: flex;
          column-gap: 72px;
          &--phone, &--mail {
            &_title {
              font-weight: 400;
              font-size: 16px;
              line-height: 18px;
              color: #3F3F3F;
            }
            &_num, &_addr {
              margin-top: 16px;
              font-weight: 500;
              font-size: 16px;
              line-height: 18px;
              color: #000000;
            }
          }
        }
      }
      &_social {
        padding: 48px 40px 40px 40px;
        order: 2;
      }
    }
  }
  @media (min-width: 361px) and (max-width: 768px) {
    .contact-form {
      display: flex;
      max-width: 100%;
      &__inter {
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        &_title {
          width: 50%;
          padding: 40px 32px;
          order: 0;
        }
        &_divider {
          display: none;
        }
        &_wrapp {
          padding: 40px 32px;
          border-top: 1px solid #E3E3E3;
          border-bottom: none;
          order: 2;
        }
        &_info {
          width: 100%;
          flex-direction: row;
          gap: 50px;
          &-cont {
            column-gap: 48px;
          }
        }
        &_social {
          padding: 36px 32px;
          order: 1;
        }
      }
    }
  }
  @media (max-width: 360px) {
    .contact-form {
      display: none;
      display: flex;
      flex-direction: column;
      max-width: 100%;
      &__inter {
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        &_title {
          width: 100%;
          padding: 24px 16px;
          font-size: 32px;
          line-height: 40px;
          order: 0;
        }
        &_divider {
          display: none;
        }
        &_wrapp {
          width: 100%;
          padding: 24px 16px;
          border-top: 1px solid #E3E3E3;
          border-bottom: none;
          order: 1;
        }
        &_info {
          width: 100%;
          flex-direction: column;
          gap: 50px;
          &-addr {
            &--title, &--address {
              font-size: 14px;
              line-height: 16px;
            }
          }
          &-cont {
            column-gap: 48px;
            &--phone, &--mail {
              &_title, &_num, &_addr {
                font-size: 14px;
                line-height: 16px;
              }
            }
          }
        }
        &_social {
          width: 100%;
          border-top: 1px solid #E3E3E3;
          padding: 24px 16px;
          order: 2;
        }
      }
    }
  }
</style>
