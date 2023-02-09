<template lang="pug">
.card
    header.card_header(v-if="$slots.header")
        h2.card_header_title
            slot(name="header")
        img(class="card_header_img" src="../../assets/icons/more.svg" alt="more") 
    slot
</template>

<style scoped lang="scss">
.card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 25px;
    gap: 24px;
    background-color: var(--white);
    border-radius: 10px;
    width: 100%;
    box-sizing: border-box;
    height: 100%;


    &_header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        

        &_title {
            margin: 0;
        font-weight: 700;
        font-size: 18px;
        }

        &_img {
            width: 18px;
            height: 18px;
        }
    }


            
}
</style>
