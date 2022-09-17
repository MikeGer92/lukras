import Vue from 'vue'
import { VIntersectComp, VIntersectDir } from 'v-intersect'

Vue.directive('intersect', VIntersectDir)
Vue.component('v-intersect', VIntersectComp)
// export default {
//   mounted(el) {
//     console.log('ok')
//     // const options = {
// 		// 	rootMargin: '0px',
// 		// 	threshold: 1.0
// 		// }
// 		// const callback = (entries, observer) => {
// 		// 	if (entries[0].isIntersecting) {
// 		// 		// this.getMorePosts() // вызывается конкретная функция в компоненте
//     //     binding.value()
// 		// 	}
//     //   // console.log(el)
//     // /* Content excerpted, show below */
// 		// };
// 		// const observer = new IntersectionObserver(callback, options);
// 		// // observer.observe(this.$refs.observer) // если использовать данный код непосредственно в компоненте без директивы
// 		// observer.observe(el) // для использования в директиве
//   },
// 	// name: 'intersect'
// };
