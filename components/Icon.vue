<template>

    <div>
        <RustSvg v-if="type === 'rust'" width="100%" height="auto" viewBox="0 0 100 100"></RustSvg>
        <CppSvg v-if="type === 'cpp'" width="100%" height="auto" viewBox="0 0 350 350"></CppSvg>
    </div>

</template>
<script lang="ts" setup>
defineProps<{ type: string }>()

import RustSvg from "~/assets/rust.svg?inline";
import CppSvg from "~/assets/cpp.svg?inline";
</script>
