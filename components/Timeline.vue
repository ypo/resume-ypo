<template>
    <v-col cols="12" xl="7" :class="{'dense': dense === true}">
        <v-timeline :dense="dense" style="padding-top: 0">
            <TimelineContent v-for="experience in experiences" :key="experience.start" :dense="dense" :print="print"
                :experience="experience"></TimelineContent>
        </v-timeline>
    </v-col>
</template>
<script lang="ts" setup>
import TimelineContent from './TimelineContent.vue';
defineProps<{ experiences: any, dense: boolean, print?: boolean }>()
</script>
<style scope>
.dense {
    padding-left: 0 !important;
}
</style>
