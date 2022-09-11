<template>
  <section class="map">
    <ContactForm></ContactForm>
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
    height: 800px;
    background: url('@/assets/images/map.png') 0px 0px/cover no-repeat;
    padding: 136px  0  0 140px;
  }

</style>
