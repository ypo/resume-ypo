<template>
    <v-sheet v-if="data != undefined" color="transparent">
        <v-container>
            <MainTitle :print="print">{{ data.title }}</MainTitle>
            <v-row class="ml-xl-10 mr-xl-10">

                <v-col v-for="skill in data.skills" :key="skill.title" :cols="print === true ? '4' : '12'" lg="4">

                    <v-list-item>
                        <v-list-item-content>
                            <div :class="font.date(print)" class="font-weight-bold">
                                {{ skill.title }}
                            </div>

                            <div :class="{'print-subtitle': print === true}">
                                <v-list-item-title :class="font.date(print)" class="font-weight-light blue--text"
                                    style="overflow: unset !important; white-space: unset;">
                                    {{ skill.subtitle }}
                                </v-list-item-title>

                                <div :class="{'print-subtitle': print === true, ...font.subtitle(print)}"
                                    class="font-weight-light mb-4 text-grey">{{
                                    skill.framework}}
                                </div>
                            </div>

                            <div :class="{'mt-4': print !== true, ...font.body2(print)}" v-html="skill.description">
                            </div>
                        </v-list-item-content>


                    </v-list-item>
                </v-col>
            </v-row>
        </v-container>
    </v-sheet>

</template>
<script lang="ts" setup>
import { useAsync, useContext } from '@nuxtjs/composition-api';
import MainTitle from './MainTitle.vue';
import { useFont } from '~/composables/useFont';
const font = useFont();
const { $content } = useContext()
const data = useAsync(() =>
    $content("/en/skill").fetch<any>()
);
defineProps<{ print?: boolean }>()
</script>


