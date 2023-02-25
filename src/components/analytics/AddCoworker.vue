<template lang="pug">
.add_dialog(v-if="inputIsInvalid")
  p Unfortunately, at least one input value is invalid.
  p Please check all inputs and make sure you enter at least a few characters into each input field.
  base-button(@click="confirmError") Okay
form.add_form(@submit.prevent="submitForm")
  .card
    img(:src='logo')
    .inputBox
      input(type="text" required="required" v-model="enteredId")
      span.user Id 
    .inputBox
      input(type="text" required="required" v-model="enteredImg")
      span.user ImgLink
    .inputBox
      input(type="text" required="required" v-model="enteredName")
      span.user Name
    .inputBox
      input(type="email" required="required" v-model="enteredEmail")
      span Email
    button.enter(type="submit") Add   
</template>

<script setup>
import { ref } from "vue";
import { useAnalyticsStore } from "../../store/analytics.js";
import { useRouter } from "vue-router";
import logoImg from "../../assets/icons/logo.svg";

const logo = ref(logoImg);
const router = useRouter();
const analytics = useAnalyticsStore();

const enteredId = ref("");
const enteredImg = ref("");
const enteredName = ref("");
const enteredEmail = ref("");
const inputIsInvalid = ref(false);

function submitForm() {
  console.log(inputIsInvalid.value);
  if (
    enteredId.value.trim() === "" ||
    enteredImg.value.trim() === "" ||
    enteredName.value.trim() === "" ||
    enteredEmail.value.trim() === "" ||
    !enteredEmail.value.includes("@")
  ) {
    inputIsInvalid.value = true;
    return;
  }

  analytics.addCoworker(
    enteredId.value,
    enteredImg.value,
    enteredName.value,
    enteredEmail.value
  );

  router.push({ path: "analytics" });
}

function confirmError() {
  inputIsInvalid.value = false;
}
</script>

<style lang="scss">
.add_dialog {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(13, 11, 11, 0.75);
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 30px;
}

.add_form {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.singup {
  color: #000;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: block;
  font-weight: bold;
  font-size: x-large;
  margin-top: 1.5em;
}

.card {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 350px;
  width: 300px;
  flex-direction: column;
  gap: 35px;
  border-radius: 15px;
  background: var(--white);
  box-shadow: 16px 16px 32px #c8c8c8,
        -16px -16px 32px #fefefe;
  border-radius: 8px;
  padding: 30px;

  @media screen and (max-width: 480px) {
    width: 250px;
    padding: 10px;
  }

  @media screen and (max-width: 400px) {
    width: 220px;
  }
}

.inputBox,
.inputBox1 {
  position: relative;
  width: 250px;

  @media screen and (max-width: 480px) {
    width: 200px;
  }

  @media screen and (max-width: 400px) {
    width: 170px;
  }
}

.inputBox input,
.inputBox1 input {
  width: 100%;
  padding: 10px;
  outline: none;
  border: none;
  color: #000;
  font-size: 1em;
  background: transparent;
  border-left: 2px solid #000;
  border-bottom: 2px solid #000;
  transition: 0.1s;
  border-bottom-left-radius: 8px;
}

.inputBox span,
.inputBox1 span {
  margin-top: 5px;
  position: absolute;
  left: 0;
  transform: translateY(-4px);
  margin-left: 10px;
  padding: 10px;
  pointer-events: none;
  font-size: 12px;
  color: #000;
  text-transform: uppercase;
  transition: 0.5s;
  letter-spacing: 3px;
  border-radius: 8px;
}

.inputBox input:valid~span,
.inputBox input:focus~span {
  transform: translateX(113px) translateY(-15px);
  font-size: 0.8em;
  padding: 5px 10px;
  background: #000;
  letter-spacing: 0.2em;
  color: #fff;
  border: 2px;
}

.inputBox1 input:valid~span,
.inputBox1 input:focus~span {
  transform: translateX(156px) translateY(-15px);
  font-size: 0.8em;
  padding: 5px 10px;
  background: #000;
  letter-spacing: 0.2em;
  color: #fff;
  border: 2px;
}

.inputBox input:valid,
.inputBox input:focus,
.inputBox1 input:valid,
.inputBox1 input:focus {
  border: 2px solid #000;
  border-radius: 8px;
}

.enter {
  height: 45px;
  width: 100px;
  border-radius: 5px;
  border: 2px solid #000;
  cursor: pointer;
  background-color: transparent;
  transition: 0.5s;
  text-transform: uppercase;
  font-size: 10px;
  letter-spacing: 2px;
  margin-top: 30px;
}

.enter:hover {
  background-color: rgb(0, 0, 0);
  color: white;
}
</style>
