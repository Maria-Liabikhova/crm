import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase/app'
;('firebase/database')
;('firebase/auth')
;('firebase/storage')
import firebaseConfig from './fbConfig'

Vue.config.productionTip = false
Vue.use(firebase)
Vue.use(firebaseConfig)
export const bus = new Vue()

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    firebase.initializeApp(firebaseConfig)
    firebase.auth().onAuthStateChanged(async user => {
      const userTryAccessTo = this.$route.query.RedirectFrom
      if (user) {
        try {
          await this.$store.dispatch('letStayLoggedIn', user)
          this.$router.push(userTryAccessTo)
        } catch (error) {
          this.$store.dispatch('activeError', error.message)
        }
      } else {
        this.$router.push('/login?loginError=true')
      }
    })
  }
}).$mount('#app')
