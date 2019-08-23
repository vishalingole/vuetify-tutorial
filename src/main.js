import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import router from './router'
import {setupComponents} from './config/setup-components'
import Vuex from 'vuex'
import 'es6-promise/auto'
import store from './store/store'
import Axios from 'axios';
// import Vuetify from 'vuetify/lib';


// Vue.use(Vuetify)
setupComponents(Vue)
Vue.use(VueRouter)
Vue.use(Vuex)
// Vue.use(Axios)

Vue.prototype.$http = Axios

const token = localStorage.getItem('token')
if(token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  data: {
    themeColor: 'green darken-4',
    userEmail: 'ashish1.sarode12@infobeans.com',
    userPassword: 'ashish123'
  },
  render: h => h(App)
}).$mount('#app')
