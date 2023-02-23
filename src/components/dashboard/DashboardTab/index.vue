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
  padding: 28px;
  padding-left: 45px;
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

  @media screen and (max-width: 1400px) {
    padding: 23px;
    padding-left: 30px;
    gap: 35px;
    width: 220px;
  }

  @media screen and (max-width: 1190px) {
    padding: 15px;
    padding-left: 10px;
    gap: 25px;
    width: 180px;
    height: 105px;
  }

  @media screen and (max-width: 1023px) {
    width: 220px;
  }

  @media screen and (max-width: 734px) {
    width: 300px;
  }

  @media screen and (max-width: 460px) {
    width: 260px;
  }

  @media screen and (max-width: 400px) {
    width: 220px;
  }

  &_img {
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1400px) {
      padding-left: 16px;
    }

    @media screen and (max-width: 1400px) {
      padding-left: 14px;
    }
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

  @media screen and (max-width: 1190px) {
    width: 40px;
    height: 40px;
    left: 14px;
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

  @media screen and (max-width: 1190px) {
    width: 40px;
    height: 40px;
    left: 14px;
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

  @media screen and (max-width: 1190px) {
    width: 40px;
    height: 40px;
    left: 14px;
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

  @media screen and (max-width: 1190px) {
    width: 40px;
    height: 40px;
    left: 14px;
  }
}
</style>
