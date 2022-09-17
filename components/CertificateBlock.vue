<template>
  <div class="container">
    <section class="cert" id="certif">
      <div class="cert__inter">
        <div class="cert__inter_left">
          <div class="cert__inter_left-title">Сертификат диллерства</div>
          <div class="cert__inter_left-main"><img src="@/assets/images/certificate.png"></div>
        </div>
        <div class="cert__inter_right">
          <div class="cert__inter_right-info">
            <h3 class="cert__inter_right-info--title">Давайте на чистоту</h3>
            <h4 class="cert__inter_right-info--subtitle">Чтобы узнать конечную стоимость септика, необходимо согласовать модель, доставку, ваш подарок и т. д.</h4>
          </div>
          <div class="cert__inter_right-whatsup">
            <a href="#" class="cert__inter_right-whatsup--link">
              <button type="button" class="cert__inter_right-whatsup--btn">
                <div class="cert__inter_right-whatsup--btn_icon"><img src="@/assets/images/whats-icon.png"></div>
                <div class="cert__inter_right-whatsup--btn_text">Написать в WhatsApp</div>
              </button>
            </a>
            <div class="cert__inter_right-whatsup--text">Можем начать с переписки в WhatsApp, это удобно и быстро</div>
          </div>
          <div class="cert__inter_right-gift">
            <div class="cert__inter_right-gift--icon"><img src="@/assets/images/gift-icon.png"></div>
            <div class="cert__inter_right-gift--text">Будьте уверены, у нас самые низкие<br>цены, а еще мы дарим подарки!</div>
          </div>
        </div>
      </div>

    </section>

  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  .cert {
    display: flex;
    margin-top: 160px;
    padding: 8px;
    border: 1px solid #E3E3E3;
    &__inter {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      border: 1px solid #E3E3E3;
      &_left {
        grid-column: span 6;
        border-right: 1px solid #E3E3E3;
        background: #FCFCFC;
        &-title {
          max-width: 256px;
          padding: 12px 24px;
          font-weight: 400;
          font-size: 14px;
          line-height: 16px;
          text-align: center;
          color: #3F3F3F;
          border-bottom: 1px solid #E3E3E3;
          border-right: 1px solid #E3E3E3;
        }
        &-main {
          padding: 35px 187px 75px 188px;
        }
      }
      &_right {
        grid-column: span 6;
        display: flex;
        flex-direction: column;
        &-info {
          display: flex;
          flex-direction: column;
          padding: 48px 69px 48px 48px;
          border-bottom: 1px solid #E3E3E3;
          &--title {
            font-family: 'Roboto Condensed';
            font-weight: 700;
            font-size: 32px;
            line-height: 32px;
            text-transform: uppercase;
            color: #000000;
          }
          &--subtitle {
            margin-top: 32px;
            font-weight: 500;
            font-size: 20px;
            line-height: 28px;
            color: #000000;
          }
        }
        &-whatsup {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding: 48px;
          &--link {
            text-decoration: none;
          }
          &--btn {
            display: flex;
            align-items: center;
            max-width: 300px;
            border: 2px solid #74D95B;
            border-radius: 4px;
            &_icon {
              background: #74D95B;
              padding: 13px;
              object-fit: cover;
            }
            &_text {
              padding: 0 22px;
              font-weight: 500;
              font-size: 16px;
              line-height: 18px;
              color: #74D95B;
            }
          }
          &--text {
            margin-left: 24px;
            max-width: 247px;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #3F3F3F;
          }
        }
        &-gift {
          display: flex;
          justify-content: flex-start;
          background: #FCFCFC;
          border-top: 1px solid #E3E3E3;
          padding: 48px;
          gap: 24px;
          &--icon {
            width: 48px;
            height: 48px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #FCFCFC;
            border: 1px solid #E3E3E3;
          }
          &--text {
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #3F3F3F;
          }
        }
      }
    }
  }
  @media (min-width: 993px) and (max-width: 1170px) {
    .cert {
      margin-top: 100px;
      &__inter {
        &_left {
          grid-column: span 6;
          &-main {
            display: flex;
            padding: 35px;
            justify-content: center;
          }
        }
        &_right {
          &-info {
            padding: 32px;
          }
          &-whatsup {
            padding: 32px;
          }
          &-social {
            padding: 32px;
          }
        }
      }
    }
  }
  @media (min-width: 769px) and (max-width: 992px) {
    .cert {
      margin-top: 100px;
      &__inter {
        &_left {
          grid-column: span 12;
          &-main {
            display: flex;
            padding: 35px;
            justify-content: center;
          }
        }
        &_right {
          grid-column: span 12;
          &-info {
            border-top: 1px solid #E3E3E3;
          }
          &-whatsup {
            padding: 16px;
          }
        }
      }
    }
  }

  @media (min-width: 661px) and (max-width: 768px) {
    .cert {
      margin-top: 100px;
      &__inter {
        &_left {
          grid-column: span 12;
          &-main {
            display: flex;
            padding: 35px;
            justify-content: center;
          }
        }
        &_right {
          &-info {
            border-top: 1px solid #E3E3E3;
          }
          grid-column: span 12;
          &-whatsup {
            padding: 16px;
          }
        }
      }
    }
  }
  @media (min-width: 577px) and (max-width: 660px) {
    .cert {
      margin-top: 100px;
      &__inter {
        &_left {
          grid-column: span 12;
          &-main {
            display: flex;
            padding: 35px;
            justify-content: center;
          }
        }
        &_right {
          grid-column: span 12;
          &-whatsup {
            padding: 16px;
          }
        }
      }
    }
  }
  @media (max-width: 576px) {
    .cert {
      margin-top: 64px;
      &__inter {
        &_left {
          grid-column: span 12;
          border-bottom: 1px solid #E3E3E3;
          border-right: none;
          &-main {
            width: 100%;
            padding: 9px 65px 50px 66px;
            display: flex;
            object-fit: cover;
            justify-content: center;
            & img {
              width: 213px;
              height: auto;
            }
          }
        }
        &_right {
          grid-column: span 12;
          &-info {
            padding: 24px 16px;
            &--title {
              font-size: 24px;
              line-height: 32px;
            }
            &--subtitle {
              font-size: 15px;
              line-height: 24px;
              margin-top: 24px;
            }
          }
          &-whatsup {
            flex-direction: column;
            padding: 24px;
            &--btn {
              width: 285px;
            }
            &--text {
              font-size: 15px;
              line-height: 24px;
              margin-left: 0;
              margin-top: 24px;
            }
          }
          &-gift {
            padding: 24px 24px;
            flex-direction: column;
            gap: 16px;
            &--icon {
              max-width: 48px;
              padding: 13px;
              align-self: center;
            }
            &--text {
              font-size: 15px;
              text-align: center;
            }
          }
        }
      }
    }
  }
</style>
