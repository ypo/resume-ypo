<template>
  <v-app>

    <div class="d-lg-none bg-position-mobile">
      <BackgroundSvg></BackgroundSvg>
    </div>

    <div class="d-none d-lg-flex bg-position">
      <BackgroundSvg></BackgroundSvg>
    </div>

    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="true" app class="d-print-none">
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts" setup>
import BackgroundSvg from "~/assets/background.svg?inline";
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
</style>