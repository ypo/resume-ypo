<template>
    <v-sheet v-if="data != undefined" color="transparent">
        <v-container>
            <MainTitle>{{ data.title }}</MainTitle>
            <v-row class="ml-xl-10 mr-xl-10">
                <v-col v-for="education in data.educations" :key="education.school" lg="6">

                    <v-list-item>


                        <v-list-item-avatar size="150" color="white" class="d-none d-md-flex">
                            <v-img :src="education.logo" contain></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>

                            <v-list-item-avatar v-if="education.logo !== undefined" size="40" color="white"
                                class="d-md-none">
                                <v-img :src="education.logo" contain></v-img>
                            </v-list-item-avatar>

                            <div class="text-h5 font-weight-bold blue--text">
                                {{ education.date }}
                            </div>


                            <v-list-item-title class="text-h5 font-weight-bold"
                                style="overflow: unset !important; white-space: unset">
                                {{ education.school }}
                            </v-list-item-title>


                            <v-list-item-title class="text-h5 font-weight-light">{{
                            education.degree }}
                            </v-list-item-title>
                            <v-list-item-subtitle>{{ education.location }}
                            </v-list-item-subtitle>

                            <div class="text-subtitle-1 mt-4" v-html="education.description"></div>

                            <a class="text-subtitle-1" :href="education.link" target="_blank">{{ education.link }}
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
const { $content } = useContext()
const data = useAsync(() =>
    $content("/en/education").fetch<any>()
);
</script>