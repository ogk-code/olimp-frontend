import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from "@/router";

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios)
// Vue.use(VueRouter)

function isAuthenticated() {
  // return sessionStorage.getItem("access_token") !== null;
  return true;
}

Vue.config.productionTip = false
// Vue.prototype.$http = Axios;
// const token = localStorage.getItem('token')
// if (token) {
//   Vue.prototype.$http.defaults.headers.common['Authorization'] = token
// }
router.beforeEach((to, from, next) => {
  if (!isAuthenticated() && to.name !== 'Auth') {
    next('/');
  } else {
    next();
  }
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
