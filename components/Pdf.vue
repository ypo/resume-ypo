<template>
    <div>
        <client-only>
            <vue-html2pdf :show-layout="false" :enable-download="true" filename="myPDF" :pdf-quality="2"
                :manual-pagination="false" pdf-format="a4" ref="html2Pdf" pdf-orientation="portrait"
                pdf-content-width="800px">
                <section slot="pdf-content">

                    <v-app>



                        <v-row>
                            <v-col>
                                <Experience class="mt-10 mt-lg-16"></Experience>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col>
                                <Education></Education>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col>
                                <Skill></Skill>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col>
                                <Languages></Languages>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col>
                                <Additional></Additional>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col>
                                <Contact></Contact>
                            </v-col>
                        </v-row>


                    </v-app>

                </section>
            </vue-html2pdf>
        </client-only>
        <v-btn @click.prevent="generateReport">PDF</v-btn>
    </div>
</template>
<script lang="ts" setup>import { ref } from '@nuxtjs/composition-api';

const html2Pdf = ref<any>(null)

function generateReport() {
    console.log(html2Pdf)
    html2Pdf.value.generatePdf()
}

</script>