<template>

    <v-timeline-item v-observe-visibility="visibilityChanged" small fill-dot
        :class="{'opacity-animation': !print, 'paused': !visible}">

        <template #opposite>
            <span class="text-h5 font-weight-bold blue--text" v-text="experience.start"></span>
        </template>

        <div :class="{'py-4': print !== true}">

            <div v-if="dense" :class="{'text-h5': print !== true, 'body-1': print === true}"
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
</template>
<script lang="ts" setup>
import { ref } from '@nuxtjs/composition-api';
defineProps<{ experience: any, print?: boolean, dense?: boolean }>()
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