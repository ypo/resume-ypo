<template>
    <v-sheet v-if="data != undefined" color="transparent">
        <v-container>
            <MainTitle>{{ data.title }}</MainTitle>
            <v-row>
                <v-spacer class="d-none d-lg-flex"></v-spacer>
                <Timeline v-if="print === true" :experiences="data.experiences" :dense="true" :print="print">
                </Timeline>
                <Timeline v-if="print !== true" class="d-print-none d-none d-lg-block" :experiences="data.experiences"
                    :dense="false">
                </Timeline>
                <Timeline v-if="print !== true" class="d-print-none d-lg-none" :experiences="data.experiences"
                    :dense="true"></Timeline>
                </v-col>
                <v-spacer class="d-none d-lg-flex"></v-spacer>
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
defineProps<{ print?: boolean }>();

</script>
