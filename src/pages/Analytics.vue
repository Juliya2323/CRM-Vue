<template lang="pug">
.analytics 
    header.analytics_header 
        h1.analytics_title Analytics
        .analytics_wrapper 
            .analytics_search 
                input.analytics_search_input(type="text" placeholder="Search")
            base-button.analytics_button Add New
    table.analytics_table 
        tr.analytics_table_items
            th.item_checkbox
                input(type="checkbox")
            th.item_id Id
            th.item_name Name
            th.item_email Email
            th.item_date Date
            th.item_status Status
            th.item_delete
                img.item_delete_img(src="../assets/icons/delete.svg")
        .analytics_list 
            tr.analytics_list_item(v-for="worker in analytics.coworkers" :key="worker.id")
                analytics-item(:id="worker.id" :img="worker.img" :name="worker.name" :email="worker.email" :date="worker.date" :status="worker.status")
</template>

<script setup>
import { useAnalyticsStore } from "../store/analytics.js";
import AnalyticsItem from "../components/analytics/AnalyticsItem/index.vue";

const analytics = useAnalyticsStore();
</script>

<style scoped lang="scss">
.analytics {
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

  &_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  &_search {
    position: relative;

    &::after {
      content: url("../assets/icons/search.svg");
      position: absolute;
      right: 10px;
      top: 10px;
      cursor: pointer;
    }

    &_input {
      width: 230px;
      border: 0.4px solid transparent;
      border-radius: 6px;
      padding: 12px;
      font-weight: 400;
      font-size: 12px;
      cursor: pointer;

      &:hover {
        border: 0.4px solid var(--medium);
      }

      &:focus {
        border: 0.4px solid var(--medium);
      }
    }
  }

  &_button {
    padding: 13px 16px 13px 42px;
    position: relative;

    &::after {
      content: url("../assets/icons/plus.svg");
      width: 14px;
      height: 14px;
      position: absolute;
      left: 15px;
      top: 13px;
    }
  }

  &_table {
    width: 100%;
    font-weight: 400;
    font-size: 12px;
    

    &_items {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 25px;
    }

    .item_checkbox {
      width: 6%;
      cursor: pointer;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .item_id {
      width: 10%;
      position: relative;
      cursor: pointer;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      &::after {
        content: url("../assets/icons/arrow.svg");
        position: absolute;
        left: 26px;
      }
    }
    .item_name {
      width: 18%;
      position: relative;
      cursor: pointer;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      &::after {
        content: url("../assets/icons/arrow.svg");
        position: absolute;
        left: 48px;
      }
    }
    .item_email {
      width: 24%;
      position: relative;
      cursor: pointer;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      &::after {
        content: url("../assets/icons/arrow.svg");
        position: absolute;
        left: 48px;
      }
    }
    .item_date {
      width: 15%;
      position: relative;
      cursor: pointer;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      &::after {
        content: url("../assets/icons/arrow.svg");
        position: absolute;
        left: 43px;
      }
    }
    .item_status {
      width: 20%;
      position: relative;
      cursor: pointer;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      &::after {
        content: url("../assets/icons/arrow.svg");
        position: absolute;
        left: 55px;
      }
    }
    .item_delete {
      width: 7%;
      display: flex;
      justify-content: flex-end;
      cursor: pointer;
    }
  }

  &_list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 80vh;
    overflow-y: scroll;
  }
}
</style>
