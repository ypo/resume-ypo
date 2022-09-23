<template>
    <Print></Print>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Print from '~/components/Print.vue';
export default defineComponent({
    components: {
        Print,
    },
    layout: 'pdf'
})
</script>
