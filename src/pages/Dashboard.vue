<template lang="pug">
.dashboard
    section.dashboard_one
        ul.dashboard_list
            li(class=".dashboard_list_item" v-for = "product in dashboard.products" :key = "product.key") 
                dashboard-tab(:icon="product.icon" :amount="product.amount" :title="product.title" :id="product.id")
    section.dashboard_two
        .dashboard_item_left 
            img.dashboard_img(:src="main")
        .dashboard_item_right
            dashboard-diagram
    section.dashboard_two
</template>

<script>
import { useDashboardStore } from "../store/dashboard.js";
import DashboardTab from "../components/dashboard/DashboardTab.vue";
import DashboardDiagram from "../components/dashboard/DashboardDiagram.vue";
import Main from "../assets/icons/main.svg";

export default {
  setup() {
    const dashboard = useDashboardStore();
    return { dashboard };
  },
  components: { DashboardTab, DashboardDiagram },
  data() {
    return {
      main: Main,
    };
  },
};
</script>

<style scoped lang="scss">
.dashboard {
  width: 100%;
  margin: 0;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;

  &_list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
  }

  &_item_left {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--white);
    border-radius: 10px;
  }

  &_item_right {
    width: 38%;
  }

  &_two {
    position: relative;
    display: flex;
    justify-content: space-between;
    gap: 30px;
    width: 100%;
    height: 41vh;
  }

  &_img {
    width: fit-content;
  }
}
</style>
