<template>
  <v-container fluid>
    <div class="d-print-none">

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

      <div class="mb-10"></div>

    </div>

    <div class="d-none d-print-flex">
      <Print></Print>
    </div>


  </v-container>
</template>

<script lang="ts" setup>
import Experience from '~/components/Experience.vue';
import Education from '~/components/Education.vue';
import Skill from '~/components/Skill.vue';
import Languages from '~/components/Languages.vue';
import Additional from '~/components/Additional.vue';
import Intro from '~/components/Intro.vue';
import Print from '~/components/Print.vue';
</script>
<style scoped>
@media print {

  @page {
    font-size: 100%;
    size: a4;
    margin: 0;
  }

  * {
    color-adjust: exact !important;
  }
}
</style>