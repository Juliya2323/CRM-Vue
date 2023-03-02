<template lang="pug">
.bg(@click="closeOrder()")
.order_details
    .details_header {{ dashboard.checkedOrder.name }}
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
  dashboard.checkedOrder = "";
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

  @media screen and (max-width: 1200px) {
    height: 100%;
  }
}
.order_details {
  position: absolute;
  top: 120px;
  left: 32%;
  z-index: 50;
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

  @media screen and (max-width: 1200px) {
    width: 500px;
    height: 450px;
    top: 252px;
  }

  @media screen and (max-width: 1124px) {
    top: 270px;
  }

  @media screen and (max-width: 1111px) {
    top: 557px;
  }

  @media screen and (max-width: 975px) {
    width: 400px;
  }

  @media screen and (max-width: 834px) {
    top: 655px;
  }

  @media screen and (max-width: 762px) {
    width: 330px;
  }

  @media screen and (max-width: 762px) {
    left: 24%;
  }

  @media screen and (max-width: 762px) {
    left: 22%;
  }

  @media screen and (max-width: 565px) {
    left: 18%;
  }

  @media screen and (max-width: 520px) {
    width: 300px;
    padding: 15px;
    gap: 10px;
    left: 13%;
  }

  @media screen and (max-width: 405px) {
    left: 20px;
  }

  @media screen and (max-width: 365px) {
    left: 10px;
  }

  .details_header {
    width: 100%;
    margin: 0;
    font-size: 24px;
    font-weight: 700;
    text-align: left;
  }

  .details_card {
    width: 100%;
    height: 440px;
    padding: 10px;
    display: flex;
    gap: 40px;
    align-items: center;

    @media screen and (max-width: 565px) {
      gap: 0;
      width: 300px;
      height: 400px;
      padding: 5px;
    }

    @media screen and (max-width: 520px) {
      width: 250px;
    }

    &_img {
      width: 300px;
      height: 300px;

      @media screen and (max-width: 975px) {
        width: 200px;
        height: 200px;
      }

      @media screen and (max-width: 762px) {
        width: 150px;
        height: 150px;
      }

      @media screen and (max-width: 520px) {
      }
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

        @media screen and (max-width: 520px) {
          gap: 5px;
        }
      }
    }

    &_text {
      margin: 0;
      font-size: 13px;
    }

    &_cost {
      font-weight: 700;
      margin: 0;
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
