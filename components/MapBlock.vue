<template>
  <section class="map" id="contacts">
    <div class="container" :style="{'background': 'transparent'}">
      <ContactForm></ContactForm>
    </div>
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
    height: 800px;
    background: url('@/assets/images/map.png') 0px 0px/cover no-repeat;
    padding: 136px 0;
    display: flex;
    align-items: flex-end;
  }
  @media (min-width: 361px) and (max-width: 768px) {
    .map {
      background: url('@/assets/images/map-small.png') 0px 0px/cover no-repeat;
      padding: 0 22px 22px 22px;
    }
  }
  @media (max-width: 360px) {
    .map {
    }
  }
</style>
