<template lang="pug">
.coworker
    td.coworker_checkbox(@click="selectItem(id)")
        input.coworker_checkbox_input(type="checkbox" :id="id" :checked="isSelected")
    td.coworker_id {{ id }}
    td.coworker_person 
        img.person_photo(:src="img" alt="person_photo")
        p.person_text {{ name }}
    td.coworker_email 
        a.coworker_email_link(:href="'mailto:' + email") {{ email }}
    td.coworker_date {{ date }}
    td.coworker_state 
        .status_mode(:class="{complete: status==='Complete', pending: status==='Pending', cancel: status==='Cancel'}") {{ status }}
    td.coworker_status(@click="switchStatus" :class="{active: statusIsSelected}")
            svg(width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg")
                path(d="M14.3532 9.95302C14.1351 10.1644 14.0349 10.47 14.0846 10.7698L14.8332 14.9127C14.8963 15.2638 14.7481 15.6192 14.4543 15.8221C14.1663 16.0326 13.7831 16.0579 13.4691 15.8895L9.73962 13.9443C9.60994 13.8753 9.46595 13.8382 9.31859 13.834H9.0904C9.01125 13.8458 8.93378 13.8711 8.86305 13.9098L5.13277 15.8642C4.94836 15.9568 4.73953 15.9897 4.53491 15.9568C4.03642 15.8625 3.70381 15.3876 3.78549 14.8866L4.53491 10.7437C4.58459 10.4414 4.48439 10.1341 4.2663 9.91934L1.22566 6.97217C0.971361 6.72545 0.882946 6.35494 0.999149 6.02065C1.11198 5.6872 1.39996 5.44385 1.74773 5.38911L5.93271 4.782C6.25101 4.74916 6.53057 4.55549 6.67372 4.26919L8.51781 0.488388C8.56159 0.404184 8.61801 0.326715 8.68622 0.261035L8.762 0.202092C8.80158 0.158305 8.84705 0.122097 8.89757 0.0926254L8.98935 0.0589434L9.1325 0H9.487C9.80361 0.0328399 10.0823 0.222301 10.228 0.505229L12.0965 4.26919C12.2312 4.54454 12.4931 4.73568 12.7954 4.782L16.9804 5.38911C17.3341 5.43964 17.6296 5.68383 17.7467 6.02065C17.857 6.35831 17.7618 6.72881 17.5025 6.97217L14.3532 9.95302Z" fill="none" stroke="#FFD66B")
</template>

<script setup>
import { ref, computed } from "vue";
import { useAnalyticsStore } from "../../../store/analytics.js";

const analytics = useAnalyticsStore();
const props = defineProps(["id", "img", "name", "email", "date", "status"]);
const isSelected = ref(false);
//const selectedItem = ref('');
const statusIsSelected = ref(false);
 
function selectItem(id) {
    isSelected.value = !isSelected.value;
    analytics.selectedItem = id;
}

function switchStatus() {
    statusIsSelected.value = !statusIsSelected.value;
}

</script>

<style scoped lang="scss">
.coworker {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 11px 25px;
    background-color: var(--white);
    border-radius: 8px;
    border: 2px solid transparent;
    font-weight: 600;
    font-size: 14px;
    box-sizing: border-box;
    transition: all 0.3s ease-out;
    color: var(--dark);

    &:hover {
        border-bottom: 2px solid rgb(103, 103, 103, 15%);
    }

    &_checkbox {
        width: 5%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        transform: all 0.3s ease-out;

        &_input {
            cursor: pointer;
        }

        &:hover {
            input {
                background-color: red;
            }
        }
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
        cursor: pointer;

        &_link {
            text-decoration: none;
            color: var(--dark);
        }

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

    &_state {
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

    &_status {
        width: 7%;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
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

    .active {
        path {
            fill: #FFD66B;
        }
    }
}
</style>