<template>
  <v-container>

    <v-row></v-row>
    <div class="py-16"></div>
    <div class="py-16"></div>
    <v-row>
      <v-col cols="6"></v-col>
      <v-col cols="6">
        <!--<Transition name="fadelnt" appear>-->
        <div class="opacity-animation">
          <h2 class="text-h2 font-weight-bold">{{ hello.hi }}</h2>
          <h1 class="text-h1 font-weight-bold">{{ hello.name }}</h1>
        </div>
        <h3 class="text-h4">{{ hello.description }}</h3>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <Experience class="mt-16"></Experience>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <Education></Education>
      </v-col>
    </v-row>



  </v-container>
</template>
<script lang="ts" setup>
import { ref, useAsync, useContext, onMounted } from '@nuxtjs/composition-api';
import Experience from '~/components/Experience.vue';
import Education from '~/components/Education.vue';

const { $content } = useContext()
const hello = useAsync(() =>
  $content("/en/hello").fetch<any>()
);
const started = ref(false)

onMounted(() => { started.value = true })

</script>
<style scoped>
.opacity-animation {
  animation-name: opacity;
  animation-delay: 250ms;
  animation-duration: 2s;
}

@keyframes opacity {
  from {
    opacity: 0
  }

  to {
    opacity: 1
  }
}
</style>