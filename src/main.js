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

// new Vue({
//   router,
//   store,
//   vuetify,
//   render: h => h(App),
//   created() {
//     firebase.initializeApp(firebaseConfig)
//     firebase.auth().onAuthStateChanged(async user => {
//       const userTryAccessTo = this.$route.query.RedirectFrom
//       if (user) {
//         try {
//           await this.$store.dispatch('letStayLoggedIn', user)
//           if (userTryAccessTo) {
//             this.$router.push(userTryAccessTo)
//           } else return
//         } catch (error) {
//           this.$store.dispatch('activeError', error.message)
//           $mount('#app')

//           throw error
//         }
//       }
//     }),
//       this.$store.dispatch('fetchUsersDB')
//   }
// }).$mount('#app')

Vue.config.productionTip = false
Vue.use(firebase)
Vue.use(firebaseConfig)
Vue.prototype.$bus = new Vue()

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
          // console.log(user.email)
        } catch (error) {
          this.$store.dispatch('activeError', error.message)
          $mount('#app')

          throw error
        }
      }
    })
  }
}).$mount('#app')
