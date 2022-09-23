<template>
  <v-app>

    <div class="d-lg-none bg-position-mobile">
      <BackgroundSvg></BackgroundSvg>
    </div>

    <div class="d-none d-lg-flex bg-position">
      <BackgroundSvg></BackgroundSvg>
    </div>

    <div class="d-print-none d-none d-lg-flex  an-position masked">
      <lottie :width="800" :height="800" :options="{ animationData: animationData.default }"
        v-on:animCreated="handleAnimation" />
    </div>

    <div class="d-print-none d-lg-none  an-position-mobile masked">
      <lottie :width="400" :height="400" :options="{ animationData: animationData.default }"
        v-on:animCreated="handleAnimation" />
    </div>

    <v-main>

      <Nuxt />

    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script lang="ts" setup>
import lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from "~/assets/lf20_kfuw1wey.json";
import BackgroundSvg from "~/assets/background.svg?inline";
import { ref } from '@nuxtjs/composition-api';
import Footer from '~/components/Footer.vue';

const anim = ref<any>(null);
function handleAnimation(a: any) {
  a.setSpeed(0.1);
  anim.value = a;
}
</script>
<style scoped>
.bg-position-mobile {
  position: absolute;
  z-index: 0;
  top: -380px;
  left: 0
}

.bg-position {
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0
}

.an-position {
  position: absolute;
  z-index: 1;
  top: -200px;
  left: -210px;
}

.an-position-mobile {
  position: absolute;
  z-index: 1;
  top: -120px;
  left: -150px;
}

.masked {
  mask-image: linear-gradient(to bottom right, black -10%, transparent 70%);
}
</style>