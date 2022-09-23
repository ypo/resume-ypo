<template>
    <div>
        <div v-if="print !== true">
            <div class="py-16"></div>
            <v-row>
                <v-col class="d-none d-lg-flex"></v-col>
                <v-col lg="6" class="ml-4 mr-4">
                    <div class="opacity-animation">
                        <h2 class="text-h3 text-lg-h2 font-weight-bold">{{ hello.hi }}</h2>
                        <h1 class="text-h2 text-lg-h1 font-weight-bold">{{ hello.name }}</h1>
                    </div>

                    <h3 class="text-h5 text-lg-h4 font-weight-light">
                        {{ hello.description }}
                    </h3>
                </v-col>
            </v-row>
        </div>
        <div v-if="print === true">

            <v-row>
                <v-col cols="6">

                    <v-list color="transparent">
                        <v-list-item>
                            <v-list-item-avatar size="90">
                                <v-avatar size="90px" class="justify-center">
                                    <img alt="Avatar" src="/2361270.jpg">
                                </v-avatar>
                            </v-list-item-avatar>

                            <div class="text-h4 font-weight-bold"
                                style="overflow: unset !important; white-space: unset">
                                {{ hello.name }}
                            </div>


                        </v-list-item>

                        <div class="text-h6 font-weight-bold">
                            {{ hello.description }}
                        </div>
                    </v-list>

                </v-col>
                <v-col></v-col>

            </v-row>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useAsync, useContext } from '@nuxtjs/composition-api';

const { $content } = useContext()
const hello = useAsync(() =>
    $content("/en/hello").fetch<any>()
);
defineProps<{ print?: boolean }>()
</script>
<style scoped>
.opacity-animation {
    animation-name: opacity;
    animation-delay: 250ms;
    animation-duration: 2s;
}

@keyframes opacity {
    from {
        opacity: 0
    }

    to {
        opacity: 1
    }
}
</style>