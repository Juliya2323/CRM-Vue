<template lang="pug">
.bg
.order_details
    h2.details_header {{ dashboard.checkedOrder.name }}
    .details_card 
      img.details_card_img(:src="dashboard.checkedOrder.img")
      .details_card_description 
        section.description_section 
          span.details_card_title Details:
          ul.details_card_list
            li.details_card_list_item(v-for="detail in dashboard.checkedOrder.details") {{ detail }}
        section.description_section 
          span.details_card_title Desinged:
          p.details_card_text {{ dashboard.checkedOrder.designed }}
        p.details_card_cost {{ dashboard.checkedOrder.price }}$
    base-button.details_button(@click="closeOrder()") Close
</template>

<script setup>
import { useDashboardStore } from "../../../store/dashboard.js";

const dashboard = useDashboardStore();

function closeOrder() {
  dashboard.orderIsChecked = false;
  dashboard.checkedOrder = '';
}


</script>

<style scoped lang="scss">

.bg {
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 5;
  background-color: rgba(217, 217, 217, 0.4);
  top: 0;
  right: 0;
}
.order_details {
  position: absolute;
  top: 120px;
  left: 32%;
  z-index: 10;
  height: 290px;
  font-family: "Nunito";
  background-color: var(--white);
  width: 600px;
  height: 500px;
  border-radius: 15px;
  padding: 35px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: space-between;
  align-items: center;

  .details_header {
    width: 100%;
    margin: 0;
    text-align: left;
  }

  .details_card {
    width: 100%;
    height: 440px;
    padding: 10px;
    display: flex;
    gap: 40px;
    align-items: center;

    &_img {
      width: 300px;
      height: 300px;
    }

    &_list {
      list-style-type: none;
      margin: 0;
      padding: 0;

      &_item {
        font-size: 13px;
      }
    }

    &_description {
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      .description_section {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }
    }

    &_text {
      margin: 0;
      font-size: 13px;
    }

    &_cost {
      font-weight: 700;
    }

    &_title {
      font-weight: 700;
    }
  }

  .details_button {
    width: 100%;
  }
}
</style>