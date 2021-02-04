export default {
  state: {
    users: [
      {
        imgSrc:
          'https://www.soyuz.ru/public/uploads/files/3/7114387/20170814104005e8c782fe56.jpg',
        surname: 'DaVinchi',
        name: 'Leonardo',
        id: 1,
        gender: 'Male',
        role: 'admin',
        eMail: 'leonardo@geniy.com',
        nickname: 'Leo',
        age: 565
      },
      {
        imgSrc:
          'https://vaidebolsa.com.br/wp-content/uploads/2019/11/mulheres.jpg',
        surname: 'Curie',
        name: 'Marie',
        id: 2,
        gender: 'Female',
        role: 'editor',
        eMail: 'curie@geniy.com',
        nickname: 'Marry-perfect',
        age: 154
      },
      {
        imgSrc:
          'https://avatars.mds.yandex.net/get-zen_doc/1856956/pub_5de3625d5d636200b075b762_5de363401ee34f00afa7cab6/scale_1200',
        surname: 'Einstein',
        name: 'Albert',
        id: 3,
        gender: 'Male',
        role: 'client',
        eMail: 'einstein@geniy.com',
        nickname: 'Brain',
        age: 232
      },
      {
        imgSrc: 'https://media.studomat.ba/2017/11/jung-tipovi-licnosti.jpg',
        surname: 'Jung',
        name: 'Carl Gustav',
        id: 4,
        gender: 'Male',
        role: 'editor',
        eMail: 'carl@geniy.com',
        nickname: 'Psychiatric',
        age: 146
      },
      {
        imgSrc:
          'https://cdn.ruposters.ru/newsbody/7/7f392408583379a8ecc9aff3ba4d7fd7.jpg',
        surname: 'Pavlov',
        name: 'Ivan',
        id: 5,
        gender: 'Male',
        role: 'admin',
        eMail: 'van@geniy.com',
        nickname: 'Petrovich',
        age: 172
      },
      {
        imgSrc:
          'https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRT4Lyn5E4RlJzI20uRJmtFA',
        surname: 'II',
        name: 'Ekaterina',
        id: 6,
        gender: 'Female',
        role: 'guest',
        eMail: 'kathrin@geniy.com',
        nickname: 'Gorgeous',
        age: 292
      }
    ]
  },
  mutations: {
    addUser(state, payload) {
      state.users.push(payload)
    },
    deleteUser(state, payload) {
      state.users = state.users.filter(user => user.id !== payload)
    },
    sort(state, payload) {
      state.users = state.users.sort((a, b) =>
        a[payload] > b[payload] ? 1 : -1
      )
    }
  },
  actions: {
    createUser({ commit }, payload) {
      commit('addUser', payload)
    },
    userDelete({ commit }, payload) {
      commit('deleteUser', payload)
    },
    selectorBY({ commit }, payload) {
      commit('sort', payload)
    }
  },
  getters: {
    users(state) {
      return state.users
    },
    userById(state) {
      return userId => {
        return state.users.find(user => user.id === userId)
      }
    }
  }
}
