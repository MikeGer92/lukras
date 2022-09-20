<template>
  <section class="map" id="contacts">
    <!-- <div class="container" :style="{'background': 'transparent'}"> -->
      <div class="map__main">
      <div class="map__main_map" id="map" data-aos="new-animation" data-aos-duration="1000"><ContactForm></ContactForm></div>
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
      placies: [{location: {lng: 39.775883, lat: 47.269713}, description: 'LUKRAS'}],
      center: [39.775883, 47.269713],
      maxWidth: '',
      zoom: 10
    }
  },
  computed: {
    getCenter() {
      this.maxWidth = window.innerWidth
      if (this.maxWidth > 1600) {
        this.center = [39.775883, 47.269713]
      } else if (this.maxWidth > 1200) {
        this.center = [39.475883, 47.269713]
      } else if (this.maxWidth > 992) {
        this.center = [39.575883, 47.269713]
      } else if (this.maxWidth > 768) {
        this.center = [39.605883, 47.169713]
      } else if (this.maxWidth < 577) {
        this.center = [39.775883, 47.139713]

      }
      return this.center
    }
  },
  beforeMount() {
    this.maxWidth = window.innerWidth
    this.getCenter
  },
  mounted() {
    console.log(window.innerWidth, this.center)
    const mapboxgl = require('mapbox-gl')
    const map = new mapboxgl.Map({
      accessToken: 'pk.eyJ1Ijoic2xpbWVzaG90IiwiYSI6ImNrcjI4M2Y1ODI2cDgzMXFodDFuMG9jYW8ifQ.nMAxLQ2UlUxVBCcM-M8vuQ',
      container: 'map', // <div id="map"></div>
      style: 'mapbox://styles/mapbox/streets-v9', // default style
      center: this.getCenter,//[39.575883, 47.169713],// starting position as [lng, lat]
      zoom: 10
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
[data-aos="new-animation"] {
  opacity: 0;
  transition-property: transform, opacity;

  &.aos-animate {
    opacity: 1;

  }
}
.map {
  width: 100%;
  max-width: 1600px;
  display: flex;
  margin: 0 auto;
  &__main {
    width: 100%;
    &_map {
      padding: 136px 140px;
      position: relative;
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
      padding:150px 30px;
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
        height: 100%;
        padding: 0 20px 20px 20px;
        .contact-form {
          bottom: 20px;
          right: 20px;
          left: 20px;
        }
      }
    }
  }
}
@media (max-width: 576px) {
  .map {
    &__main {
      width: unset;
      height: unset;
      margin-bottom: unset;
      position: unset;
      &_map {
        width: 100%;
        height: 100%;
        padding: 0;
        position: relative;
        .contact-form {
          position: relative;
          margin-top: 360px;
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
