<template>
  <v-container fluid>

    <v-row>
      <v-col>
        <Intro></Intro>
      </v-col>
    </v-row>

    <v-row class="no-break">
      <v-col>
        <Experience class="mt-10 mt-lg-16"></Experience>
      </v-col>
    </v-row>

    <v-row class="no-break">
      <v-col>
        <Education></Education>
      </v-col>
    </v-row>

    <v-row class="no-break">
      <v-col>
        <Skill></Skill>
      </v-col>
    </v-row>

    <v-row class="no-break">
      <v-col>
        <Languages></Languages>
      </v-col>
    </v-row>

    <v-row class="no-break">
      <v-col>
        <Additional></Additional>
      </v-col>
    </v-row>



  </v-container>
</template>
<script lang="ts" setup>
import Experience from '~/components/Experience.vue';
import Education from '~/components/Education.vue';
import Skill from '~/components/Skill.vue';
import Languages from '~/components/Languages.vue';
import Additional from '~/components/Additional.vue';
import Intro from '~/components/Intro.vue';
</script>
<style scoped>
@media print {
  .no-break {
    break-inside: avoid;
  }
}
</style>