<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/folder/Inbox"></ion-back-button>
        </ion-buttons>
        <ion-title> {{ user[0].username }}
          <!-- <ion-item>
          <ion-avatar>
            <img src="https://i.pinimg.com/236x/26/15/b4/2615b458197724bca2a955b6f35eccbd.jpg" />
          </ion-avatar>
          <ion-label>
            <h3>Sreymoa</h3>
            <p>{{friend.message}}</p>
          </ion-label>
          </ion-item> -->
        </ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-avatar class="bg">
        <img :src="user[0].profile" />
      </ion-avatar>
      <ion-list-header class="p0">
        <ion-label class="text-center m0">
          {{ user[0].username }}
        </ion-label>
      </ion-list-header>
      <br><br>

      <!-- <div class="d-flex">
        <div class="ava">
          <ion-avatar class="small ion-margin-start">
            <img src="https://i.pinimg.com/564x/7f/fc/a7/7ffca73413991f5d652fa06094e0742a.jpg" />
          </ion-avatar>
        </div>
        <ion-card>
          <ion-card-content class="card">
            hee hee
          </ion-card-content>
        </ion-card>
      </div> -->
      <!-- <div class="d-flex-end mt-24">
        <div class="ava">
        </div>
        <ion-card class="w80">
          <ion-card-content class="card">
            Lorem ipsum dolor sit amet consectetur adipisicing
          </ion-card-content>
        </ion-card>
      </div> -->

      <div v-for="chat in user[0].chats" :key="chat" class="mt-24">
      <div class="mt-24" :class="[chat.isYou?'d-flex-end':'d-flex']" >
        <div class="ava mt-24">
        <ion-avatar v-if="!chat.isYou" class="small ion-margin-start">
          <img class="img" :src="user[0].profile" />
        </ion-avatar>
        </div>
        <ion-card :class="{w80:chat.isYou}" class="mt-24">
          <ion-card-content class="card">
            {{chat.message}}
          </ion-card-content>
        </ion-card>
      </div>
      </div>

      <!-- <div class="d-flex-end mt-24">
        <div class="ava">
        </div>
        <ion-card class="w80">
          <ion-card-content class="card">
            Oui
          </ion-card-content>
        </ion-card>
      </div> -->

      <!-- <div class="d-flex mt-24">
        <div class="ava">
        <ion-avatar class="small ion-margin-start">
          <img src="https://i.pinimg.com/564x/7f/fc/a7/7ffca73413991f5d652fa06094e0742a.jpg" />
        </ion-avatar>
        </div>
        <ion-card>
          <ion-card-content class="card">
            yep
          </ion-card-content>
        </ion-card>
      </div>
      <div class="d-flex-end mt-24">
        <div class="ava">
        </div>
        <ion-card class="w80">
          <ion-card-content class="card">
            How are you
          </ion-card-content>
        </ion-card>
      </div> -->

      <!-- <div class="d-flex mt-24">
        <div class="ava">
        <ion-avatar class="small ion-margin-start">
          <img src="https://i.pinimg.com/564x/7f/fc/a7/7ffca73413991f5d652fa06094e0742a.jpg" />
        </ion-avatar>
        </div>
        <ion-card>
          <ion-card-content class="card">
            not bad
          </ion-card-content>
        </ion-card>
      </div>
      <div class="d-flex-end mt-24">
        <div class="ava">
        </div>
        <ion-card class="w80">
          <ion-card-content class="card">
            Oui
          </ion-card-content>
        </ion-card>
      </div>

      <div class="d-flex mt-24">
        <div class="ava">
        <ion-avatar class="small ion-margin-start">
          <img src="https://i.pinimg.com/564x/7f/fc/a7/7ffca73413991f5d652fa06094e0742a.jpg" />
        </ion-avatar>
        </div>
        <ion-card>
          <ion-card-content class="card">
            How about you
          </ion-card-content>
        </ion-card>
      </div>
      <div class="d-flex-end mt-24">
        <div class="ava">
        </div>
        <ion-card class="w80">
          <ion-card-content class="card">
            Very well
          </ion-card-content>
        </ion-card>
      </div> -->

      <!-- <div class="d-flex mt-24">
        <div class="ava">
        <ion-avatar class="small ion-margin-start">
          <img src="https://i.pinimg.com/564x/7f/fc/a7/7ffca73413991f5d652fa06094e0742a.jpg" />
        </ion-avatar>
        </div>
        <ion-card>
          <ion-card-content class="card">
            pel na tv home ng
          </ion-card-content>
        </ion-card>
      </div>
      <div class="d-flex-end mt-24">
        <div class="ava">
        </div>
        <ion-card class="w80">
          <ion-card-content class="card">
            tik tt
          </ion-card-content>
        </ion-card>
      </div>

      <div class="d-flex mt-24">
        <div class="ava">
        <ion-avatar class="small ion-margin-start">
          <img src="https://i.pinimg.com/564x/7f/fc/a7/7ffca73413991f5d652fa06094e0742a.jpg" />
        </ion-avatar>
        </div>
        <ion-card>
          <ion-card-content class="card">
            this evening nham ey
          </ion-card-content>
        </ion-card>
      </div> -->

        <!-- <ion-fab horizontal="end" vertical="bottom" slot="fixed">
          <ion-fab-button color="light" @click="scrollToTop">
            <ion-icon :icon="arrowUpCircleOutline" color="dark"></ion-icon>
          </ion-fab-button>
        </ion-fab> -->
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton, IonAvatar, } from '@ionic/vue';
import { arrowUpCircleOutline } from 'ionicons/icons';

export default defineComponent({
  name: 'FolderPage',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonBackButton,
    IonAvatar,
    
  },
  setup() {
    // const chatDatas = [
    //   {user: "Sreymao Vorn", profile: "https://i.pinimg.com/564x/7f/fc/a7/7ffca73413991f5d652fa06094e0742a.jpg", message: "Hello"},
    //   {user: "you", profile: "https://i.pinimg.com/564x/7f/fc/a7/7ffca73413991f5d652fa06094e0742a.jpg", message: "Hi"},
    //   {user: "Sreymao Vorn", profile: "https://i.pinimg.com/564x/7f/fc/a7/7ffca73413991f5d652fa06094e0742a.jpg", message: "tver ey ng haa"},
    //   {user: "you", profile: "https://i.pinimg.com/564x/7f/fc/a7/7ffca73413991f5d652fa06094e0742a.jpg", message: "pung tver ka"},
    //   {user: "Sreymao Vorn", profile: "https://i.pinimg.com/564x/7f/fc/a7/7ffca73413991f5d652fa06094e0742a.jpg", message: "Orr"},
    //   {user: "you", profile: "https://i.pinimg.com/564x/7f/fc/a7/7ffca73413991f5d652fa06094e0742a.jpg", message: "Emmm"},
    //   {user: "Sreymao Vorn", profile: "https://i.pinimg.com/564x/7f/fc/a7/7ffca73413991f5d652fa06094e0742a.jpg", message: "tos yy dom ke hey"},
    //   {user: "you", profile: "https://i.pinimg.com/564x/7f/fc/a7/7ffca73413991f5d652fa06094e0742a.jpg", message: "Jam yub"},
    //   {user: "Sreymao Vorn", profile: "https://i.pinimg.com/564x/7f/fc/a7/7ffca73413991f5d652fa06094e0742a.jpg", message: "yep yep"},
    // ]
    const allChatDatas = [
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

    const path = window.location.pathname.split('chat/')[1];
    let userPath = parseInt(path)

    const user = allChatDatas.filter(chatData => chatData.id == userPath)
    return { 
      arrowUpCircleOutline,
      // chatDatas,
      allChatDatas,
      path, 
      user,
    };

  },
  
});
</script>

<style scoped>
.m0 {
  margin: 0;
}
.p0 {
   padding: 0;
}
.text-center {
  text-align: center;
}
.bg {
  width: 90px; 
  height : 90px;
  margin: auto;
  margin-top: 16px;
}
.small {
  margin-top: 16px;
  width: 50px;
  height: 50px;
}
.d-flex {
  display: flex;
}
.d-flex-end {
  display: flex;
  justify-content: end;
}
.ava {
  width: 20%;
}

.w80 {
  max-width: 74%;
  /* width: 80%; */
  background: silver;
}

.mt-24 {
  /* margin-top: -36px; */
  margin: 0;
  /* padding: 0; */
}

.card {
  padding: 10px 16px;
}
.img {
  object-fit: cover;
}
</style>
