<template>
  <section class="modal-header" @click="closeModal">
    <div class="container">
      <div class="modal-header__wrapper">
        <div
          :class="{'modal-header__links': true, 'modal-header__links-active': isShowLinks}"
        >
          <li
            v-for="link in links"
            :key="link.url"
            v-scroll-to="`#${link.url}`"
            active-class="active"
            class='modal-header__links_link'
            :class="{ 'modal-header__links_link--active': $route.path === `${link.url}`}"
            >
            {{ link.title }}
          </li>
        </div>
        <div class="modal-header__contacts">
          <div class="modal-header__contacts_contact">Ул. Механизаторов 10</div>
          <div class="modal-header__contacts_contact">info@lukras.ru</div>
          <div class="modal-header__contacts_contact">Звоните ПН - ВС: 9:00 - 18:00</div>
        </div>
        <div class="modal-header__social">
          <div class="modal-header__social_item">Telegram</div>
          <div class="modal-header__social_item">WhatsApp</div>
          <div class="modal-header__social_item">Viber</div>
          <div class="modal-header__social_divider"></div>
          <div class="modal-header__social_phone">8 (800) 600-90-91</div>
          <div class="modal-header__social_request">Оставить заявку</div>
        </div>
      </div>

    </div>


  </section>
</template>

<script>
  export default {
    name: 'MoadlHeader',
    data() {
      return {
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
      closeModal() {
        this.$emit('closeModal')
      }
    }
  }
</script>

<style lang="scss">
  .modal-header {
    position: absolute;
    overflow-y: auto;
    top: 64px;
    left: 0px;
    background: #fff;
    height: 100%;
    width: 100%;
    z-index: 3;
    text-align: center;
    &__wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    &__links, &__contacts {
      padding-top: 24px;
        display: flex;
        flex-direction: column;
        list-style: none;
        border-bottom: 1px solid #E3E3E3;
        &_link, &_contact {
          text-decoration: none;
          margin-bottom: 24px;
          font-weight: 500;
          font-size: 14px;
          line-height: 16px;
          color: #000000;
          cursor: pointer;
        }
      }
      &__social {
        padding-top: 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
        &_item {
          margin-bottom: 24px;
          font-weight: 500;
          font-size: 14px;
          line-height: 16px;
          color: #000000;
        }
        &_phone {
          font-weight: 500;
          font-size: 14px;
          line-height: 16px;
          color: #000000;
          margin-bottom: 24px;
        }
        &_request {
          box-sizing: border-box;
          padding: 12px 107px;
          border: 1px solid #EAEAEA;
          border-radius: 4px;
          font-weight: 500;
          font-size: 14px;
          line-height: 18px;
          color: #000000;
          cursor: pointer;
        }
      }
  }


</style>
