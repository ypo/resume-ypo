<template>
    <v-sheet v-if="data != undefined" color="transparent">
        <div class="body-2 font-weight-bold">{{ data.title }}</div>
        <v-row dense>
            <v-col v-for="language in data.languages" :key="language.name" cols="12">

                <v-list-item>
                    <v-list-item-content>
                        <div class="body-2 font-weight-bold">

                            <div class="d-inline">
                                {{ language.name }}
                            </div>


                            <v-rating class="d-inline" :value="language.score" background-color="blue lighten-3"
                                color="yellow" small dense readonly>
                            </v-rating>


                        </div>

                        <v-list-item-title class="body-2 font-weight-light blue--text"
                            style="overflow: unset !important; white-space: unset">
                            {{ language.level }}
                        </v-list-item-title>

                        <div class="body-2 font-weight-light  text-grey">{{ language.description}}
                        </div>


                    </v-list-item-content>
                </v-list-item>

            </v-col>

        </v-row>

    </v-sheet>

</template>
<script lang="ts" setup>
import { useAsync, useContext } from '@nuxtjs/composition-api';


const { $content } = useContext()
const data = useAsync(() =>
    $content("/en/languages").fetch<any>()
);

</script>