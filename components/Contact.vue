<template>
    <div v-if="data">
        <div class="body-2 font-weight-bold">{{ data.title }}</div>
        <v-list dense color="transparent">
            <v-list-item v-for="info in data.info" :key="info.title">
                <v-list-item-icon style="margin-right: 1px !important">
                    <v-icon small v-text="info.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title class="body-3" v-html="info.title"></v-list-item-title>
                    <v-list-item-subtitle class="body-3" v-text="info.subtitle"></v-list-item-subtitle>
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