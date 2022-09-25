<template>
    <v-sheet v-if="data != undefined" color="transparent">
        <v-container>
            <MainTitle :print="print">{{ data.title }}</MainTitle>
            <v-row class="ml-xl-10 mr-xl-10">
                <v-col v-for="education in data.educations" :key="education.degree" lg="6"
                    :cols="print === true ? 4 : 12">
                    <v-list-item>
                        <v-list-item-avatar size="150" color="white" class="d-print-none d-none d-md-flex">
                            <v-img :src="education.logo" contain></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>

                            <v-list-item-avatar v-if="education.logo !== undefined" size="40" color="white"
                                class="d-md-none d-print-none">
                                <v-img :src="education.logo" contain></v-img>
                            </v-list-item-avatar>

                            <div :class="font.date(print)" class="font-weight-bold blue--text">
                                {{ education.date }}
                            </div>

                            <div :class="{'print-title': print === true}">
                                <v-list-item-title :class="font.date(print)" class="font-weight-bold"
                                    style="overflow: unset !important; white-space: unset">
                                    {{ education.school }}
                                </v-list-item-title>


                                <v-list-item-title style="overflow: unset !important; white-space: unset"
                                    :class="font.title2(print)" class="font-weight-light">{{
                                    education.degree }}
                                </v-list-item-title>
                                <v-list-item-subtitle :class="font.subtitle(print)" class="font-weight-light text-grey">
                                    {{
                                    education.location }}
                                </v-list-item-subtitle>

                            </div>

                            <div :class="{'mt-4': print !== true, ...font.body2(print) }"
                                v-html="education.description">
                            </div>

                            <a :class="font.body2(print)" :href="education.link" target="_blank">{{ education.link }}
                            </a>

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
    $content("/en/education").fetch<any>()
);
defineProps<{ print?: boolean }>()
</script>