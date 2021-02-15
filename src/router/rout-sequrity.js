import store from '../store/index'

export default function(to, fron, next) {
  if (store.getters.user) {
    next()
  } else {
    next('/login?loginError=true')
  }
}
