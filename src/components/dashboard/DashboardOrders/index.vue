<template lang="pug">
base-card 
    template(v-slot:header)
        span Recent Orders
    template(v-slot:default)
        ul.orders_list 
            .orders_list_header 
                .header_item_num Tracking No
                .header_item_prod Product Name
                .header_item_price Price
                .header_item_total Total Order
                .header_item_amount Total Amount
            li.orders_list_item(v-for="order in dashboard.orders" :key="order.id")          
                dashboard-order(:no="order.id", :img="order.img", :name="order.name", :price="order.price", :total="order.total", :amount="order.amount")
</template>

<script>
import DashboardOrder from "../DashboardOrders/DashboardOrder.vue";
import { useDashboardStore } from "../../../store/dashboard.js";

export default {
  components: {
    DashboardOrder,
  },
  setup() {
    const dashboard = useDashboardStore();
    return { dashboard };
  },
};
</script>

<style scoped lang="scss">
.orders_list {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  height: 100%;

  &_header {
    display: flex;
    justify-content: space-between;
    padding: 10px 12px;
    border-bottom: 1.5px solid #FAFAFB;

    .header_item_num {
        width: 19%;
        position: relative;

        &::after {
            content:url('../../../assets/icons/arrow.svg');
            position: absolute;
            top: -1px;
            left: 98px;
        }
    }
    .header_item_prod {
        width: 29%;
        position: relative;

        &::after {
            content:url('../../../assets/icons/arrow.svg');
            position: absolute;
            top: -1px;
            left: 116px;
        }
    }
    .header_item_price {
        width: 16%;
        position: relative;

        &::after {
            content:url('../../../assets/icons/arrow.svg');
            position: absolute;
            top: -1px;
            left: 48px;
        }
    }
    .header_item_total {
        width: 21%;
        position: relative;
        text-align: center;

        &::after {
            content:url('../../../assets/icons/arrow.svg');
            position: absolute;
            top: -1px;
            left: 134px;
        }
    }
    .header_item_amount {
        width: 15%;
        text-align: right;
    }

    .orders_list_header {
      font-weight: 400;
      font-size: 12px;
      text-align: start;
    }
  }

  &_item {
      width: 100%;
  }
}
</style>
