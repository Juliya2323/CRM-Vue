<template lang="pug">
.bg(@click="closeCalendar")
.calendar-container(@click="closeCalendar")
  VueDatePicker(v-model="date" inline auto-apply)
</template>

<script setup>
import { ref } from "vue";
import { useDashboardStore } from "../../../store/dashboard.js";

const dashboard = useDashboardStore();
const date = ref(new Date());

function closeCalendar() {
  dashboard.calendarIsOpen = false;
}
</script>

<style scoped lang="scss">
.close {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;

  img {
    width: 30px;
    height: 30px;
  }
}

.bg {
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 5;
  background-color: rgba(217, 217, 217, 0.4);
  top: 0;
  right: 0;

  @media screen and (max-width: 1300px) {
    height: 100%;
  }
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

td {
  padding: 0;
}
.calendar-container {
  position: absolute;
  top: 81px;
  right: 30px;
  z-index: 10;
  font-family: "Nunito";
}

.calendar-container header {
  border-radius: 1em 1em 0 0;
  background: var(--purple);
  color: #fff;
  padding: 3em 2em;
}

.day {
  font-size: 8em;
  font-weight: 900;
  line-height: 1em;
  text-align: center;
  font-size: 90px;
  cursor: pointer;
}

.month {
  font-size: 4em;
  line-height: 1em;
  text-transform: lowercase;
  text-align: center;
  font-size: 45px;
}

.calendar {
  background: #fff;
  border-radius: 0 0 1em 1em;
  -webkit-box-shadow: 0 2px 1px rgba(0, 0, 0, 0.2), 0 3px 1px #fff;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.2), 0 3px 1px #fff;
  color: #555;
  display: inline-block;
  padding: 2em;
  font-size: 14px;
}

.calendar thead {
  color: var(--purple);
  font-weight: 700;
  text-transform: uppercase;
}

.calendar td {
  padding: 5px 5px;
  text-align: center;
}

.calendar tbody td:hover {
  background: #cacaca;
  color: #fff;
}

.current-day {
  color: var(--purple);
}

.prev-month,
.next-month {
  color: #cacaca;
}

.ring-left,
.ring-right {
  position: absolute;
  top: 205px;
}

.ring-left {
  left: 2em;
}
.ring-right {
  right: 2em;
}

.ring-left:before,
.ring-left:after,
.ring-right:before,
.ring-right:after {
  background: #fff;
  border-radius: 4px;
  -webkit-box-shadow: 0 3px 1px rgba(0, 0, 0, 0.3),
    0 -1px 1px rgba(0, 0, 0, 0.2);
  box-shadow: 0 3px 1px rgba(0, 0, 0, 0.3), 0 -1px 1px rgba(0, 0, 0, 0.2);
  content: "";
  display: inline-block;
  margin: 8px;
  height: 32px;
  width: 8px;
}
</style>
