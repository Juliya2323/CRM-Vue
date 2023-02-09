<template lang="pug">
.tab(:class="id")
  .tab_img
     img.tab_img_icon(:src="icon")
  .tab_description 
     h3.tab_description_amount {{ amount }}+
     h4.tab_description_title {{ title }}  
</template>

<script>
export default {
  props: ["id", "icon", "amount", "title"],
};
</script>

<style scoped lang="scss">
.tab {
  background-color: var(--white);
  border-radius: 10px;
  box-sizing: border-box;
  padding: 28px;
  padding-left: 45px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  gap: 40px;
  width: 268px;
  position: relative;
  cursor: pointer;

  &_img {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &_description {
    display: flex;
    flex-direction: column;
    gap: 7px;
    align-items: flex-start;
    justify-content: center;

    &_amount {
      margin: 0;
      font-weight: 800;
      font-size: 22px;
      color:var(--dark);
    }

    &_title {
      margin: 0;
      font-weight: 400;
      font-size: 14px;
      color:var(--medium);
    }
  }
}

.tab.first::after {
  content: "";
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background-color: rgba(91, 147, 255, 11%);
  display: block;
  left: 25px;
}

.tab.second::after {
  content: "";
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background-color: rgba(255, 195, 39, 11%);
  display: block;
  left: 25px;
}

.tab.third::after {
  content: "";
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background-color: rgba(255, 143, 107, 11%);
  display: block;
  left: 25px;
}

.tab.fourth::after {
  content: "";
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background-color: rgba(96, 91, 255, 11%);
  display: block;
  left: 25px;
}
</style>
