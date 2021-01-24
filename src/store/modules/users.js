// import { Number } from 'core-js'

export default {
  state: {
    users: [
      {
        imgSrc:
          'https://putoclub.ru/wp-content/uploads/Genialnost-Leonardo-da-Vinchi..jpg',
        surname: 'DaVinchi',
        name: 'Leonardo',
        id: 1,
        gender: 'Male',
        role: 'admin'
      },
      {
        imgSrc:
          'https://vaidebolsa.com.br/wp-content/uploads/2019/11/mulheres.jpg',
        surname: 'Curie',
        name: 'Marie',
        id: 2,
        gender: 'Female',
        role: 'editor'
      },
      {
        imgSrc:
          'https://avatars.mds.yandex.net/get-zen_doc/1856956/pub_5de3625d5d636200b075b762_5de363401ee34f00afa7cab6/scale_1200',
        surname: 'Einstein',
        name: 'Albert',
        id: 3,
        gender: 'Male',
        role: 'client'
      },
      {
        imgSrc: 'https://media.studomat.ba/2017/11/jung-tipovi-licnosti.jpg',
        surname: 'Jung',
        name: 'Carl Gustav',
        id: 4,
        gender: 'Male',
        role: 'editor'
      },
      {
        imgSrc:
          'https://cdn.ruposters.ru/newsbody/7/7f392408583379a8ecc9aff3ba4d7fd7.jpg',
        surname: 'Pavlov',
        name: 'Ivan Petrovich',
        id: 5,
        gender: 'Male',
        role: 'admin'
      },
      {
        imgSrc:
          'https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRT4Lyn5E4RlJzI20uRJmtFA',
        surname: 'II',
        name: 'Ekaterina',
        id: 6,
        gender: 'Female',
        role: 'guest'
      }
    ]
  },
  mutations: {
    addUser(state, payload) {
      state.users.push(payload)
    }
  },
  actions: {
    createUser({ commit }, payload) {
      commit('addUser', payload)
    }
  },
  getters: {
    users(state) {
      return state.users
    }
  }
}
