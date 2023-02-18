<template>
<form @submit.prevent="submitForm">
    <div class="form-control">
        <label for="id">ID</label>
        <input type="text" id="id" v-model="enteredId">
    </div>
    <div class="form-control">
        <label for="img">Img</label>
        <input type="text" id="img" v-model="enteredImg">
    </div>
    <div class="form-control">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="enteredName">
    </div>
    <div class="form-control">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="enteredEmail">
    </div>
    <div class="form-control">
        <label for="date">Date</label>
        <input type="date" id="date" v-model="enteredDate">
    </div>
    <div class="form-control">
      <label for="status">Status?</label>
      <select id="status" name="status" v-model="enteredStatus">
        <option value="Complete">Complete</option>
        <option value="Pending">Pending</option>
        <option value="Cancel">Cancel</option>
      </select>
    </div>
    <button type="submit">Add a coworker</button>
</form>
</template>

<script setup>
import {ref} from 'vue';
import { useAnalyticsStore } from "../../store/analytics.js";
import { useRouter } from "vue-router";

const router = useRouter();
const analytics = useAnalyticsStore();

const enteredId = ref('');
const enteredImg = ref('');
const enteredName = ref('');
const enteredEmail = ref('');
const enteredDate = ref('');
const enteredStatus = ref('');
const inputIsInvalid = ref(true);

function submitForm() {
     

      if (
        enteredId.value.trim() === "" ||
        enteredImg.value.trim() === "" ||
        enteredName.value.trim() === "" ||
        enteredEmail.value.trim() === "" || !enteredEmail.value.includes('@') ||
        enteredDate.value.trim() === "" ||
        enteredStatus.value.trim() === ""
      ) {
        inputIsInvalid.value = true;
        return;
      }

      analytics.addCoworker(enteredId.value, enteredImg.value, enteredName.value, enteredEmail.value, enteredDate.value, enteredStatus.value);
      
      router.push({ path: 'analytics' });
}

function confirmError() {
      this.main.inputIsInvalid = false;
} 
  
</script>