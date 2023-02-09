<template lang="pug">
.product 
    img.product_img(:src="img")
    .product_info 
        h2.product_title {{ name }}
        img.product_rating(:src="rating", alt="")
        h3.product_cost ${{ cost }}
</template>

<script>
export default {
    props: ["img", "name", "rating", "cost"],
}
</script>

<style scoped lang="scss">
.product {
    display: flex;
    justify-content: flex-start;
    gap: 20px;
    padding: 22px 0;
    border-bottom: 1.5px solid #FAFAFB;
    cursor: pointer;

    &:hover {
        background-color: #FAFAFB;
    }

    &_img {
        width: 96px;
        height: 96px;
        border-radius: 10px;
    }

    &_info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 7px;
    }

    &_title {
        margin:0;
        font-weight: 400;
        font-size: 15px;
    }

    &_cost {
        margin: 0;
        font-weight: 700;
        font-size: 15px;
    }
}
</style>