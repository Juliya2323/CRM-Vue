<template lang="pug">
.search
  input.analytics_search_input(type="search" @input="search" :value="searchTerm" placeholder="Enter name...")
</template>

<script setup>
const props = defineProps(["searchTerm"]);
const emit = defineEmits(["search"]);

function search(event) {
  emit("search", event.target.value);
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

.search {
  position: relative;

  &::after {
    content: url("../../assets/icons/search.svg");
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
  }
}



input::-webkit-search-decoration,
input::-webkit-search-cancel-button,
input::-webkit-search-results-button,
input::-webkit-search-results-decoration { display: none; }
</style>
