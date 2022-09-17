<template>
    <v-sheet v-if="data != undefined" color="transparent">
        <v-container>
            <v-row>
                <v-spacer></v-spacer>
                <v-col cols="12" xl="7">
                    <h1 class="text-h2">{{ data.title }}</h1>
                    <v-timeline :dense="$vuetify.breakpoint.width > 0 && $vuetify.breakpoint.mobile === true">
                        <v-timeline-item v-for="experience in data.experiences" :key="experience.title" small fill-dot>

                            <template #opposite>
                                <span class="text-h5 font-weight-bold blue--text" v-text="experience.start"></span>
                            </template>

                            <div class="py-4">

                                <div>
                                    <div class="text-h4 font-weight-bold mb-4"> {{ experience.company }}
                                    </div>
                                </div>

                                <h2 class="text-h5 font-weight-light blue--text">
                                    {{ experience.title }}
                                </h2>

                                <div class="text-h6 font-weight-light mb-4 grey--text">
                                    {{ experience.location }}
                                </div>

                                <div class="text-subtitle-1" v-html="experience.description">
                                </div>

                                <a class="text-subtitle-1" :href="experience.link" target="_blank">{{ experience.link }}
                                </a>
                            </div>

                        </v-timeline-item>
                    </v-timeline>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>
        </v-container>
    </v-sheet>

</template>
<script lang="ts" setup>
import { useAsync, useContext } from '@nuxtjs/composition-api';


const { $content } = useContext()
const data = useAsync(() =>
    $content("/en/experience").fetch<any>()
);

</script>