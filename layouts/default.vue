<template>
  <v-app>

    <div style="position:absolute; z-index:0; top: 0; left: 0">
      <BackgroundSvg></BackgroundSvg>
    </div>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="true" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts" setup>
import BackgroundSvg from "~/assets/background.svg?inline";
</script>
