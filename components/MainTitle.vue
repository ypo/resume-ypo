<template>
    <v-row>
        <v-spacer></v-spacer>
        <v-col cols="12" xl="7">
            <h1 :class="{'text-h4': print !== true,  'text-lg-h2': print !== true, 'text-h5': print === true}">
                <slot></slot>
            </h1>
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
</template>
<script lang="ts" setup>
defineProps<{ print?: boolean }>()
</script>