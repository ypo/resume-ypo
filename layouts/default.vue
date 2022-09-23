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
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="true" app class="d-print-none" padless>

      <v-card class="flex primary lighten-2 py-4 text-center white--text" flat tile>
        <v-card-title>
          <span class="body-2">contact@yannickpoirier.fr</span>
          <v-spacer></v-spacer>

          <v-btn class="mx-4" dark icon href="mailto:contact@yannickpoirier.fr">
            <v-icon size="24px">
              mdi-email
            </v-icon>
          </v-btn>
          <v-btn class="mx-4" dark icon href="https://www.linkedin.com/in/yannick-poirier" target="_blank">
            <v-icon size="24px">
              mdi-linkedin
            </v-icon>
          </v-btn>

          <v-btn class="mx-4" dark icon href="https://github.com/ypo" target="_blank">
            <v-icon size="24px">
              mdi-github
            </v-icon>
          </v-btn>

        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <span class="caption white--text">Designed by <strong>Yannick
              Poirier</strong>, <a class="caption white--text" href="https://github.com/ypo/resume-ypo">under MIT
              license
            </a></span>
        </v-card-text>
      </v-card>

    </v-footer>
  </v-app>
</template>

<script lang="ts" setup>
import lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from "~/assets/lf20_kfuw1wey.json";
import BackgroundSvg from "~/assets/background.svg?inline";
import { ref } from '@nuxtjs/composition-api';
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