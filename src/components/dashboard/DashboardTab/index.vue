<template lang="pug">
.tab(:class="id")
  .tab_img
     img.tab_img_icon(:src="icon" alt="icon")
  .tab_description 
     h3.tab_description_amount {{ amount }}+
     h4.tab_description_title {{ title }}  
</template>

<script setup>
const props = defineProps(["id", "icon", "amount", "title"]);
</script>

<style scoped lang="scss">
.tab {
  background-color: var(--white);
  border-radius: 10px;
  box-sizing: border-box;
  padding: 28px 28px 28px 45px;
  display: flex;
  align-items: center;
  gap: 40px;
  width: 268px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease-out;

  &:hover {
      transform: scale(1.1);
    }


  @media screen and (max-width: 1430px) {
    gap: 37px;
    padding: 25px 25px 25px 40px;
    width: 230px;
  }

  @media screen and (max-width: 1275px) {
    padding: 25px 20px 25px 30px;
    width: 210px;
  }

  @media screen and (max-width: 1188px) {
    width: 190px;
  }

  @media screen and (max-width: 1111px) {
    gap: 37px;
    padding: 25px 25px 25px 40px;
    width: 263px;
  }

  @media screen and (max-width: 825px) {
    width: 210px;
    padding: 25px 20px 25px 25px;
  }

  

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
      color: var(--dark);
    }

    &_title {
      margin: 0;
      font-weight: 400;
      font-size: 14px;
      color: var(--medium);
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

  @media screen and (max-width: 1430px) {
    left: 21px;
  }

  @media screen and (max-width: 1275px) {
    width: 50px;
    height: 50px;
    left: 15px;
  }

  @media screen and (max-width: 1111px) {
    left: 25px;
  }

  @media screen and (max-width: 818px) {
    left: 11px;
  }

  
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

  @media screen and (max-width: 1430px) {
    left: 21px;
  }

  @media screen and (max-width: 1275px) {
    width: 50px;
    height: 50px;
    left: 15px;
  }

  @media screen and (max-width: 1111px) {
    left: 25px;
  }

  @media screen and (max-width: 818px) {
    left: 11px;
  }
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

  @media screen and (max-width: 1430px) {
    left: 21px;
  }

  @media screen and (max-width: 1275px) {
    width: 50px;
    height: 50px;
    left: 15px;
  }

  @media screen and (max-width: 1111px) {
    left: 25px;
  }

  @media screen and (max-width: 818px) {
    left: 11px;
  }
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

  @media screen and (max-width: 1430px) {
    left: 21px;
  }

  @media screen and (max-width: 1275px) {
    width: 50px;
    height: 50px;
    left: 15px;
  }

  @media screen and (max-width: 1111px) {
    left: 25px;
  }

  @media screen and (max-width: 818px) {
    left: 11px;
  }
}
</style>
