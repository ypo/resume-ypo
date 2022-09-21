<template>
    <v-sheet v-if="data != undefined" color="transparent">
        <v-row justify="center">

            <v-col>



            </v-col>

        </v-row>
    </v-sheet>
</template>

<script lang="ts" setup>
import { useAsync, useContext } from '@nuxtjs/composition-api';
const { $content } = useContext()
const data = useAsync(() =>
    $content("/en/contact").fetch<any>()
);
</script>