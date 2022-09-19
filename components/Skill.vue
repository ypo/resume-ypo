<template>
    <v-sheet v-if="data != undefined" color="transparent">
        <v-container>
            <MainTitle>{{ data.title }}</MainTitle>
            <v-row class="ml-xl-10 mr-xl-10">

                <v-col v-for="skill in data.skills" :key="skill.title" cols="12" lg="4">
                    <v-list-item>
                        <v-list-item-content>
                            <div class="text-h4 font-weight-bold">
                                {{ skill.title }}
                            </div>

                            <v-list-item-title class="text-h5 font-weight-light blue--text"
                                style="overflow: unset !important; white-space: unset">
                                {{ skill.subtitle }}
                            </v-list-item-title>

                            <div class="text-h6 font-weight-light mb-4 grey--text">{{ skill.framework}}
                            </div>

                            <div class="text-subtitle-1 mt-4" v-html="skill.description"></div>
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
    $content("/en/skill").fetch<any>()
);
</script>
