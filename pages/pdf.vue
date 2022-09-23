<template>
    <v-container fluid>

        <div style="position:absolute; top:50px; right:50px">
            <qr-code size=100 error-level="Q" text="https://www.yannickpoirier.fr"></qr-code>
        </div>

        <v-row class="no-break">
            <v-col>
                <Intro :print="true"></Intro>
            </v-col>
        </v-row>

        <v-row class="no-break">

            <v-col cols="3">
                <Contact :print="true"></Contact>
                <PdfLanguages></PdfLanguages>
            </v-col>
            <v-col>
                <Experience :print="true"></Experience>
            </v-col>
        </v-row>

        <v-row class="no-break">
            <v-col>
                <Education :print="true"></Education>
            </v-col>
        </v-row>

        <v-row class="no-break">
            <v-col>
                <Skill :print="true"></Skill>
            </v-col>
        </v-row>



        <v-row class="no-break">
            <v-col>
                <Additional :print="true"></Additional>
            </v-col>
        </v-row>


    </v-container>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Experience from '~/components/Experience.vue';
import Education from '~/components/Education.vue';
import Skill from '~/components/Skill.vue';
import PdfLanguages from '~/components/PdfLanguages.vue';
import Additional from '~/components/Additional.vue';
import Contact from '~/components/Contact.vue';
import Intro from '~/components/Intro.vue';

export default defineComponent({
    components: {
        Experience,
        Education,
        Skill,
        PdfLanguages,
        Additional,
        Contact,
        Intro
    },
    layout: 'pdf'
})
</script>
<style scoped>
@media print {
    .no-break {
        break-inside: avoid;
    }
}
</style>