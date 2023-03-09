<template lang="pug">
td.order_number {{ no }}
td.order_product 
    img.order_product_img(:src="img" alt="order_img")
    span.order_product_name {{ name }}
td.order_price {{ price }}$
td.order_total {{ total }}
td.order_amount ${{ amount }}
</template>

<script setup>
const props = defineProps(["no", "img", "name", "price", "total", "amount"]);
</script>

<style scoped lang="scss">
.order {
  width: 100%;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  cursor: pointer;

  &:hover {
    background-color: #fafafb;
  }

  &_number {
    width: 19%;
    text-align: left;

    @media screen and (max-width: 685px) {
      display: none;
    }
  }

  &_product {
    width: 29%;
    display: flex;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;

    @media screen and (max-width: 1350px) {
      width: 35%;
    }

    @media screen and (max-width: 500px) {
      width: 60%;
    }

    &_img {
      width: 30px;
      height: 30px;
    }
  }

  &_price {
    width: 16%;
    text-align: left;
    justify-content: center;

    @media screen and (max-width: 1350px) {
      width: 11%;
    }

    @media screen and (max-width: 500px) {
      display: none;
      width: 0;
    }
  }

  &_total {
    width: 21%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    color: #26c0e2;
    position: relative;

    @media screen and (max-width: 500px) {
      display: none;
      width: 0;
    }

    &::after {
      content: "";
      position: absolute;
      width: 61px;
      height: 38px;
      border-radius: 8px;
      background-color: rgba(38, 192, 226, 20%);
      vertical-align: middle;
      margin: 0 auto;
    }
  }

  &_amount {
    width: 15%;
    text-align: right;

    @media screen and (max-width: 500px) {
      width: 30%;
    }
  }
}
</style>
