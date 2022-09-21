<template>
    <v-container fluid>

        <v-row></v-row>
        <div class="py-4"></div>
        <v-row>
            <v-col></v-col>
            <v-col lg="6" class="ml-4 mr-4">

                <div>
                    <h2 class="text-h4 font-weight-bold">{{ hello.hi }}</h2>
                    <h1 class="text-h3 font-weight-bold">{{ hello.name }}</h1>
                </div>

                <h3 class="text-h6 text-lg-h4 font-weight-light">
                    {{ hello.description }}
                </h3>
            </v-col>
        </v-row>

        <v-row class="no-break">

            <v-col cols="2">

                <v-row>
                    <v-col>
                        <PdfLanguages></PdfLanguages>
                    </v-col>
                </v-row>

            </v-col>
            <v-col>
                <Experience :print="true"></Experience>
            </v-col>
        </v-row>

        <v-row class="no-break">
            <v-col>
                <Education></Education>
            </v-col>
        </v-row>

        <v-row class="no-break">
            <v-col>
                <Skill :print="true"></Skill>
            </v-col>
        </v-row>



        <v-row class="no-break">
            <v-col>
                <Additional></Additional>
            </v-col>
        </v-row>

        <v-row class="no-break">
            <v-col>
                <Contact></Contact>
            </v-col>
        </v-row>

        </v-col>

        </v-row>

    </v-container>
</template>
<script lang="ts" setup>
import { ref, useAsync, useContext, onMounted } from '@nuxtjs/composition-api';
import Experience from '~/components/Experience.vue';
import Education from '~/components/Education.vue';
import Skill from '~/components/Skill.vue';
import PdfLanguages from '~/components/PdfLanguages.vue';
import Additional from '~/components/Additional.vue';
import Contact from '~/components/Contact.vue';

const { $content } = useContext()
const hello = useAsync(() =>
    $content("/en/hello").fetch<any>()
);
const started = ref(false)

onMounted(() => { started.value = true })

</script>
<style scoped>
@media print {
    .no-break {
        break-inside: avoid;
    }
}
</style>