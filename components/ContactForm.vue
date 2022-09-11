<template>
  <div class="contact-form">
    <div class="contact-form__inter">
      <div class="contact-form__inter_title">Наши контакты</div>
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
        <div class="contact-form__inter_social-telegram"><img src="@/assets/images/telegram-icon.png"></div>
            <div class="contact-form__inter_social-whatsup"><img src="@/assets/images/whats-icon.png"></div>
            <div class="contact-form__inter_social-viber"><img src="@/assets/images/vaiber-icon.png"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  .contact-form {
    max-width: 424px;
    border: 1px solid #E3E3E3;
    background: #FFFFFF;
    padding: 8px;
    &__inter {
      display: flex;
      flex-direction: column;
      gap: 48px;
      border: 1px solid #E3E3E3;
      &_title {
        padding: 40px 89px 48px 40px;
        border-bottom: 1px solid #E3E3E3;
        font-family: 'Roboto Condensed';
        font-weight: 700;
        font-size: 32px;
        line-height: 40px;
        text-transform: uppercase;
        color: #000000;
      }
      &_wrapp {
        padding: 0 56px 48px 40px;
        border-bottom: 1px solid #E3E3E3;
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
        display: flex;
        gap: 24px;
        padding: 0 0 40px 40px;
        &-telegram {
          display: flex;
          padding: 14px;
          background: #2CA2DC;
          & img {
            width: 20px;
            height: 20px;
          }
        }
        &-whatsup {
          padding: 14px;
          background: #89E167;
          & img {
            width: 20px;
            height: 20px;
          }
        }
        &-viber {
          padding: 14px;
          background: #7360F2;
          & img {
            width: 20px;
            height: 19px;
          }
        }
      }
    }
  }

</style>
