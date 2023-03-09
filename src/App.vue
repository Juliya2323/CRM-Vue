<template lang="pug">
.wrapper
    side-bar
    router-view
</template>

<script setup>
import SideBar from "./layout/SideBar.vue";
import Analytict from "./pages/Analytics.vue";
import Dashboard from "./pages/Dashboard.vue";
import { useDashboardStore } from "./store/dashboard.js";

const dashboard = useDashboardStore();
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: var(--grey);
  position: relative;

  @media screen and (max-width: 1200px) {
    height: fit-content;
  }
}
</style>
