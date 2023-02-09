<template lang="pug">
base-card
    template(v-slot:header)
        span Analytics
    template(v-slot:default)
        img.diagram_img
        ul.diagram_list 
            li.diagram_list_item_sale Sale
            li.diagram_list_item_distribute Distribute
            li.diagram_list_item_return Return
</template>

<style scoped lang="scss">
    .diagram {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 25px;
        gap: 38px;
        background-color: var(--white);
        border-radius: 10px;
        width: 100%;
        box-sizing: border-box;
        height: 100%;

        &_list {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            gap: 50px;
            list-style-type: none;
            font-weight: 600;
            font-size: 16px;

            &_item_sale,
            &_item_distribute,
            &_item_return {
                position: relative;
            }

            &_item_sale::before {
                content: "";
                position: absolute;
                width:15px;
                height: 15px;
                border-radius: 5px;
                background-color: var(--blue);
                left: -22px;
                top: 3px;
            }

            &_item_distribute::before {
                content: "";
                position: absolute;
                width:15px;
                height: 15px;
                border-radius: 5px;
                background-color: var(--yellow);
                left: -22px;
                top: 3px;
            }

            &_item_return::before {
                content: "";
                position: absolute;
                width:15px;
                height: 15px;
                border-radius: 5px;
                background-color: var(--orange);
                left: -22px;
                top: 3px;
            }
        }
    }
</style>