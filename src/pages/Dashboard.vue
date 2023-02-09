<template lang="pug">
.dashboard
    ul.dashboard_list
      li(class=".dashboard_list_item" v-for = "product in dashboard.products" :key = "product.key") 
        dashboard-tab(:icon="product.icon" :amount="product.amount" :title="product.title" :id="product.id")
</template>

<script>
import { useDashboardStore } from '../store/dashboard.js';
import DashboardTab from '../components/dashboard/DashboardTab.vue';

export default {
    setup() {
        const dashboard = useDashboardStore();
        return {dashboard};
    },
    components: { DashboardTab }
}
</script>

<style scoped lang="scss">
.dashboard {
    width: 100%;
    margin: 0;
    padding: 30px;
    box-sizing: border-box;

    &_list {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-between;
    }
}
</style>