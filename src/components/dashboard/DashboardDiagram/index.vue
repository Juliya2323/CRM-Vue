<template lang="pug">
base-card
    template(v-slot:header)
        span Analytics 
    template(v-slot:default)
        base-loader
        span.diagram_title Sales Index
</template>

<style scoped lang="scss">
    .diagram_title {
        margin: 0 auto;
    }
</style>