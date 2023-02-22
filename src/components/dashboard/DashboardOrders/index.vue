<template lang="pug">
base-card 
    template(v-slot:header)
        span Recent Orders
    template(v-slot:default)
        table.orders_table 
          thead.orders_table_header
            tr.orders_header_list
                th.header_item_num Tracking No
                th.header_item_prod Product Name
                th.header_item_price Price
                th.header_item_total Total Order
                th.header_item_amount Total Amount
          tbody.orders_table_body
            tr.orders_list_item(v-for="order in dashboard.orders" :key="order.id" @click="dashboard.selectOrder(order.id)" )    
                dashboard-order(:no="order.id", :img="order.img", :name="order.name", :price="order.price", :total="order.total", :amount="order.amount")
</template>

<script setup>
import DashboardOrder from "../DashboardOrders/DashboardOrder.vue";
import { useDashboardStore } from "../../../store/dashboard.js";

const dashboard = useDashboardStore();
</script>

<style scoped lang="scss">
.orders_table {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  height: 100%;

  &_header {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1.5px solid #fafafb;

    .orders_header_list {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    .header_item_num {
      width: 19%;
      position: relative;
      text-align: left;
      cursor: pointer;
    }
    .header_item_prod {
      width: 29%;
      position: relative;
      text-align: left;
      cursor: pointer;
    }
    .header_item_price {
      width: 16%;
      position: relative;
      text-align: left;
      cursor: pointer;
    }
    .header_item_total {
      width: 21%;
      position: relative;
      text-align: center;
      cursor: pointer;
    }
    .header_item_amount {
      width: 15%;
      text-align: right;
    }
  }

  .orders_list_item {
    width: 100%;
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    cursor: pointer;
  }
}
</style>
