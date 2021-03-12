import store from '../store/index'

export default function(to, from, next) {
  if (store.getters.userAuth) {
    next()
  } else {
    const userTryAccessTo = to.path
    next(`/login?RedirectFrom=${userTryAccessTo}`)
  }
}
