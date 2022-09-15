<template>
  <section class="map" id="contacts">
    <!-- <div class="container" :style="{'background': 'transparent'}"> -->
      <div class="map__main">
      <ContactForm></ContactForm>
      </div>
    <!-- </div> -->
  </section>
</template>

<script>
import ContactForm from './ContactForm.vue';
  export default {
    components: { ContactForm }
}
</script>

<style lang="scss">
  .map {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    display: flex;
    // flex-direction: column;
    &__main {
      width: 100%;
      background: url('@/assets/images/map.png') 0px 0px/cover no-repeat;
      padding: 136px 140px;
    }
  }
  @media (min-width: 577px) and (max-width: 768px) {
    .map {
      &__main {
        background: url('@/assets/images/map-small.png') 0px 0px/cover no-repeat;
        padding: 0 22px 22px 22px;
        height: 800px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      }
    }
  }
  @media (max-width: 576px) {
    .map {
      &__main {
        width: 100%;
        height: 360px;
        background: url('@/assets/images/map-xs.png') 0px 0px/cover no-repeat;
        padding: 360px 0 0 0;
        margin-bottom: 64px;
      }
    }
  }
</style>
