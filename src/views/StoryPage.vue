<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Story</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true" :scroll-y="true">
      <ion-card v-for="image in images" :key="image">
        <img :src="image.img" />
        <ion-card-header>
          <ion-card-subtitle>Destination</ion-card-subtitle>
          <ion-card-title>{{image.title}}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          {{image.desc}}
        </ion-card-content>
      </ion-card>
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
  setup() {
    const images = [
      {
        title: "Madison, WI",
        desc: "Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.",
        img: 'https://i.pinimg.com/564x/8d/2e/ba/8d2ebabb676815c6b769246d1a3caa68.jpg'
      },
      {
        title: "Title",
        desc: "Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.",
        img: 'https://i.pinimg.com/564x/4b/59/e8/4b59e8904a4a75a215a9a3399c6fd826.jpg'
      },
      {
        title: "Title",
        desc: "Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.",
        img: 'https://i.pinimg.com/564x/8f/5b/ff/8f5bff4a7b538539c08b5de3a2160a4c.jpg'
      },
      {
        title: "Title",
        desc: "Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.",
        img: 'https://i.pinimg.com/564x/a1/d7/b5/a1d7b56691a1dee37c70b2737fdc446d.jpg'
      },
      {
        title: "Title",
        desc: "Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.",
        img: 'https://i.pinimg.com/564x/70/b4/f4/70b4f4706c34162d3eaa942b62af735b.jpg'
      },
      {
        title: "How to train the dragon",
        desc: "Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.",
        img: 'https://i.pinimg.com/564x/c8/6f/4e/c86f4e0e04bdba372975299e88082b7c.jpg'
      },
    ]

    return { 
      images
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
</style>
