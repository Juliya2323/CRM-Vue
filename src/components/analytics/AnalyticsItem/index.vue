<template lang="pug">
.coworker
    .coworker_checkbox
        input(type="checkbox")
    .coworker_id {{ id }}
    .coworker_person 
        img.person_photo(:src="img")
        p.person_text {{ name }}
    .coworker_email {{ email }}
    .coworker_date {{ date }}
    .coworker_status 
        .status_mode(:class="{complete: status==='Complete', pending: status==='Pending', cancel: status==='Cancel'}") {{ status }}
    .coworker_edit
        img.status_img(src="../../../assets/icons/star.svg")
        img.more_img(src="../../../assets/icons/more_purple.svg")
</template>

<script>
export default {
    props: ["id", "img", "name", "email", "date", "status"]
}
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
        width: 162px;
    }

    .pending {
        background-color: rgba(242, 147, 57, 20%);
        color: #F29339;
        width: 162px;
    } 
     
    .cancel {
        background-color: rgba(209, 26, 42, 20%);
        color: #D11A2A;
        width: 162px;
    }
}
</style>