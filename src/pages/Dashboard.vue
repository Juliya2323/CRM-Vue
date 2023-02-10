<template lang="pug">
.dashboard
    header.dashboard_header 
      h2.dashboard_title Dashboard
      .dashboard_calendar
        button.dashboard_calendar_btn 10-06-2021
        button.dashboard_calendar_btn 10-10-2021
    section.dashboard_tabs
        ul.dashboard_list
            li(class=".dashboard_list_item" v-for = "tab in dashboard.tabs" :key = "tab.key") 
                dashboard-tab(:icon="tab.icon" :amount="tab.amount" :title="tab.title" :id="tab.id")
    section.dashboard_section
        .dashboard_item_left 
            img.dashboard_img(:src="main")
        .dashboard_item_right
            dashboard-diagram
    section.dashboard_section
        .dashboard_item_left 
            dashboard-orders
        .dashboard_item_right
            dashboard-products
</template>

<script>
import { useDashboardStore } from "../store/dashboard.js";
import DashboardTab from "../components/dashboard/DashboardTab/index.vue";
import DashboardDiagram from "../components/dashboard/DashboardDiagram/index.vue";
import DashboardOrders from "../components/dashboard/DashboardOrders/index.vue";
import DashboardProducts from "../components/dashboard/DashboardProducts/index.vue";
import Main from "../assets/icons/main.svg";

export default {
  setup() {
    const dashboard = useDashboardStore();
    return { dashboard };
  },
  components: { DashboardTab, DashboardDiagram, DashboardOrders, DashboardProducts },
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
  padding: 28px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;

  &_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &_title {
    margin: 0;
    font-weight: 700;
    font-size: 24px;
  }

  &_calendar {
    display: flex;
    justify-content: center;
    gap: 15px;

    &_btn {
      padding: 11px 33px 10px 17px;
      background-color: var(--white);
      border: 0.5px solid transparent;
      border-radius: 7px;
      font-weight: 600;
      font-size: 14px;
      color: var(--medium);
      font-family: "Nunito";
      position: relative;
      cursor: pointer;
      transition: all 0.3s ease-out;

      &:hover {
        background-color: rgba(38, 192, 226, 20%);
        border: 0.4px solid var(--medium)
      }

      &::after {
        content: url('../assets/icons/arrow2.svg');
        position: absolute;
        right: 14px;
        top: 9px;
      }
    }
  }

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

  &_section {
    position: relative;
    display: flex;
    justify-content: space-between;
    gap: 30px;
    width: 100%;
    height: 39vh;
  }

  &_img {
    width: fit-content;
    max-height: 300px;
  }
}
</style>
