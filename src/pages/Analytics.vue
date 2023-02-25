<template lang="pug">
.analytics 
    header.analytics_header 
        h1.analytics_title Analytics
        .analytics_wrapper 
            analytics-search(@search="updateSearch" :search-term="enteredSearchTerm")
            base-button.analytics_button(@click='toAdd') Add New
    .analytics_table_wrapper
      table.analytics_table 
        thead
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
        tbody.analytics_list 
              tr.analytics_list_item(v-for="worker in availableWorkers" :key="worker.id" @click="selectItem(worker.id)")
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

function selectItem(id) {
  analytics.coworkerIsSelected = !analytics.coworkerIsSelected;
  analytics.selectedItem = id;
  console.log(analytics.selectedItem);
}

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

  

  @media screen and (max-width: 1200px) {
      height: 100vh;
    }

    @media screen and (max-width: 435px) {
      padding: 20px;
        }

  &_table_wrapper {
    width: 100%;
  }

  &_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    

    @media screen and (max-width: 757px) {
      flex-direction: column;
      gap: 20px;
    }
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

    @media screen and (max-width: 380px) {
    gap: 10px;
    }
  }

  &_button {
    padding: 13px 16px 13px 42px;
    position: relative;

    @media screen and (max-width: 495px) {
      padding: 13px 16px;
        }

        @media screen and (max-width: 380px) {
          padding: 13px 12px;
    }

    &::after {
      content: url("../assets/icons/plus.svg");
      width: 14px;
      height: 14px;
      position: absolute;
      left: 15px;
      top: 13px;

      @media screen and (max-width: 495px) {
        display: none;
        }
    }
  }

  &_table {
    width: 100%;
    font-weight: 400;
    font-size: 12px;
    box-sizing: border-box;

    thead {
      @media screen and (max-width: 950px) {
        display: none;
      }
    }

    &_items {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 25px;

      @media screen and (max-width: 1160px) {
        padding: 10px 18px;
      }
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

    &_item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 11px 25px;
      background-color: var(--white);
      border-radius: 8px;
      border: 2px solid transparent;
      font-weight: 600;
      font-size: 14px;
      box-sizing: border-box;
      transition: all 0.3s ease-out;
      color: var(--dark);
      cursor: pointer;

      @media screen and (max-width: 1160px) {
        padding: 11px 18px;
      }

      @media screen and (max-width: 950px) {
        flex-direction: column;
        align-items: center;
        gap: 15px;
      }

      @media screen and (max-width: 420px) {
        padding: 11px 15px;

      }

      @media screen and (max-width: 380px) {
        width: 220px;
      }

      &:hover {
        border-bottom: 2px solid rgb(103, 103, 103, 15%);
      }
    }
  }
}
</style>
