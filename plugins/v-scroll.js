import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';

// You can also pass in the default options
Vue.use(VueScrollTo, {
  container: "body",
  duration: 3000,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});
Vue.directive('scroll', {
  inserted: function (el, binding) {
    console.log(el)
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})
