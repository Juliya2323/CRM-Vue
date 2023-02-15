<template lang="pug">
.bg
.calendar-container
  header
    .close(@click="closeCalendar")
      img(src="../../../assets/icons/close.svg" alt="close")
    .day {{ dashboard.day }}
    .month February
  table.calendar
    thead
      tr
        td Mon
        td Tue
        td Wed
        td Thu
        td Fri
        td Sat
        td Sun
    tbody
      tr
        td.prev-month 29
        td.prev-month 30
        td.prev-month 31
        td 1
        td 2
        td 3
        td 4
      tr
        td 5 
        td 6 
        td 7  
        td 8 
        td 9 
        td 10 
        td 11 
      tr
        td 12
        td 13
        td 14
        td 15
        td 16
        td 17
        td.current-day 18
      tr
        <td>19</td>
        <td>20</td>
        <td>21</td>
        <td>22</td>
        <td>23</td>
        <td>24</td>
        <td>25</td>
      tr
        td 26
        td 27
        td 28
        td 29
        td 30
        td 31
        td.next-month 1
  .ring-left
  .ring-right
</template>

<script setup>
import { useDashboardStore } from "../../../store/dashboard.js";

const dashboard = useDashboardStore();

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
  top: 40px;
  right: 40px;
  z-index: 10;
  width: 330px;
  height: 290px;
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
