import Vue from 'vue'
import App from './App.vue'
import router from './router'
<<<<<<< Updated upstream
import Croppa from 'vue-croppa'
import 'vue-croppa/dist/vue-croppa.css';

Vue.use(Croppa)
=======

>>>>>>> Stashed changes
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
