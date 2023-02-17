<template lang="pug">
.analytics 
    header.analytics_header 
        h1.analytics_title Analytics
        .analytics_wrapper 
            .analytics_search 
                input.analytics_search_input(type="text" placeholder="Search")
            base-button.analytics_button Add New
    form        
      table.analytics_table 
          tr.analytics_table_items
              th.item_checkbox
              th.analytics_table_filters
                analytics-filter(:title="filter" v-for="(filter, index) in FILTERS" :key="index" @active-filter="analytics.setFiltration({mode: $event, name: filter})")
              th.item_delete(@click="analytics.deleteItem(analytics.selectedItem)")
                  img.item_delete_img(src="../assets/icons/delete.svg")
          .analytics_list 
              tr.analytics_list_item(v-for="worker in analytics.filteredCoworkers" :key="worker.id")
                  analytics-item(:id="worker.id" :img="worker.img" :name="worker.name" :email="worker.email" :date="worker.date" :status="worker.status")
</template>

<script setup>
import { ref } from 'vue';
import { useAnalyticsStore } from "../store/analytics.js";
import AnalyticsItem from "../components/analytics/AnalyticsItem/index.vue";
import AnalyticsFilter from '../components/analytics/AnalyticsItem/AnalyticsFilter.vue';

const analytics = useAnalyticsStore();
const FILTERS = ['Idd', 'Name', 'Date', 'Satus']

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
      padding: 10px 25px;
    }

    .item_checkbox {
      width: 6%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    &_filters {
      width: 87%;
      display: flex;
      justify-content: space-between;
      cursor: pointer;
    }
    .item_id {
      width: 10%;
      cursor: pointer;
    }
    .item_name {
      width: 18%;
      
    }
    .item_email {
      width: 24%;
      
    }
    .item_date {
      width: 15%;
      
    }
    .item_status {
      width: 20%;
      
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
  }
}

</style>
