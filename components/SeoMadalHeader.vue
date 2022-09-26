<template>
  <section class="seomodal-header" @click="closeModal">
    <div class="container">
      <div class="seomodal-header__wrapper">
        <div class="seomodal-header__contacts">
          <div class="seomodal-header__contacts_contact">Ул. Механизаторов 10</div>
          <div class="seomodal-header__contacts_contact">info@lukras.ru</div>
          <div class="seomodal-header__contacts_contact">Звоните ПН - ВС: 9:00 - 18:00</div>
        </div>
        <div class="seomodal-header__social">
          <div class="seomodal-header__social_item">Telegram</div>
          <div class="seomodal-header__social_item">WhatsApp</div>
          <div class="seomodal-header__social_item">Viber</div>
          <div class="seomodal-header__social_divider"></div>
          <div class="seomodal-header__social_phone">8 (800) 600-90-91</div>
          <div class="seomodal-header__social_request" @click="showConsult">Оставить заявку</div>
        </div>
      </div>

    </div>


  </section>
</template>

<script>
  export default {
    name: 'SeoMoadlHeader',
    data() {
      return {
      }
    },
    methods: {
      closeModal() {
        this.$emit('closeModal')
      },
      showConsult() {
        this.$emit('showConsult')
      }
    }
  }
</script>

<style lang="scss">
  .seomodal-header {
    position: fixed;
    overflow-y: auto;
    top: 64px;
    left: 0px;
    background: #fff;
    height: calc(100% - 64px);
    padding: 16px 0;
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
