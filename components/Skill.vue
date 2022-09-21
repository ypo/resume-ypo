<template>
    <v-sheet v-if="data != undefined" color="transparent">
        <v-container>
            <MainTitle>{{ data.title }}</MainTitle>
            <v-row class="ml-xl-10 mr-xl-10">

                <v-col v-for="skill in data.skills" :key="skill.title" :cols="print === true ? '4' : '12'" lg="4">
                    <v-list-item>
                        <v-list-item-content>
                            <div :class="{'text-h4': print !== true, 'text-h5': print === true}"
                                class="font-weight-bold">
                                {{ skill.title }}
                            </div>

                            <v-list-item-title :class="{'text-h5': print !== true, 'text-h6': print === true}"
                                class="font-weight-light blue--text"
                                style="overflow: unset !important; white-space: unset">
                                {{ skill.subtitle }}
                            </v-list-item-title>

                            <div :class="{'text-h6': print !== true}" class="font-weight-light mb-4 grey--text">{{
                            skill.framework}}
                            </div>

                            <div :class="{'mt-4': print !== true,}" class="text-subtitle-1" v-html="skill.description">
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
const { $content } = useContext()
const data = useAsync(() =>
    $content("/en/skill").fetch<any>()
);
defineProps<{ print?: boolean }>()
</script>
