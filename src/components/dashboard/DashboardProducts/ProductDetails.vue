<template lang="pug">
.bg(@click="closeProduct()")
.product_details
    h2.details_header {{ dashboard.checkedProduct.name }}
    .details_card 
        img.details_card_img(:src="dashboard.checkedProduct.img")
        .details_card_description 
        section.description_section 
            span.details_card_title Details:
            ul.details_card_list
                li.details_card_list_item(v-for="detail in dashboard.checkedProduct.details") {{ detail }}
    base-button.details_button(@click="closeProduct()") Close
</template>

<script setup>
import { useDashboardStore } from "../../../store/dashboard.js";

const dashboard = useDashboardStore();

function closeProduct() {
  dashboard.productIsChecked = false;
  dashboard.checkedProduct = "";
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
.product_details {
  position: absolute;
  top: 120px;
  left: 32%;
  z-index: 10;
  font-family: "Nunito";
  background-color: var(--white);
  width: 500px;
  height: 600px;
  border-radius: 15px;
  padding: 35px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1200px) {
    top: 150px;
  }

  @media screen and (max-width: 1111px) {
    top: 613px;
  }

  @media screen and (max-width: 1000px) {
    padding: 20px;
    left: 25%;
  }

  @media screen and (max-width: 1000px) {
    top: 700px;
  }

  @media screen and (max-width: 800px) {
    left: 20%;
  }

  @media screen and (max-width: 742px) {
    left: 16%;
    width: 400px;
    height: 600px;
  }

  @media screen and (max-width: 690px) {
    left: 15%;
    width: 350px;
  }

  @media screen and (max-width: 550px) {
    left: 10%;
    top: 790px;
  }

  @media screen and (max-width: 500px) {
    width: 300px;
    height: 590px;
  }

  @media screen and (max-width: 400px) {
    left: 7%;
    height: 590px;
    width: 260px;
  }

  @media screen and (max-width: 400px) {
  }

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
    flex-direction: column;
    gap: 13px;
    align-items: center;

    &_img {
      width: 300px;
      height: 300px;
      border-radius: 15px;

      @media screen and (max-width: 500px) {
        width: 250px;
        height: 250px;
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

    .description_section {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  }

  .details_button {
    width: 100%;
  }
}
</style>
