<template>
  <div>
    <div class="small-form">
      <div class="small-form__inter">
        <div class="small-form__inter_title">Наши контакты</div>
        <div class="small-form__inter_divider"></div>
        <div class="small-form__inter_wrapp">
          <div class="small-form__inter_info">
            <div class="small-form__inter_info-addr">
              <div class="small-form__inter_info-addr--title">Адрес офиса</div>
              <div class="small-form__inter_info-addr--address">г. Ростов-на-Дону, ул. Механизаторов 10</div>
            </div>
            <div class="small-form__inter_info-cont">
              <div class="small-form__inter_info-cont--phone">
                <div class="small-form__inter_info-cont--phone_title">Телефон</div>
                <div class="small-form__inter_info-cont--phone_num">8 (800) 600-90-91</div>
              </div>
              <div class="small-form__inter_info-cont--mail">
                <div class="small-form__inter_info-cont--mail_title">E-mail</div>
                <div class="small-form__inter_info-cont--mail_addr">info@lukras.ru</div>
              </div>
            </div>
          </div>
        </div>
        <div class="small-form__inter_social">
          <Social></Social>
        </div>
      </div>
    </div>
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
    max-width: 100%;
    border: 1px solid #E3E3E3;
    background: #FFFFFF;
    padding: 8px;
    &__inter {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      border: 1px solid #E3E3E3;
      &_title {
        padding: 36px 32px;
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
        padding: 36px 32px;
        border-bottom: 1px solid #E3E3E3;
        order: 2;
      }
      &_info {
        display: flex;
        flex-direction: column;
        gap: 24px;
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
        padding: 36px 32px;
        order: 1;
      }
    }
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
  @media (min-width: 390px) and (max-width: 768px) {
    .small-form {
      display: flex;
    }
    .contact-form {
      display: none;
      max-width: 724px;
      max-height: 280px;
      &__inter {
        flex-direction: row;
        flex-wrap: wrap;
        &_title {
          padding: 36px 32px 44px 32px;
        }
        &_wrapp {
          flex-direction: row;
          padding: 40px 32px 32px 32px;
          order: 2;
        }
        &_info {
          width: 100%;
          flex-direction: row;
          &-cont {
            gap: 32px;
          }
        }
        &_social {
          order: 1;
          padding: 36px 32px 44px 32px;
          border-bottom: 1px solid #E3E3E3;
        }
      }
    }
  }
</style>
