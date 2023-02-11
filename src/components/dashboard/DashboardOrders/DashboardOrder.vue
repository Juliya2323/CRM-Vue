<template lang="pug">
.order 
    .order_number {{ no }}
    .order_product 
        img.order_product_img(:src="img")
        .order_product_name {{ name }}
    .order_price {{ price }}$
    .order_total {{ total }}
    .order_amount ${{ amount }}
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
    background-color: #FAFAFB;
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
      content: '';
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
