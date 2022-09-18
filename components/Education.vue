<template>
    <v-sheet v-if="data != undefined" color="transparent">
        <v-container>
            <v-row>
                <v-spacer></v-spacer>
                <v-col cols="12" xl="7">
                    <h1 class="text-h2">{{ data.title }}</h1>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>


            <v-row class="ml-xl-10 mr-xl-10">
                <v-col v-for="education in data.educations" :key="education.school" cols="6">

                    <v-list-item>


                        <v-list-item-avatar size="150" color="white">
                            <v-img :src="education.logo" contain></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <div class="text-h5 font-weight-bold blue--text">
                                {{ education.date }}
                            </div>


                            <v-list-item-title class="text-h5 font-weight-bold">
                                {{ education.school }}
                            </v-list-item-title>


                            <v-list-item-title class="text-h5 font-weight-light">{{ education.degree }}
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
const { $content } = useContext()
const data = useAsync(() =>
    $content("/en/education").fetch<any>()
);
</script>