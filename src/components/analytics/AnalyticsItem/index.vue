<template lang="pug">
.coworker
    td.coworker_checkbox
        input(type="checkbox")
    td.coworker_id {{ id }}
    td.coworker_person 
        img.person_photo(:src="img" alt="person_photo")
        p.person_text {{ name }}
    td.coworker_email 
        a {{ email }}
    td.coworker_date {{ date }}
    td.coworker_status 
        .status_mode(:class="{complete: status==='Complete', pending: status==='Pending', cancel: status==='Cancel'}") {{ status }}
    td.coworker_edit
        img.status_img(src="../../../assets/icons/star.svg" alt="rating")
        img.more_img(src="../../../assets/icons/more_purple.svg" alt="edit")
</template>

<script setup>

const props = defineProps(["id", "img", "name", "email", "date", "status"]);

</script>

<style scoped lang="scss">
.coworker {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 13px 25px;
    background-color: var(--white);
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    box-sizing: border-box;

    &_checkbox {
        width: 6%;
    }
        
    &_id {
        width: 10%;
    }
    &_person {
        width: 18%;
        display: flex;
        justify-content: flex-start;
        align-items:center;
        gap: 14px;
        box-sizing: border-box;
    }

    &_email {
        width: 24%;
        padding-left: 26px;
        box-sizing: border-box;
        position: relative;

        &::before {
            content: url('../../../assets/icons/email.svg');
            position: absolute;
            left: 0;
            top: 3.5px;
        }
    }

    &_date {
        width: 15%;
        padding-left: 23px;
        box-sizing: border-box;
        position: relative;

        &::before {
            content: url('../../../assets/icons/date.svg');
            position: absolute;
            left: 0;
            top: 3.5px;
        }
    }

    &_status {
        width: 20%;
        box-sizing: border-box;
        .status_mode {
            border-radius: 22.5px;
            padding: 13px 47px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    &_edit {
        width: 7%;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;

    }

    .complete {
        background-color: rgba(58, 151, 76, 20%);
        color: #3A974C;
    }

    .pending {
        background-color: rgba(242, 147, 57, 20%);
        color: #F29339;
    } 
     
    .cancel {
        background-color: rgba(209, 26, 42, 20%);
        color: #D11A2A;
    }
}
</style>