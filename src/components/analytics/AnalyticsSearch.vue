<template lang="pug">
form
    input.analytics_search_input(type="search" @input="search" :value="searchTerm" placeholder="Filter items")
</template>
  
<script setup>

const props = defineProps(["searchTerm"]);
const emit = defineEmits(['search']);

function search(event) {
  emit('search', event.target.value);
}

</script>

<style scoped lang="scss">
.analytics_search_input {
      width: 230px;
      border: 0.4px solid transparent;
      border-radius: 6px;
      padding: 12px;
      font-weight: 400;
      font-size: 12px;
      cursor: pointer;

      &:hover {
        border: 0.4px solid var(--medium);
      }

      &:focus {
        border: 0.4px solid var(--medium);
      }
    }
</style>