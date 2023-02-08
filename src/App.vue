<template lang="pug">
.wrapper
    side-bar
    router-view
</template>

<script>
import SideBar from './layout/SideBar.vue';
import Analytict from './pages/Analytics.vue';
import Dashboard from './pages/Dashboard.vue';

export default {
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
    gap: 30px;
    background-color: var(--grey);
}
</style>
