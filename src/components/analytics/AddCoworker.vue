<template lang="pug">
base-dialog.add_dialog(v-if="inputIsInvalid")
      template(v-slot:default)
        p Unfortunately, at least one input value is invalid.
        p Please check all inputs and make sure you enter at least a few characters into each input field.
      template(v-slot:actions)
        base-button(@click="confirmError") Okay
form.add_form(@submit.prevent="submitForm")
    img.add_form_img(:src='logo')
    .form-control
        label(for="id") ID
        input#id(type="text" v-model="enteredId")
    .form-control
        label(for="img") Img
        input#img(type="text" v-model="enteredImg")
    .form-control
        label(for="name") Name
        input#name(type="text" v-model="enteredName")
    .form-control
        label(for="email") Email
        input#email(type="email" v-model="enteredEmail")
    .form-control
        label(for="date") Date
        input#date(type="date" v-model="enteredDate")
    .form-control
        label(for="status") Status?
        select#tsatus(name="status" v-model="enteredStatus")
          option(value="Complete") Complete
          option(value="Pending") Pending
          option(value="Cancel") Cancel
    base-button(type="submit") Add a coworker
</template>

<script setup>
import { ref } from "vue";
import { useAnalyticsStore } from "../../store/analytics.js";
import { useRouter } from "vue-router";
import logoImg from '../../assets/icons/logo.svg';

const logo = ref(logoImg);
const router = useRouter();
const analytics = useAnalyticsStore();

const enteredId = ref("");
const enteredImg = ref("");
const enteredName = ref("");
const enteredEmail = ref("");
const enteredDate = ref("");
const enteredStatus = ref("");
const inputIsInvalid = ref(false);

function submitForm() {
  if (
    enteredId.value.trim() === "" ||
    enteredImg.value.trim() === "" ||
    enteredName.value.trim() === "" ||
    enteredEmail.value.trim() === "" ||
    !enteredEmail.value.includes("@") ||
    enteredDate.value.trim() === "" ||
    enteredStatus.value.trim() === ""
  ) {
    inputIsInvalid.value = true;
    return;
  }

  analytics.addCoworker(
    enteredId.value,
    enteredImg.value,
    enteredName.value,
    enteredEmail.value,
    enteredDate.value,
    enteredStatus.value
  );

  router.push({ path: "analytics" });
}

function confirmError() {
  this.main.inputIsInvalid = false;
}
</script>

<style lang="scss">
.add_form {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 9% 27%;
  padding: 40px 30px;
  background-color: #fff;
  justify-content: center;
  align-items: space-between;
  border-radius: 15px;

  &_img {
    width: 60px;
    height: 60px;
    margin: 0 auto;
    padding-bottom: 15px;
  }

  .form-control {
    display: flex;
    width: 350px;
    justify-content: left;
    gap: 15px;
    align-items: center;
  }

  input, select {
    padding: 11px;
    background-color: #FAFAFB;
    border: 1px solid transparent;
    border-radius: 5px;
    width: 100%;
  }
}

.add_dialog {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 20;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}
</style>
