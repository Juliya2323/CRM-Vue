<template lang="pug">
dashboard-calendar(v-if="dashboard.calendarIsOpen")
order-details(v-if="dashboard.orderIsChecked")
product-details(v-if="dashboard.productIsChecked")
.dashboard
    header.dashboard_header 
      h2.dashboard_title Dashboard
      .dashboard_calendar
        button.dashboard_calendar_btn(@click="switchCalendar") {{ dashboard.date }}
    section.dashboard_tabs
        ul.dashboard_list
            li(class=".dashboard_list_item" v-for = "tab in dashboard.tabs" :key = "tab.key") 
                dashboard-tab(:icon="tab.icon" :amount="tab.amount" :title="tab.title" :id="tab.id")
    section.dashboard_section_top
        .dashboard_item_left 
            img.dashboard_img(:src="main" alt="main")
        .dashboard_item_right
            dashboard-diagram.diagram
    section.dashboard_section_bottom
        .dashboard_item_left 
            dashboard-orders
        .dashboard_item_right
            dashboard-products
</template>

<script setup>
import { ref } from "vue";
import { useDashboardStore } from "../store/dashboard.js";
import DashboardTab from "../components/dashboard/DashboardTab/index.vue";
import DashboardDiagram from "../components/dashboard/DashboardDiagram/index.vue";
import DashboardOrders from "../components/dashboard/DashboardOrders/index.vue";
import DashboardProducts from "../components/dashboard/DashboardProducts/index.vue";
import DashboardCalendar from "../components/dashboard/DashboardCalendar/index.vue";
import OrderDetails from "../components/dashboard/DashboardOrders/OrderDetails.vue";
import ProductDetails from "../components/dashboard/DashboardProducts/ProductDetails.vue";
import Main from "../assets/icons/main.svg";

const dashboard = useDashboardStore();
const main = ref(Main);
const calendarIsOpen = ref(false);

function switchCalendar() {
  dashboard.calendarIsOpen = !dashboard.calendarIsOpen;
}
</script>

<style scoped lang="scss">
.dashboard {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 28px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;

  @media screen and (max-width: 420px) {
    padding: 20px;
  }

  &_header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 305px) {
      flex-direction: column;
      gap: 20px;
    }
  }

  &_title {
    margin: 0;
    font-weight: 700;
    font-size: 24px;

    @media screen and (max-width: 400px) {
      font-size: 18px;
    }
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
      }

      &::after {
        content: url("../assets/icons/arrow2.svg");
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
    gap: 25px;

    @media screen and (max-width: 1111px) {
      flex-wrap: wrap;
      justify-content: space-around;
    }

    @media screen and (max-width: 719px) {
      max-height: 230px;
      overflow: scroll;
    }
  }

  &_item_left {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--white);
    border-radius: 10px;

    @media screen and (max-width: 1110px) {
      width: 100%;
    }

    @media screen and (max-width: 420px) {
      width: 80%;
      
    }
  }

  &_item_right {
    width: 40%;

    @media screen and (max-width: 1110px) {
      width: 100%;
    }

    @media screen and (max-width: 305px) {
      width: 90%;
    }
  }

  &_section_top {
    position: relative;
    display: flex;
    justify-content: space-between;
    gap: 30px;
    width: 100%;
    height: 39vh;

    @media screen and (max-width: 1111px) {
      height: 50vh;
    }

    @media screen and (max-width: 835px) {
      flex-wrap: wrap;
      height: fit-content;
      justify-content: center;
    }

    @media screen and (max-width: 420px) {
      gap: 10px;
    }
  }

  .diagram {
    @media screen and (max-width: 480px) {
      transform: scale(0.8);
    }
  }

  &_section_bottom {
    position: relative;
    display: flex;
    justify-content: space-between;
    gap: 30px;
    width: 100%;
    height: 39vh;

    @media screen and (max-width: 1110px) {
      flex-wrap: wrap;
      height: fit-content;
      justify-content: center;
    }
  }

  &_img {
    width: fit-content;
    max-height: 300px;

    @media screen and (max-width: 1200px) {
      max-height: 250px;
    }

    @media screen and (max-width: 1090px) {
      max-height: 220px;
    }

    @media screen and (max-width: 500px) {
      max-height: 190px;
    }

    @media screen and (max-width: 445px) {
      max-height: 150px;
    }

    @media screen and (max-width: 420px) {
      max-height: 110px;
      max-width: 250px;
    }

    
  }
}
</style>
