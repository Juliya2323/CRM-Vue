<template lang="pug">
.filter(@click="toggleFilter" :class="`m-${mode}`")
    span.filter_title {{ title }}
    .filter.icon 
        img.filter_icon_img(v-if="mode" :src="arrow")
</template>

<script setup>
import { ref } from 'vue';
import arrow from '../../../assets/icons/arrow.svg';

const mode = ref(null);
const props = defineProps(["title"]);
const emit = defineEmits(['active-filter']);

function toggleFilter() {
    mode.value = {
        "down" : null,
        "up": "down",
        null: "up"
    }[mode.value]

    emit('active-filter', mode.value);
}



</script>

<style scoped lang="scss">
.filter {
    width: 100%;
    display: flex;
    gap: 20px;
    align-items: center;

    &_icon {
        width: 5px;
    }

    &.m-up img{
        transform: rotate(180deg);
    }

    &.m-down img{
        transform: rotate(360deg);
    }
}
</style>