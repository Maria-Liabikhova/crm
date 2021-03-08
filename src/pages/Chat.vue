<template>
  <div class="wrapp">
    <div ref="chatArea" class="chat">
      <v-list-item v-for="item in items" :key="item.id"
        ><v-row>
          <v-col cols="1">
            <v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>
            <v-list-item class="user-info">{{ item.nickname }}</v-list-item>
            <v-list-item class="user-info">{{ item.date }}</v-list-item>
            <v-divider></v-divider>
          </v-col>
          <v-col cols="11">
            <v-content class="message-content">
              {{ item.text }}
            </v-content>
          </v-col>
        </v-row>
      </v-list-item>
    </div>
    <v-container>
      <v-textarea
        rows="4"
        dark
        class="input"
        background-color="black"
        v-model="enterMessage"
      ></v-textarea>
      <div class="button_wrap">
        <v-spacer></v-spacer>
        <v-btn small color="black" class="front" dark @click="onChat">
          Send message
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      enterMessage: '',
      date: '',
      text: ''
    }
  },
  mounted() {
    let element = this.$refs.chatArea
    element.scrollTop = element.scrollHeight
  },
  computed: {
    items() {
      return this.$store.getters.items
    },
    user() {
      return this.$store.getters.userAuth
    },
    users() {
      return this.$store.getters.users
    },
    currentDate() {
      var today = new Date()
      var dd = today.getDate()

      var mm = today.getMonth()
      var yyyy = today.getFullYear()
      let nowDate = { dd, mm, yyyy }
      let dataVal = Object.values(nowDate)
      return dataVal
    }
  },
  methods: {
    onChat() {
      const findId = this.user.id
      const thisNickname = this.users.find(el => {
        return el.aid == findId
      })

      const itemParam = {
        avatar: 'https://randomuser.me/api/portraits/men/85.jpg',
        nickname: thisNickname.nickname,
        date: this.currentDate,
        text: this.enterMessage
      }
      this.$store.dispatch('setChatItem', itemParam)
    }
  }
}
</script>

<style scoped>
.chat {
  height: 420px;
  width: 100%;
  overflow-y: scroll;
}
.message-content {
  margin-top: 10px;
  font-size: 12px;
}
.user-info {
  font-size: 10px;
  color: grey;
  min-height: 20px;
  padding: 0;
}
.first_line {
  padding-top: 7px;
  line-height: 10px;
  height: 15px;
}
.button_wrap {
  width: 100%;
  display: flex;
  margin-top: -10px;
}
.input {
  font-size: 16px;
}
.front {
  z-index: 2000;
}
</style>
