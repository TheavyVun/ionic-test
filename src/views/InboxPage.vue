<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Inbox</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-item class="mt" v-for="friend in friends" :key="friend" @click="this.$router.push('/chat/'+friend.id)" lines="none">
        <ion-avatar class="bg" slot="start" >
          <img class="img" :src="friend.profile" />
        </ion-avatar>
        <ion-label>
          <h3 class="bold">{{friend.username}}</h3>
          <p :class="{bold:!friend.chats[friend.chats.length-1].isYou}"> <span v-if="friend.chats[friend.chats.length-1].isYou">You:</span> {{friend.chats[friend.chats.length-1].message}}</p>
        </ion-label>
      </ion-item>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

export default defineComponent({
  name: 'FolderPage',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
  },
  methods: {
    // show() {
    //   this.$router.push('/chat')
    // }
  },
  setup() {
    // const friends = [
    //   {
    //     id: 1,
    //     name: 'Sreymao Vorn',
    //     profile: 'https://i.pinimg.com/564x/7f/fc/a7/7ffca73413991f5d652fa06094e0742a.jpg',
    //     message: "this evening nhame ey",
    //   },
    //   {
    //     id: 2,
    //     name: 'Koev Song',
    //     profile: 'https://lh3.googleusercontent.com/a-/ACNPEu8sTNqRgvtV4OSw3Fvm0Yqe6PV-Ln7wkMhrv9cMIg=s64-p-k-rw-no',
    //     message: "Hello",
    //   },
    //   {
    //     id: 3,
    //     name: 'Chansok Oeurn',
    //     profile: 'https://lh3.googleusercontent.com/a-/ACNPEu9azlnIVpBTUHFwgHlOLKr6PzgyK5hDfWAzoaMG=s64-p-k-rw-no',
    //     message: "I'm fine thank. And you?",
    //   },
    //   {
    //     id: 4,
    //     name: 'Phandy Phorn',
    //     profile: 'https://lh3.googleusercontent.com/a-/ACNPEu9ZEMBDifXJYfPSIRJbe2PLJFIRjtyMDfFBvvF8oA=s32-c',
    //     message: "You: Happy birthday to you...",
    //   },
    //   {
    //     id: 5,
    //     name: 'Sreyleak El',
    //     profile: 'https://lh3.googleusercontent.com/a/ALm5wu1M5R9ls_b5h7Dk3lbx7SF-3oZhsNSJ8GpMQ1_F=s32-c',
    //     message: "hee leak mk pi sala nv ng",
    //   },
    //   {
    //     id: 6,
    //     name: 'Theara Rit',
    //     profile: 'https://lh3.googleusercontent.com/a/ALm5wu3qONhljww450bOq4NU5BZID3nxF8o-g1oTaqf9=s32-c',
    //     message: "ra now nv home men ng",
    //   },
    //   {
    //     id: 7,
    //     name: 'Sotheara Chheam',
    //     profile: 'https://lh3.googleusercontent.com/a-/ACNPEu9ORAGJ6nUoF0ZxPQGzHzIVE6QVjU_QYq5RRcdocg=s64-p-k-rw-no',
    //     message: "tos nham mi hey",
    //   },
    //   {
    //     id: 8,
    //     name: 'Tim Bin',
    //     profile: 'https://lh3.googleusercontent.com/a-/ACNPEu9SjLS5y0Cq8lcOL1wbXHvNWg5gM0ujVfRwm6w96w=s32-c',
    //     message: "You: tos tv home dl mg hx",
    //   },
    //   {
    //     id: 9,
    //     name: 'Phearun Chhun',
    //     profile: 'https://lh3.googleusercontent.com/a-/ACNPEu9NvQ6Tqs9ycU58xhgjhKhCGHsPRCLSr8XH3BG_=s32-c',
    //     message: "You: Doing ng hrr 🥰😍",
    //   },
    // ];
    const friends = [
      {
        id: 1,
        username: "Sreymao Vorn",
        profile: "https://i.pinimg.com/564x/7f/fc/a7/7ffca73413991f5d652fa06094e0742a.jpg",
        chats: [
          {isYou: false, message: "Hi"},
          {isYou: true, message: "Bonjour"},
          {isYou: false, message: "nham bay nv ng"},
          {isYou: true, message: "nham rouch min"},
          {isYou: true, message: "and u"},
          {isYou: false, message: "too"},
          {isYou: true, message: "tver ey jos"},
          {isYou: false, message: "kuy lg"},
          {isYou: true, message: "err jam yub jam yy knea"},
        ]
      },
      {
        id: 2,
        username: "Koev Song",
        profile: "https://lh3.googleusercontent.com/a-/ACNPEu8sTNqRgvtV4OSw3Fvm0Yqe6PV-Ln7wkMhrv9cMIg=s64-p-k-rw-no",
        chats: [
          {isYou: true, message: "Bonjour"},
          {isYou: false, message: "Hi"},
          {isYou: true, message: "Oui"},
          {isYou: false, message: "nham bay nv ng"},
          {isYou: true, message: "nham rouch min"},
          {isYou: true, message: "and u"},
          {isYou: false, message: "too"},
          {isYou: true, message: "tv der lg ot"},
          {isYou: false, message: "ot te"},
          {isYou: true, message: "ke nor"},
        ]
      },
      {
        id: 3,
        username: "Chansok Oeurn",
        profile: "https://lh3.googleusercontent.com/a-/ACNPEu9azlnIVpBTUHFwgHlOLKr6PzgyK5hDfWAzoaMG=s64-p-k-rw-no",
        chats: [
          {isYou: false, message: "Good morning"},
          {isYou: true, message: "Bart"},
          {isYou: false, message: "where are you now"},
          {isYou: true, message: "I am at work"},
          {isYou: true, message: "What going on?"},
          {isYou: false, message: "Never mind I just want you to buy something for me"},
          {isYou: true, message: "what do you want?"},
          {isYou: false, message: "Pizza"},
          {isYou: true, message: "Okay okay"},
          {isYou: true, message: "what type do you want?"},
          {isYou: false, message: "Any type"},
          {isYou: true, message: "okay"},
          {isYou: false, message: "Thanks"},
        ]
      },
      {
        id: 4,
        username: "Phandy Phorn",
        profile: "https://i.pinimg.com/750x/ff/a5/09/ffa509ab62b2e6964364eb0799b1dcd1.jpg",
        chats: [
          {isYou: false, message: "Hi"},
          {isYou: true, message: "Bonjour"},
          {isYou: false, message: "nham bay nv ng"},
          {isYou: true, message: "nham rouch min"},
          {isYou: true, message: "and u"},
          {isYou: false, message: "too"},
          {isYou: true, message: "tver ey jos"},
          {isYou: false, message: "kuy lg"},
        ]
      },
      {
        id: 5,
        username: "Sreyleak El",
        profile: "https://lh3.googleusercontent.com/a/ALm5wu1M5R9ls_b5h7Dk3lbx7SF-3oZhsNSJ8GpMQ1_F=s32-c",
        chats: [
          {isYou: false, message: "Hi"},
          {isYou: true, message: "Bonjour"},
          {isYou: false, message: "nham bay nv ng"},
          {isYou: true, message: "nham rouch min"},
          {isYou: true, message: "and u"},
          {isYou: false, message: "too"},
          {isYou: true, message: "tver ey jos"},
          {isYou: false, message: "kuy lg"},
          {isYou: true, message: "bart"},
          {isYou: false, message: "khg men ter yub minh ng"},
        ]
      },
      {
        id: 6,
        username: "Theara Rit",
        profile: "https://lh3.googleusercontent.com/a/ALm5wu3qONhljww450bOq4NU5BZID3nxF8o-g1oTaqf9=s32-c",
        chats: [
          {isYou: false, message: "Hi"},
          {isYou: true, message: "Bonjour"},
          {isYou: false, message: "nham bay nv ng"},
          {isYou: true, message: "nham rouch min"},
          {isYou: true, message: "and u"},
          {isYou: false, message: "too"},
          {isYou: true, message: "tver ey jos"},
        ]
      },
      {
        id: 7,
        username: "Sotheara Chheam",
        profile: "https://lh3.googleusercontent.com/a-/ACNPEu9ORAGJ6nUoF0ZxPQGzHzIVE6QVjU_QYq5RRcdocg=s64-p-k-rw-no",
        chats: [
          {isYou: false, message: "Hi"},
          {isYou: true, message: "Bonjour"},
          {isYou: false, message: "nham bay nv ng"},
          {isYou: true, message: "nham rouch min"},
          {isYou: true, message: "and u"},
          {isYou: false, message: "too"},
          {isYou: true, message: "tver ey jos"},
          {isYou: false, message: "kuy lg"},
          {isYou: true, message: "err"},
          {isYou: false, message: "Ng eng ng"},
        ]
      },
      {
        id: 8,
        username: "Tim Bin",
        profile: "https://lh3.googleusercontent.com/a-/ACNPEu9SjLS5y0Cq8lcOL1wbXHvNWg5gM0ujVfRwm6w96w=s32-c",
        chats: [
          {isYou: false, message: "Hi"},
          {isYou: true, message: "Bonjour"},
          {isYou: false, message: "nham bay nv ng"},
          {isYou: true, message: "nham rouch min"},
          {isYou: true, message: "and u"},
          {isYou: false, message: "too"},
          {isYou: true, message: "tver ey jos"},
          {isYou: false, message: "kuy lg"},
          {isYou: true, message: "emmm ot chat tv mi o hee"},
        ]
      },
      {
        id: 9,
        username: "Phearun Chhun",
        profile: "https://lh3.googleusercontent.com/a-/ACNPEu9NvQ6Tqs9ycU58xhgjhKhCGHsPRCLSr8XH3BG_=s32-c",
        chats: [
          {isYou: false, message: "Good morning🥰"},
          {isYou: true, message: "Morning😘"},
          {isYou: false, message: "nham ey nv ng"},
          {isYou: true, message: "nham rouch hx"},
          {isYou: true, message: "jos u"},
          {isYou: false, message: "nv tv"},
          {isYou: true, message: "u mes haa"},
          {isYou: false, message: "today busy hrr"},
          {isYou: true, message: "Orr"},
          {isYou: true, message: "free nv ng"},
          {isYou: false, message: "free hx"},
          {isYou: true, message: "tv rk ey nham tv jg hrr"},
          {isYou: false, message: "bart"},
          {isYou: true, message: "jah"},
          {isYou: false, message: "tv rk ey nham sin jg"},
        ]
      },
    ]
    return { 
      friends
    }
  }
});
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
.bold {
  font-weight: bold;
  color: black;
}
.mt {
  margin-top: 10px;
}

.bg {
  width: 50px; 
  height : 50px;
}
.img {
  object-fit: cover;
}
</style>
