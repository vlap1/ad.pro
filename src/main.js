import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'

Vue.use(Router)
Vue.config.productionTip = false

new Vue({
 vuetify,
  render: h => h(App),
  router:router
}).$mount('#app')

Добавление ссылок в меню (в v-app-bar и v-navigation-drawer)
В v-app-bar
<v-btn 
 v-for="link in links"
 :key="link.title"
:to="link.url"
 text><v-icon left>{{ link.icon }}</v-icon>{{ link.title }}</v-btn>

В v-navigation-drawer
<v-list-item
 v-for="link in links"
 :key="link.title"
:to="link.url"
>

