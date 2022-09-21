<template>
    <div v-if="data">
        <div class="font-weight-bold">{{ data.title }}</div>
        <v-list dense color="transparent">
            <v-list-item v-for="info in data.info" :key="info.title">
                <v-list-item-icon>
                    <v-icon v-text="info.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title v-html="info.title"></v-list-item-title>
                    <v-list-item-subtitle v-text="info.subtitle"></v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </div>

</template>
<script lang="ts" setup>
import { useAsync, useContext } from '@nuxtjs/composition-api';
const { $content } = useContext()
const data = useAsync(() =>
    $content("/en/contact").fetch<any>()
);
</script>