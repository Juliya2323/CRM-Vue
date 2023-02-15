<template lang="pug">
.order 
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
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 12px;
  cursor: pointer;

  &:hover {
    background-color: #fafafb;
  }

  &_number {
    width: 19%;
    text-align: left;
  }

  &_product {
    width: 29%;
    display: flex;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;

    &_img {
      width: 30px;
      height: 30px;
    }
  }

  &_price {
    width: 16%;
    text-align: left;
    justify-content: center;
  }

  &_total {
    width: 21%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    color: #26c0e2;
    position: relative;

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
  }
}
</style>
