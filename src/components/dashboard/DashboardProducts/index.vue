<template lang="pug">
base-card 
    template(v-slot:header)
        span Top Selling Products
    template(v-slot:default)
        ul.products_list 
            li.products_list_item(v-for="product in dashboard.products" :key="product.id")
               dashboard-product(:img="product.img" :name="product.name" :rating="product.rating" :cost="product.cost")
</template>

<script>
import DashboardProduct from './DashboardProduct.vue';
import { useDashboardStore } from "../../../store/dashboard.js";


const dashboard = useDashboardStore();
        
</script>

<style scoped lang="scss">
.products_list {
    height: 100%;
    margin: 0;
    padding: 0;
    list-style-type: none;

    &_item {
        width: 100%;
    }
}
</style>