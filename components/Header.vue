<template>
  <div class="container">
    <header class="header">
      <div class="header__top"  data-aos="new-animation" data-aos-duration="800">
        <div class="header__top_brand"></div>
        <div
          :class="{'header__top_links': true, 'header__top_links-active': showLinks}"
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
          :class="{'header__top_contacts': true, 'header__top_contacts-deactive': showLinks}"
        >
          <div class="header__top_contacts-contact">Ул. Механизаторов 10</div>
          <div class="header__top_contacts-contact">info@lukras.ru</div>
          <div class="header__top_contacts-contact">Звоните ПН - ВС: 9:00 - 18:00</div>
        </div>
        <div
          :class="{'header__top_popup': true, 'header__top_popup-deactive': showLinks}"
          @click="isShowLinks"
        >
        </div>
        <div
          :class="{'header__top_popupxs': true, 'header__top_popupxs-deactive': showModal}"
          @click="isShowModal"
        >
        </div>
      </div>
      <div class="header__divider"></div>
      <div class="header__bottom"  data-aos="new-animation" data-aos-duration="1200">
        <div class="header__bottom_brand"></div>
        <div class="header__bottom_social">
          <a><div class="header__bottom_social-item">Telegram</div></a>
          <a><div class="header__bottom_social-item">WhatsApp</div></a>
          <a><div class="header__bottom_social-item">Viber</div></a>
          <a><div class="header__bottom_social-divider"></div></a>
          <a><div class="header__bottom_social-phone">8 (800) 600-90-91</div></a>
          <a><div class="header__bottom_social-request">Оставить заявку</div></a>
        </div>
      </div>
      <ModalHeader v-if="showModal" @closeModal="isShowModal"></ModalHeader>
    </header>
  </div>
</template>

<script>
import ModalHeader from './ModalHeader.vue';
  export default {
    name: "Header",
    data() {
      return {
        showModal: false,
        showLinks: false,
        links: [
          { title: "Рассчет стоимости", url: "main", exact: true },
          { title: "Каталог", url: "catalog" },
          { title: "Преимущества", url: "advant" },
          { title: "Осторожно", url: "warning" },
          { title: "Этапы работы", url: "steps" },
          { title: "Контакты", url: "contacts" },
        ],
      };
    },
    methods: {
      toggleBodyClass(className) {
        const el = document.body;
        if (this.showModal) {
          el.classList.add(className);
        } else {
          el.classList.remove(className);
        }
      },
      isShowLinks() {
        this.showLinks = !this.showLinks;
      },
      isShowModal() {
        this.showModal = !this.showModal
        this.toggleBodyClass('deactOver')
      }
    },
    components: { ModalHeader }
}
</script>

<style lang="scss">
.deactOver {
  overflow: hidden;
}
[data-aos="new-animation"] {
  opacity: 0;
  transition-property: transform, opacity;

  &.aos-animate {
    opacity: 1;

  }
}
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
      align-items: center;
      &_brand {
        display: none;
        width: 144.7px;
        height: 24px;
        background: url('../assets/images/logo.svg') 0px 0px/cover no-repeat;
      }
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
          &:hover {
            color: #000000;
          }
        }
      }
      &_popup, &_popupxs {
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
          cursor: pointer;
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
          cursor: pointer;
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
  @media (min-width: 769px) and (max-width: 1160px) {
  .header {
    &__top {
      &_links {
        gap: 16px;
        display: none;
        &-active {
          display: flex;
        }
        &-link {
          font-size: 14px;
        }
      }
      &_contacts {
        gap: 16px;
        &-deactive {
          display: none;
        }
        &-contact {
          font-size: 14px;
        }
      }
      &_popup {
        display: flex;
      }
    }
    &__bottom {
      &_brand {
        width: 110px;
        background-size: contain;
      }
      &_social {
        column-gap: 16px;
        &-divider {
          margin: auto 0;
        }
        &-item {
          font-size: 14px;
        }
        &-phone {
          margin-right: 0px;
          font-size: 14px;
          margin-right: 0px;
        }
        &-request {
          width: 130px;
          padding: 12px 6px;
          font-size: 14px;
        }
      }
    }
  }
}
  @media (min-width: 661px) and (max-width: 768px) {
  .header {
    &__top {
      &_links {
        gap: 16px;
        display: none;
        &-active {
          display: flex;
        }
        &-link {
          font-size: 14px;
        }
      }
      &_contacts {
        gap: 16px;
        &-deactive {
          display: none;
        }
        &-contact {
          font-size: 14px;
        }
      }
      &_popup {
        display: flex;
      }
    }
    &__bottom {
      &_brand {
        width: 110px;
        background-size: contain;
      }
      &_social {
        column-gap: 16px;
        &-divider {
          margin: auto 0;
        }
        &-item {
          font-size: 14px;
        }
        &-phone {
          margin-right: 0px;
          font-size: 14px;
          margin-right: 0px;
        }
        &-request {
          width: 130px;
          padding: 12px 6px;
          font-size: 14px;
        }
      }
    }
  }
}
@media (min-width: 577px) and (max-width: 660px) {
  .header {
    &__top {
      &_links {
        gap: 12px;
        display: none;
        &-active {
          display: flex;
        }
        &-link {
          font-size: 12px;
        }
      }
      &_contacts {
        gap: 12px;
        &-deactive {
          display: none;
        }
        &-contact {
          font-size: 12px;
        }
      }
      &_popup {
        display: flex;
      }
    }
    &__bottom {
      &_brand {
        width: 100px;
        background-size: contain;
      }
      &_social {
        column-gap: 12px;
        &-divider {
          margin: auto 0;
        }
        &-item {
          font-size: 12px;
        }
        &-phone {
          margin-right: 0px;
          font-size: 12px;
          margin-right: 0px;
        }
        &-request {
          width: 120px;
          padding: 12px 6px;
          font-size: 12px;
        }
      }
    }
  }
}
@media (max-width: 576px) {
  .header {
    &__top {
      position: relative;
      margin-bottom: 16px;
      &_brand {
        display: flex;
      }
      &_popupxs {
        display: flex;
      }
      &_popup {
        display: none;
      }
      &_links {
        display: none;

        &-active {
          display: flex;
        }
      }
      &_contacts {
        display: none;
      }
    }
    &__divider {
      display: none;
    }
    &__bottom {
      display: none;
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
