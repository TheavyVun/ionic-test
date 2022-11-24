<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Galary</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true" :scroll-y="true">
      <!-- col 2 -->
      <ion-grid>
        <ion-row>
          <ion-col>
            <img v-for="image in col1" :key="image" :src="image.img" />
          </ion-col>
          <ion-col>
            <img v-for="image in col2" :key="image" :src="image.img" />
          </ion-col>
        </ion-row>
      </ion-grid>

      <!-- col 3 -->
      <ion-grid>
        <ion-row v-for="(n,i) in numLoop" :key="i">
          <ion-col v-for="(k,j) in 3" :key="j">
            <!-- <img :src="images[i+(i*3)+j].img" /> -->
            <img class="col3" v-if="images[i+(i*3)+j]" :src="images[i+(i*3)+j].img" />
          </ion-col>
        </ion-row>
      </ion-grid>


      <!-- col 4 -->
      <ion-grid>
        <ion-row v-for="(n,i) in numLoop" :key="i">
          <ion-col v-for="(k,j) in 4" :key="j">
            <img class="col4" v-if="images[i+(i*3)+j]" :src="images[i+(i*3)+j].img" />
          </ion-col>
        </ion-row>
      </ion-grid>
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
        img: 'https://i.pinimg.com/236x/a0/96/7a/a0967a9dcf8d7a39cc6eff9891dc2e05.jpg'
      },
      {
        img: 'https://i.pinimg.com/236x/80/e6/4f/80e64f75830af900181d8b80c5b4a1a2.jpg'
      },
      {
        img: 'https://i.pinimg.com/236x/bc/54/db/bc54db2ddf6c4ffe4801fc41bbeaa78a.jpg'
      },
      {
        img: 'https://i.pinimg.com/236x/5e/eb/a8/5eeba8c4ac8eddd4ebdc66534dda805c.jpg'
      },
      {
        img: 'https://i.pinimg.com/236x/cd/db/ef/cddbef367dba7c3a5445bd46c4b2af48.jpg'
      },
      {
        img: 'https://i.pinimg.com/236x/c8/ba/4d/c8ba4d698ad496c3e96af4b1ec0ed66a.jpg'
      },
      {
        img: 'https://i.pinimg.com/236x/57/fa/bb/57fabb54cb90b1126d59ee5229a58c19.jpg'
      },
      {
        img: 'https://i.pinimg.com/236x/a0/f6/a0/a0f6a04ca253e11d968b31cd8775b2c0.jpg'
      },
      {
        img: 'https://i.pinimg.com/236x/54/b7/92/54b792fe598d2f834096188b8a2caac2.jpg'
      },
      {
        img: 'https://i.pinimg.com/236x/e7/e6/f6/e7e6f647fdc6ef21b8c0f3f2bd3739af.jpg'
      },
      {
        img: 'https://i.pinimg.com/236x/cf/54/8e/cf548e4d0970cbf66d3d5f7ffce43f5b.jpg'
      },
      {
        img: 'https://i.pinimg.com/236x/d9/a5/1b/d9a51b980c12036ca7b15a80eb0aa4ea.jpg'
      },
      {
        img: 'https://i.pinimg.com/236x/dc/8e/b1/dc8eb1e779d77159a978f58f59c7ba40.jpg'
      },
      {
        img: 'https://i.pinimg.com/236x/eb/9a/e6/eb9ae6e148a2286d86b32bf8731d8a8b.jpg'
      },
      {
        img: 'https://i.pinimg.com/236x/8d/5b/35/8d5b354d7a9e3177ffa7a55d0ec49eb2.jpg'
      },

    ]
    const col1 = images.filter((image, i) => i%2 == 0 )
    const col2 = images.filter((image, i) => i%2 != 0 )
    const num = images.length/4
    let number = num.toFixed()
    if (num > parseInt(number)) {
      number = (parseInt(number) + 1).toFixed()
    }
    const numLoop = parseInt(number)

    return { 
      images,
      col1, 
      col2,
      numLoop,
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

/* style for col 4 */
.col4 {
  height: 80px;
  width: 80px;
  object-fit: cover;

}

/* style for col 4 */
.col3 {
  height: 120px;
  width: 120px;
  object-fit: cover;

}
</style>
