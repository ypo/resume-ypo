<template>
    <v-sheet v-if="data != undefined" color="transparent">
        <v-container>
            <MainTitle :print="print">{{ data.title }}</MainTitle>
            <v-row class="ml-xl-16 mr-xl-16" justify="center">
                <v-col v-for="additional in data.additionals" :key="additional.title" cols="12">

                    <v-list-item :dense="print">
                        <v-list-item-content>
                            <div :class="font.title2(print)" class="font-weight-bold">

                                <div class="d-inline">
                                    {{ additional.title }}
                                </div>

                            </div>
                            <div :class="font.body2(print)" v-html="additional.description"></div>
                            <a :class="font.body2(print)" :href="additional.link" target="_blank">{{ additional.link }}
                            </a>
                        </v-list-item-content>
                    </v-list-item>

                </v-col>

            </v-row>
        </v-container>
    </v-sheet>
</template>
<script lang="ts" setup>
import { useFont } from '~/composables/useFont';
import { useAsync, useContext } from '@nuxtjs/composition-api';
const font = useFont();
const { $content } = useContext()
const data = useAsync(() =>
    $content("/en/additional").fetch<any>()
);
defineProps<{ print?: boolean }>()

</script>