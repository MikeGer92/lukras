<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__contact" data-aos="new-animation" data-aos-duration="800">
          <div class="footer__contact_logo"><img src="@/assets/images/logo.png"></div>
          <div class="footer__contact_contacts-wrapper">
            <div class="footer__contact_contacts">
              <div class="footer__contact_contacts-title">Контакты:</div>
              <div class="footer__contact_contacts-phone">8 (800) 600-90-91</div>
              <div class="footer__contact_contacts-mail">info@lukras.ru</div>
            </div>
            <Social></Social>
        </div>
        </div>
        <div class="footer__menu" data-aos="new-animation" data-aos-duration="1200">
          <div class="footer__menu_title">Меню</div>
          <ul class="footer__menu_list">
            <li class="footer__menu_list-link" v-scroll-to="'#main'">Главная</li>
            <li class="footer__menu_list-link" v-scroll-to="'/#calc'">Рассчитать стоимость</li>
            <li class="footer__menu_list-link" v-scroll-to="'#catalog'">Каталог</li>
            <li class="footer__menu_list-link" v-scroll-to="'#advant'">Преимущества</li>
            <li class="footer__menu_list-link" v-scroll-to="'#certif'">Сертификат</li>
            <li class="footer__menu_list-link" v-scroll-to="'#steps'">Этапы работ</li>
            <li class="footer__menu_list-link" v-scroll-to="'#contacts'">Контакты</li>
          </ul>
        </div>
        <div class="footer__inform" data-aos="new-animation" data-aos-duration="1600">
          <div class="footer__inform_title">Информация</div>
          <div class="footer__inform_subtitle">Сайт не является публичной офертой. Вся информация
            носит ознакомительный характер и может отличаться от
            действительности. Актуальную информацию вы можете
            узнать по телефону
          </div>
          <div class="footer__inform_copyright">Копирование материалов сайта без письменного разрешения
            запрещена. Все права защищены, LUKRAS 2012-2022
          </div>
          <div class="footer__inform_personal">Политика обработки персональных данных</div>
        </div>
    </div>
    </div>

  </footer>
</template>

<script>
import Social from './Social.vue';
export default {
  name: "Footer",
  components: { Social }
}
</script>

<style lang="scss">
  [data-aos="new-animation"] {
    opacity: 0;
    transition-property: transform, opacity;

    &.aos-animate {
      opacity: 1;
    }
  }
  .footer {
    width: 100%;
    background: #FCFCFC;
    &__wrapper {
      display: grid;
      grid-template-columns: repeat(12, 1fr );
      column-gap: 24px;
      padding: 48px 0;
    }
    &__contact {
      grid-column: span 5;
      display: flex;
      flex-direction: column;
      gap: 48px;
      &_logo {
        width: 145px;
        height: 24px;
        object-fit: cover;
      }
      &_contacts {
        display: flex;
        flex-direction: column;
        gap: 16px;
        &-title {
          font-weight: 400;
          font-size: 16px;
          line-height: 18px;
          color: #3F3F3F;
        }
        &-phone, &-mail {
          font-weight: 700;
          font-size: 24px;
          line-height: 24px;
          text-transform: uppercase;
          color: #000000;
        }
        &-mail {
          padding-bottom: 48px;
        }
      }
    }
    &__menu {
      grid-column: span 3;
      &_title {
        font-family: 'Roboto Condensed';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 24px;
        text-transform: uppercase;
        color: #000000;
      }
      &_list {
        display: flex;
        list-style: none;
        flex-direction: column;
        margin-top: 32px;
        gap: 16px;
        &-link {
          font-weight: 400;
          font-size: 14px;
          line-height: 16px;
          color: #4D4D4D;
          word-break: nowrap;
          cursor: pointer;
          &:hover {
            font-weight: 600;
            color: #000000;
          }
        }
      }
    }
    &__inform {
      grid-column: span 3;
      &_title {
        font-family: 'Roboto Condensed';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 24px;
        text-transform: uppercase;
        color: #000000;
      }
      &_subtitle {
        margin-top: 22px;
        max-width: 393px;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #4D4D4D;
      }
      &_copyright, &_personal  {
        margin-top: 64px;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #BCBCBC;
      }
      &_personal {
        margin-top: 16px;
      }
    }
  }
  @media (min-width: 769px) and (max-width: 992px) {
    .footer {
      &__wrapper {
        row-gap: 48px;
        grid-template-columns: repeat(12, 1fr );
        column-gap: 0;
      }
      &__contact {
        display: grid;
        grid-template-columns: repeat(12, 1fr );
        grid-column: span 12;
        column-gap: 0;
        padding: 0 0px 48px 0;
        border-bottom: 1px solid #E3E3E3;
        flex-direction: row;
        justify-content: space-between;
        &_logo {
          grid-column: span 6;
        }
        &_contacts {
          flex-direction: column;
          padding-bottom: 48px;
          &-wrapper {
            flex-direction: column;
            grid-column: span 6;
          }
        }
      }
      &__menu {
        grid-column: span 6;
      }
      &__inform {
        grid-column: span 6;
      }
    }
  }
  @media (min-width: 577px) and (max-width: 768px) {
    .footer {
      &__wrapper {
        row-gap: 48px;
        grid-template-columns: repeat(12, 1fr );
        column-gap: 0;
      }
      &__contact {
        display: grid;
        grid-template-columns: repeat(12, 1fr );
        grid-column: span 12;
        column-gap: 0;
        padding: 0 0px 48px 0;
        border-bottom: 1px solid #E3E3E3;
        flex-direction: row;
        justify-content: space-between;
        &_logo {
          grid-column: span 6;
        }
        &_contacts {
          flex-direction: column;
          padding-bottom: 48px;
          &-wrapper {
            flex-direction: column;
            grid-column: span 6;
          }
        }
      }
      &__menu {
        grid-column: span 6;
      }
      &__inform {
        grid-column: span 6;
      }
    }
  }
  @media (max-width: 576px) {
    .footer {
      &__wrapper {
        padding-top: 64px;
        row-gap: 32px;
        grid-template-columns: repeat(12, 1fr );
        column-gap: 0;
        display: flex;
        flex-direction: column;
      }
      &__contact {
        margin-top: 32px;
        display: grid;
        grid-column: span 12;
        grid-template-columns: repeat(12, 1fr );
        row-gap: 32px;
        column-gap: 0;
        padding: 0 0px 32px 0;
        border-bottom: 1px solid #E3E3E3;
        &_contacts {
          flex-direction: column;
          padding-bottom: 0px;
          &-wrapper {
            flex-direction: column;
            grid-column: span 12;
          }
          &-mail {
            padding-bottom: 32px;
          }
        }
      }
      &__menu {
        grid-column: span 6;
      }
      &__inform {
        grid-column: span 6;
      }
    }
  }
</style>
