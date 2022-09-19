<template>
  <section class="map" id="contacts">
    <!-- <div class="container" :style="{'background': 'transparent'}"> -->
      <div class="map__main">
      <div class="map__main_map" id="map"><ContactForm></ContactForm></div>

      </div>
    <!-- </div> -->
  </section>
</template>

<script>
import ContactForm from './ContactForm.vue';
export default {
  name: 'MapBlock',
  components: { ContactForm },
  data() {
    return {
      placies: [{location: {lng: 39.775883, lat: 47.269713}, description: 'LUKRAS'}]
    }
  },
  mounted() {
    const mapboxgl = require('mapbox-gl')
    const map = new mapboxgl.Map({
      accessToken: 'pk.eyJ1Ijoic2xpbWVzaG90IiwiYSI6ImNrcjI4M2Y1ODI2cDgzMXFodDFuMG9jYW8ifQ.nMAxLQ2UlUxVBCcM-M8vuQ',
      container: 'map', // <div id="map"></div>
          style: 'mapbox://styles/mapbox/streets-v9', // default style
          center: [39.775883, 47.269713],// starting position as [lng, lat]
          zoom: 8
    })
    this.placies.map((marker) => {
      const LngLat = [marker.location.lng, marker.location.lat]
      new mapboxgl.Marker()
          .setLngLat(LngLat)
          .addTo(map) // Initialized above
      })
  }
}
</script>

<style lang="scss">
  .map {
    width: 100%;
    max-width: 1600px;
    display: flex;
    margin: 0 auto;
    &__main {
      width: 100%;
      &_map {
        position: relative;
        padding: 136px 140px;
        top: 0;
        left: 0;
        width: 100%;
        height: 800px;
        .contact-form {
          position: absolute;
          z-index: 2;
        }
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1160px) {
    .map {
    width: 100%;
    margin: 0 auto;
    display: flex;
    &__main {
      width: 100%;
      display: flex;
      justify-content: center;
      &_map {
        padding: 136px 140px;
      }
    }
  }
  }
  @media (min-width: 577px) and (max-width: 768px) {
    .map {
      &__main {
        height: 800px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        &_map {
          width: 100%;
          padding: 0 22px 22px 22px;
          .contact-form {
            bottom: 22px;
            right: 22px;
            left: 22px;
          }
        }
      }
    }
  }
  @media (max-width: 576px) {
    .map {
      &__main {
        width: 100%;
        height: 100%;
        margin-bottom: 64px;
        position: relative;
        &_map {
          width: 100%;
          max-height: 360px;
          padding: 0 22px 22px 22px;
          position: absolute;
          .contact-form {
            top: 200px;
            left: 0;
          }
        }
      }
    }
  }
</style>
