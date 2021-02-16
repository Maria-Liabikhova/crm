import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase/app'
import firebaseConfig from './fbConfig'

Vue.config.productionTip = false
Vue.use(firebase)
Vue.use(firebaseConfig)
export const eventEmitter = new Vue()

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    firebase.initializeApp(firebaseConfig)
    firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        try {
          await this.$store.dispatch('letStayLoggedIn', user)
        } catch (error) {
          this.$store.dispatch('activeError', error.mesage)
        }
      } else {
        this.$router.push('/login?loginError=true')
      }
    })
  }
}).$mount('#app')
