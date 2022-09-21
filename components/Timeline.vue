<template>
    <v-timeline :dense="dense">
        <v-timeline-item v-for="experience in experiences" :key="experience.start" small fill-dot>

            <template #opposite>
                <span class="text-h5 font-weight-bold blue--text" v-text="experience.start"></span>
            </template>

            <div :class="{'py-4': print !== true}">

                <div v-if="dense" :class="{'text-h5': print !== true, 'text-h6': print === true}"
                    class="font-weight-bold blue--text">{{experience.start}}</div>

                <div>
                    <div :class="{'text-h6': print, 'text-h5': dense, 'text-4': dense === false, 'mb-4': print !== true}"
                        class="font-weight-bold "> {{
                        experience.company }}
                    </div>
                </div>

                <h2 class="text-h6 text-lg-h5 font-weight-light blue--text">
                    {{ experience.title }}
                </h2>

                <div :class="{'text-h6': print !== true, 'mb-4': print !== true}" class="font-weight-light grey--text">
                    {{ experience.location }}
                </div>

                <div class="text-subtitle-1" v-html="experience.description">
                </div>

                <a class="text-subtitle-1" style="cursor: pointer" :href="experience.link" target="_blank">{{
                experience.link }}
                </a>
            </div>

        </v-timeline-item>
    </v-timeline>
</template>
<script lang="ts" setup>

defineProps<{ experiences: any, dense: boolean, print: boolean }>()

</script>