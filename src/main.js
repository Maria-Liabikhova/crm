import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase/app'

Vue.config.productionTip = false
Vue.use(firebase)
export const eventEmitter = new Vue()

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    var firebaseConfig = {
      apiKey: 'AIzaSyDTprByNbpG-rGfFotyNTjTu-fJ3gonb1U',
      authDomain: 'crm-da-vinchi.firebaseapp.com',
      projectId: 'crm-da-vinchi',
      storageBucket: 'crm-da-vinchi.appspot.com',
      messagingSenderId: '122151798491',
      appId: '1:122151798491:web:1995ef4677ddfff3ce6efe',
      measurementId: 'G-GTK3X7Q89Q'
    }
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)
    firebase.analytics()
  }
}).$mount('#app')
