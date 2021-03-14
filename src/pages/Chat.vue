<template>
  <div class="wrap">
    <div class="card-wrapper">
      <v-card class="main">
        <v-container class="correct-fluid" fluid>
          <v-row class="correct-fluid">
            <Navbar />
            <v-col class="no-padding" cols="8" xs="8" sm="8" md="9">
              <v-card class="main_right-part" height="100%">
                <div class="wrapp">
                  <div ref="chatArea" class="chat">
                    <v-list-item v-for="item in items" :key="item.id"
                      ><v-row>
                        <v-col cols="1">
                          <v-list-item-avatar>
                            <v-img :src="item.avatar"></v-img>
                          </v-list-item-avatar>
                          <v-list-item class="user-info">{{
                            item.nickname
                          }}</v-list-item>
                          <v-list-item class="user-info">{{
                            item.date
                          }}</v-list-item>
                          <v-divider></v-divider>
                        </v-col>
                        <v-col cols="11">
                          <v-main class="message-content">
                            {{ item.text }}
                          </v-main>
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
                      <v-btn
                        small
                        color="black"
                        class="front"
                        dark
                        @click="onChat"
                      >
                        Send message
                      </v-btn>
                    </div>
                  </v-container>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: { Navbar },
  data() {
    return {
      enterMessage: '',
      date: '',
      text: ''
    }
  },
  mounted() {
    let element = this.$refs.chatArea
    this.$store
      .dispatch('fetchChatDB')
      .then(() => (element.scrollTop = element.scrollHeight))
  },
  computed: {
    items() {
      return this.$store.getters.chatMessages
    }
  },
  methods: {
    onChat() {
      const itemParam = {
        avatar:
          'https://cloudstatic.eva.ru/eva/720000-730000/722554/wiki/1577182578357_4299168799076267.jpg?H',
        nickname: this.$store.getters.currentUser.nickname,
        date: Date(),
        text: this.enterMessage
      }
      this.enterMessage = ' '
      this.$store.dispatch('setChat', itemParam)
      let element = this.$refs.chatArea
      this.$store
        .dispatch('fetchChatDB')
        .then(() => (element.scrollTop = element.scrollHeight))
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
