<template lang="pug">
.wrapper
    side-bar
    router-view
</template>

<script>
import SideBar from './layout/SideBar.vue';
import Analytict from './pages/Analytics.vue';
import Dashboard from './pages/Dashboard.vue';
import { useDashboardStore } from './store/dashboard.js';

export default {
    setup() {
        const dashboard = useDashboardStore();
        return {dashboard};
    },
    components: {
        SideBar,
        Analytict,
        Dashboard
    }
}
</script>

<style scoped lang="scss">
.wrapper {
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: var(--grey);
}
</style>
