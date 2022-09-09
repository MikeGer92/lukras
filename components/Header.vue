<template>
  <div class="header">
    <div class="header__top">
      <div
        class="header__top_links"
      >
        <nuxt-link
          v-for="link in links"
          :key="link.url"
          active-class="active"
          :to="link.url"
          :exact="link.exact"
          class='header__top_links-link'
          :class="{ 'header__top_links-link--active': $route.path === `${link.url}`}"
          >
          {{ link.title }}
        </nuxt-link>
      </div>
      <div class="header__top_contacts">
        <div class="header__top_contacts-contact">Ул. Механизаторов 10</div>
        <div class="header__top_contacts-contact">info@lukras.ru</div>
        <div class="header__top_contacts-contact">Звоните ПН - ВС: 9:00 - 18:00</div>
      </div>

    </div>
    <div class="header__divider"></div>
    <div class="header__bottom">
      <div class="header__bottom_brand"></div>
      <div class="header__bottom_social">
        <div class="header__bottom_social-item">Telegram</div>
        <div class="header__bottom_social-item">WhatsApp</div>
        <div class="header__bottom_social-item">Viber</div>
        <div class="header__bottom_social-divider"></div>
        <div class="header__bottom_social-phone">8 (800) 600-90-91</div>
        <div class="header__bottom_social-request">Оставить заявку</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        links: [
          {title: 'Рассчет стоимости', url: '/', exact: true},
          {title: 'Каталог', url: '/catalog'},
          {title: 'Преимущества', url: '/tradein'},
          {title: 'Осторожно', url: '/warning'},
          {title: 'Этапы работы', url: '/steps'},
          {title: 'Контакты', url: '/contacts'},
        ],
      }
    }
  }
</script>

<style lang="scss">
  .header {
    width: 100%;
    width: 1320px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px 0px 0px;
    gap: 24px;
    &__top {
      display: flex;
      width: 100%;
      justify-content: space-between;
      &_links, &_contacts {
        display: flex;
        column-gap: 24px;
        &-link, &-contact {
          flex: auto;
          text-decoration: none;
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 16px;
          color: #9D9D9D;
          cursor: pointer;
          &--active {
            color: #000000;
          }
        }
      }
    }
    &__divider {
      display: flex;
      width: 100%;
      height: 1px;
      background: #EAEAEA;
    }
    &__bottom {
      display: flex;
      width: 100%;
      height: 40px;
      margin: 0 auto;
      justify-content: space-between;
      align-items: center;
      &_brand {
        display: flex;
        width: 144.7px;
        height: 24px;
        background: url('../assets/images/logo.png') 0px 0px/cover no-repeat;
      }
      &_social {
        display: flex;
        align-items: center;
        &-item {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 16px;
          color: #000000;
          margin-right: 24px;
          &:last-child {
            margin-right: 0;
          }
        }
        &-divider {
          width: 1px;
          height: 16px;
          margin: auto 32px;
          background: #EAEAEA;
        }
        &-phone {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 16px;
          text-align: right;
          color: #000000;
          margin-right: 32px;
        }
        &-request {
          box-sizing: border-box;
          display: flex;
          padding: 12px 23px;
          gap: 10px;
          width: 159px;
          height: 40px;
          border: 1px solid #EAEAEA;
          border-radius: 4px;
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 16px;
          color: #000000;
          cursor: pointer;
        }

      }
    }
  }

</style>
