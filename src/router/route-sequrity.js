import store from '../store/index'

export default function(to, from, next) {
  console.log('route security')
  if (store.getters.user) {
    next()
  } else {
    const userTryAccessTo = to.path
    next(`/login?RedirectFrom=${userTryAccessTo}`)
  }
}
