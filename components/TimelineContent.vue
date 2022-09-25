<template>

    <v-timeline-item v-observe-visibility="visibilityChanged" small fill-dot
        :class="{'opacity-animation': !print, 'paused': !visible}" style="padding-bottom: 12px" color="blue lighten-2">

        <template #opposite>
            <span class="text-h5 font-weight-bold blue--text" v-text="experience.start"></span>
        </template>



        <div :class="{'py-4': print !== true}">

            <div v-if="dense" :class="font.date(print)" class="font-weight-bold blue--text">{{experience.start}}</div>

            <div>
                <div :class="font.title(print, dense)" class="font-weight-bold "> {{
                experience.company }}
                </div>
            </div>

            <h2 :class="font.title2(print)" class="text-lg-h5 font-weight-light blue--text">
                {{ experience.title }}
            </h2>

            <div :class="font.subtitle(print)" class="font-weight-light text-grey">
                {{ experience.location }}
            </div>

            <div :class="font.body(print)" v-html="experience.description">
            </div>

            <a :class="font.body(print)" style="cursor: pointer" :href="experience.link" target="_blank">{{
            experience.link }}
            </a>
        </div>

    </v-timeline-item>
</template>
<script lang="ts" setup>
import { ref } from '@nuxtjs/composition-api';
import { useFont } from '~/composables/useFont';
defineProps<{ experience: any, print?: boolean, dense?: boolean }>()
const font = useFont();
const visible = ref(false)
function visibilityChanged(isVisible: boolean) {
    if (isVisible === true) {
        visible.value = true
    }
}
</script>
<style scoped>
.paused {
    animation-play-state: paused;
}

.hidden {
    opacity: 0
}

.opacity-animation {
    animation-name: bounce;
    animation-delay: 0;
    animation-duration: 0.5s;
}

@keyframes opacity {
    from {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

@keyframes bounce {
    0% {
        opacity: 0;
        transform: translateY(250px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>