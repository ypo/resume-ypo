<template>
    <v-timeline :dense="dense">
        <v-timeline-item v-for="experience in experiences" :key="experience.start" small fill-dot>

            <template #opposite>
                <span class="text-h5 font-weight-bold blue--text" v-text="experience.start"></span>
            </template>

            <div class="py-4">

                <div class="text-h5 font-weight-bold blue--text d-lg-none">{{experience.start}}</div>

                <div>
                    <div class="text-h5 text-lg-h4 font-weight-bold mb-4"> {{ experience.company }}
                    </div>
                </div>

                <h2 class="text-h6 text-lg-h5 font-weight-light blue--text">
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
</template>
<script lang="ts" setup>

defineProps<{ experiences: any, dense: boolean }>()

</script>