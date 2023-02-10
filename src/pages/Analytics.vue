<template lang="pug">
.analytics 
    header.analytics_header 
        h1.analytics_title Analytics
        .analytics_wrapper 
            .analytics_search 
                input.analytics_search_input(type="text" placeholder="Search")
            base-button.analytics_button Add New
</template>

<style scoped lang="scss">
.analytics {
    width: 100%;
    margin: 0;
    padding: 28px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 20px;

    &_header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &_title {
        margin: 0;
        font-weight: 700;
        font-size: 24px;
    }

    &_wrapper {
        display: flex;
        justify-content: center;
        align-items:center;
        gap: 20px;
    }

    &_search {
        position: relative;

        &::after {
            content: url('../assets/icons/search.svg');
            position: absolute;
            right: 10px;
            top: 10px;
            cursor: pointer;
        }

        &_input {
        width: 230px;
        border: 0.4px solid transparent;
        border-radius: 6px;
        padding: 12px;
        font-weight: 400;
        font-size: 12px;
        cursor: pointer;

        &:hover {
            border: 0.4px solid var(--medium);
        }

        &:focus {
            border: 0.4px solid var(--medium);
        }
    }
    }

    &_button {
        padding: 13px 16px 13px 42px;
        position: relative;
        
        &::after {
            content: url('../assets/icons/plus.svg');
            width: 14px;
            height: 14px;
            position: absolute;
            left: 15px;
            top: 13px;
        }
    }
}
</style>