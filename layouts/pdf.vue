<template>
    <v-app>

        <div class="d-lg-none bg-position-mobile">
            <BackgroundSvg></BackgroundSvg>
        </div>

        <div class="d-none d-lg-flex bg-position">
            <BackgroundSvg></BackgroundSvg>
        </div>

        <v-main>
            <Nuxt />
        </v-main>
    </v-app>
</template>
  
<script lang="ts" setup>
import BackgroundSvg from "~/assets/background2.svg?inline";
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
</style>