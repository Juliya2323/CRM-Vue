<template lang="pug">
.analytics 
    header.analytics_header 
        h1.analytics_title Analytics
        .analytics_wrapper 
            analytics-search(@search="updateSearch" :search-term="enteredSearchTerm")
            base-button.analytics_button(@click='toAdd') Add New
    form        
      table.analytics_table 
          tr.analytics_table_items
              th.item_checkbox
              th.analytics_table_filters
                analytics-filter(
                  :title="filter" 
                  v-for="(filter, index) in FILTERS" 
                  :key="index" 
                  @active-filter="analytics.setFiltration({mode: $event, name: filter})")
              th.item_delete(@click="analytics.deleteItem(analytics.selectedItem)")
                  img.item_delete_img(src="../assets/icons/delete.svg")
          .analytics_list 
              tr.analytics_list_item(v-for="worker in availableWorkers" :key="worker.id")
                  analytics-item(:id="worker.id" :img="worker.img" :name="worker.name" :email="worker.email" :date="worker.date" :status="worker.status")
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useAnalyticsStore } from "../store/analytics.js";
import AnalyticsItem from "../components/analytics/AnalyticsItem/index.vue";
import AnalyticsFilter from "../components/analytics/AnalyticsFilter.vue";
import AnalyticsSearch from "../components/analytics/AnalyticsSearch.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const analytics = useAnalyticsStore();
const FILTERS = ["Id", "Name", "Email", "Date", "Status"];
const enteredSearchTerm = ref("");
const activeSearchTerm = ref("");

const availableWorkers = computed(function () {
  let coworkers = [];
  if (activeSearchTerm.value) {
    coworkers = analytics.filteredCoworkers.filter((worker) =>
      worker.name.includes(activeSearchTerm.value)
    );
  } else if (analytics.filteredCoworkers) {
    coworkers = analytics.filteredCoworkers;
  }
  return coworkers;
});

watch(enteredSearchTerm, function (newValue) {
  setTimeout(() => {
    if (newValue === enteredSearchTerm.value) {
      activeSearchTerm.value = newValue;
    }
  }, 300);
});

function updateSearch(val) {
  enteredSearchTerm.value = val;
}

function toAdd() {
  router.push("/add");
}
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
      width: 100%;
      display: flex;
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
