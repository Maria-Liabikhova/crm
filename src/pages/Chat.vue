<template>
  <div class="wrapp">
    <div class="message_area">
      <v-list-item v-for="item in items" :key="item.id"
        ><v-row>
          <v-col cols="1">
            <v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>
            <v-list-item class="user-info">{{ item.nickNname }}</v-list-item>
            <v-list-item class="user-info">{{ item.date }}</v-list-item>
          </v-col>
          <v-col cols="11">
            <v-content class="message-content">
              {{ item.text }}
            </v-content>
            <v-divider></v-divider>
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
      ></v-textarea>
      <div class="button_wrap">
        <v-spacer></v-spacer>
        <v-btn small color="black" dark>
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
      items: [
        {
          avatar: 'https://randomuser.me/api/portraits/men/85.jpg',
          nickNname: 'Oleg88',
          date: '05.03.2021',
          text:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repellendus itaque nobis iste vel esse minima ea adipiscisapiente? Voluptas architecto quidem itaque voluptatum aliquid?Cum, hic repellat! Consequuntur'
        },
        {
          avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
          nickNname: 'LM',
          date: '05.03.2021',
          text:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repellendus itaque nobis iste vel esse minima ea adipiscisapiente? Voluptas architecto quidem itaque voluptatum aliquid?Cum, hic repellat! Consequuntur'
        },
        {
          avatar: 'https://randomuser.me/api/portraits/men/95.jpg',
          nickNname: 'RedDevel',
          date: '05.03.2021',
          text:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repellendus itaque nobis iste vel esse minima ea adipiscisapiente? Voluptas architecto quidem itaque voluptatum aliquid?Cum, hic repellat! Consequuntur'
        },
        {
          avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
          nickNname: 'VictorLutii',
          date: '05.03.2021',
          text:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repellendus itaque nobis iste vel esse minima ea adipiscisapiente? Voluptas architecto quidem itaque voluptatum aliquid?Cum, hic repellat! Consequuntur'
        }
      ]
    }
  }
}
</script>

<style scoped>
.message_area {
  height: 320px;
  width: 100%;
  overflow: hidden;
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
  font-size: 12px;
}
</style>
