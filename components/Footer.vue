<template>

    <v-footer :absolute="true" app class="d-print-none" padless>

        <v-card color="#36aeecff" class="flex py-4 text-center white--text" flat tile>
            <v-card-title>
                <span class="body-2">Contact me at contact@yannickpoirier.fr</span>
                <v-spacer></v-spacer>

                <v-tooltip bottom>
                    <template #activator="{ on, attrs }">
                        <v-btn v-bind="attrs" class="mx-4" dark icon href="/cv-yannick-poirier-en.pdf" target="_blank"
                            v-on="on">
                            CV
                        </v-btn>
                    </template>
                    <span>Download</span>
                </v-tooltip>

                <v-tooltip bottom>
                    <template #activator="{ on, attrs }">
                        <v-btn v-bind="attrs" class="mx-4" dark icon href="mailto:contact@yannickpoirier.fr" v-on="on">
                            <v-icon size="24px">
                                mdi-email
                            </v-icon>
                        </v-btn>
                    </template>
                    <span>E-mail</span>
                </v-tooltip>

                <v-tooltip bottom>
                    <template #activator="{ on, attrs }">
                        <v-btn v-bind="attrs" class="mx-4" dark icon href="https://www.linkedin.com/in/yannick-poirier"
                            target="_blank" v-on="on">
                            <v-icon size="24px">
                                mdi-linkedin
                            </v-icon>
                        </v-btn>
                    </template>
                    <span>LinkedIn</span>
                </v-tooltip>

                <v-tooltip bottom>
                    <template #activator="{ on, attrs }">
                        <v-btn v-bind="attrs" class="mx-4" dark icon href="https://github.com/ypo" target="_blank"
                            v-on="on">
                            <v-icon size="24px">
                                mdi-github
                            </v-icon>
                        </v-btn>
                    </template>
                    <span>Github</span>
                </v-tooltip>



            </v-card-title>

            <v-card-text class="py-2 white--text text-center">
                {{ new Date().getFullYear() }} — <span class="caption white--text">Designed by <strong>Yannick
                        Poirier</strong>, <a class="caption white--text" href="https://github.com/ypo/resume-ypo"
                        target="_blank">under
                        MIT
                        license
                    </a></span>
            </v-card-text>
        </v-card>
    </v-footer>
</template>