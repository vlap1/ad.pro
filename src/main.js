import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'
import store from './store'
import fb from 'firebase'
import BuyModalComponent from '@/components/Shared/BuyModal'

Vue.use(Router)
Vue.component('app-vue-modal',BuyModalComponent)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router:router,
  store,
  created(){
    const firebaseConfig = {
      apiKey: "AIzaSyAKKN9Zkw9aL_1I1pXNj476cQBkdZ2bpmk",
      authDomain: "ad-project-d4221.firebaseapp.com",
      databaseURL: "https://ad-project-d4221-default-rtdb.firebaseio.com",
      projectId: "ad-project-d4221",
      storageBucket: "ad-project-d4221.appspot.com",
      messagingSenderId: "571208638014",
      appId: "1:571208638014:web:2938a9f69c4c6e05b8fb6f",
      measurementId: "G-NETTN1H875"
  
    };
    
  // Initialize Firebase
  fb.initializeApp(firebaseConfig);
  fb.analytics();
  //fb.auth().onAuthStateChanged(user => {
    //здесь можно обновить пользователя в store
    //console.log(user)
  //});
  fb.auth().onAuthStateChanged(user => {
    if (user) {
      console.log(`Смотрим что мы получили: ${user.uid}`)
      this.$store.dispatch('autoLoginUser', user.uid)
    }
 })

  //const app = initializeApp(firebaseConfig);
  //getAnalytics(app);

  this.$store.dispatch('fetchAds')
}
}).$mount('#app')