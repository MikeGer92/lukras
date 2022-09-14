<template>
  <div class="container">
    <header class="header">
      <div class="header__top">
        <div
          :class="{'header__top_links': true, 'header__top_links-active': isShowLinks}"
        >
          <li
            v-for="link in links"
            :key="link.url"
            v-scroll-to="`#${link.url}`"
            active-class="active"
            class='header__top_links-link'
            :class="{ 'header__top_links-link--active': $route.path === `${link.url}`}"
            >
            {{ link.title }}
          </li>
        </div>
        <div
          :class="{'header__top_contacts': true, 'header__top_contacts-deactive': isShowLinks}"
        >
          <div class="header__top_contacts-contact">Ул. Механизаторов 10</div>
          <div class="header__top_contacts-contact">info@lukras.ru</div>
          <div class="header__top_contacts-contact">Звоните ПН - ВС: 9:00 - 18:00</div>
        </div>
        <div
          :class="{'header__top_popup': true, 'header__top_popup-deactive': isShowLinks}"
          @click="isLinks"
        >
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
    </header>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        isShowLinks: false,
        links: [
          {title: 'Рассчет стоимости', url: 'main', exact: true},
          {title: 'Каталог', url: 'catalog'},
          {title: 'Преимущества', url: 'advant'},
          {title: 'Осторожно', url: 'warning'},
          {title: 'Этапы работы', url: 'steps'},
          {title: 'Контакты', url: 'contacts'},
        ],
      }
    },
    methods: {
      isLinks() {
        this.isShowLinks = !this.isShowLinks
      }
    }
  }
</script>

<style lang="scss">
  .header {
    width: 100%;
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
        list-style: none;
        &-link, &-contact {
          flex: auto;
          text-decoration: none;
          font-weight: 400;
          font-size: 14px;
          line-height: 16px;
          color: #9D9D9D;
          cursor: pointer;
        }
      }
      &_popup {
        width: 18px;
        height: 16px;
        background: url('@/assets/images/show.svg');
        display: none;
        &-deactive {
          width: 13px;
          height: 13px;
          background: url('@/assets/images/close.svg');
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
        background: url('../assets/images/logo.svg') 0px 0px/cover no-repeat;
      }
      &_social {
        display: flex;
        align-items: center;
        gap: 24px;
        &-item {
          font-weight: 500;
          font-size: 14px;
          line-height: 16px;
          color: #000000;
        }
        &-divider {
          width: 1px;
          height: 16px;
          margin: auto 8px;
          background: #EAEAEA;
        }
        &-phone {
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
          font-weight: 500;
          font-size: 14px;
          line-height: 16px;
          color: #000000;
          cursor: pointer;
        }
      }
    }
  }

@media (min-width: 390px) and (max-width: 768px) {
  .header {
    &__top {
      &_links {
        display: none;
        &-active {
          display: flex;
        }
      }
      &_contacts {
        &-deactive {
          display: none;
        }
      }
      &_popup {
        display: flex;
      }
    }
    &__bottom {
      &_brand {
        width: 120.58px;
        background-size: contain;
      }
      &_social {
        column-gap: 20px;
        &-divider {
          margin: auto 0;
        }
        &-phone {
          margin-right: 0px;
        }
      }
    }
  }

}
</style>
