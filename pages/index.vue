<template>
  <v-container fluid>

    <v-row></v-row>
    <div class="py-16"></div>
    <div class="py-16 d-none d-lg-flex"></div>
    <v-row>
      <v-col class="d-none d-lg-flex"></v-col>
      <v-col lg="6" class="ml-4 mr-4">
        <!--<Transition name="fadelnt" appear>-->
        <div class="opacity-animation">
          <h2 class="text-h3 text-lg-h2 font-weight-bold">{{ hello.hi }}</h2>
          <h1 class="text-h2 text-lg-h1 font-weight-bold">{{ hello.name }}</h1>
        </div>
        <h3 class="text-h5 text-lg-h4 font-weight-light">{{ hello.description }}</h3>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <Experience class="mt-10 mt-lg-16"></Experience>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <Education></Education>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <Skill></Skill>
      </v-col>
    </v-row>



  </v-container>
</template>
<script lang="ts" setup>
import { ref, useAsync, useContext, onMounted } from '@nuxtjs/composition-api';
import Experience from '~/components/Experience.vue';
import Education from '~/components/Education.vue';
import Skill from '~/components/Skill.vue';

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