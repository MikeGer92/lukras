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
    padding: 136px  0;
  }

</style>
