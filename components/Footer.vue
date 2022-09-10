<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__contact">
          <div class="footer__contact_logo"><img src="@/assets/images/logo.png"></div>
          <div class="footer__contact_contacts">
            <div class="footer__contact_contacts-title">Контакты:</div>
            <div class="footer__contact_contacts-phone">8 (800) 600-90-91</div>
            <div class="footer__contact_contacts-mail">info@lukras.ru</div>
          </div>
          <div class="footer__contact_social">
            <div class="footer__contact_social-telegram"><img src="@/assets/images/telegram-icon.png"></div>
            <div class="footer__contact_social-whatsup"><img src="@/assets/images/whats-icon.png"></div>
            <div class="footer__contact_social-viber"><img src="@/assets/images/vaiber-icon.png"></div>
          </div>
        </div>
        <div class="footer__menu">
          <div class="footer__menu_title">Меню</div>
          <ul class="footer__menu_list">
            <li class="footer__menu_list-link" @click="moveTo('main')">Главная</li>
            <li class="footer__menu_list-link" @click="moveTo('calc')">Рассчитать стоимость</li>
            <li class="footer__menu_list-link" @click="moveTo('catalog')">Каталог</li>
            <li class="footer__menu_list-link" @click="moveTo('advant')">Преимущества</li>
            <li class="footer__menu_list-link" @click="moveTo('certif')">Сертификат</li>
            <li class="footer__menu_list-link" @click="moveTo('catalog')">Этапы работ</li>
            <li class="footer__menu_list-link" @click="moveTo('catalog')">Контакты</li>
          </ul>
        </div>
        <div class="footer__inform">
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
export default {
  name: 'Footer',
  methods: {
    moveTo(id) {
      // const refName = 'certif'
      this.$emit('goTo', id)
    }
  }
}
</script>

<style lang="scss">
  .footer {
    background: #FCFCFC;
    &__wrapper {
      display: flex;
      padding: 48px 0;
    }
    &__contact {
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
      }
      &_social {
        display: flex;
        gap: 24px;
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
    &__menu {
      max-width: 187px;
      margin-left: 368px;
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
        flex-direction: column;
        margin-top: 32px;
        gap: 16px;
        &-link {
          text-decoration: none;
          font-weight: 400;
          font-size: 14px;
          line-height: 16px;
          color: #4D4D4D;
          word-break: nowrap;
          cursor: pointer;
        }
      }
    }
    &__inform {
      max-width: 423px;
      margin-left: 150px;
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

</style>
