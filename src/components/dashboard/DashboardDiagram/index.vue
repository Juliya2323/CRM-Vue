<template lang="pug">
base-card
    template(v-slot:header)
        span Analytics 
    template(v-slot:default)
        base-loader
        span.diagram_title Sales Index 4.9
</template>

<style scoped lang="scss">
.diagram_title {
  margin: 0 auto;

  @media screen and (max-width: 835px) {
    color: white;
  }
}
</style>
