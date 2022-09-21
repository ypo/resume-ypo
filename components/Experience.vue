<template>
    <v-sheet v-if="data != undefined" color="transparent">
        <v-container>
            <MainTitle>{{ data.title }}</MainTitle>
            <v-row>
                <v-spacer></v-spacer>
                <v-col cols="12" xl="7">
                    <Timeline class="d-none d-lg-block" :experiences="data.experiences" :dense="false">
                    </Timeline>
                    <Timeline class="d-lg-none" :experiences="data.experiences" :dense="true"></Timeline>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>
        </v-container>
    </v-sheet>

</template>
<script lang="ts" setup>
import { useAsync, useContext } from '@nuxtjs/composition-api';
import Timeline from '~/components/Timeline.vue';
const { $content } = useContext()
const data = useAsync(() =>
    $content("/en/experience").fetch<any>()
);


</script>