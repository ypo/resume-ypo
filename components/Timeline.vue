<template>
    <v-timeline :dense="dense">
        <TimelineContent v-for="experience in experiences" :key="experience.start" :dense="dense" :print="print"
            :experience="experience"></TimelineContent>
    </v-timeline>
</template>
<script lang="ts" setup>
import TimelineContent from './TimelineContent.vue';
defineProps<{ experiences: any, dense: boolean, print?: boolean }>()
</script>
