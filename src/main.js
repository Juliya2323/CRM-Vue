import { createApp } from "vue";
import { createPinia } from "pinia";
import { router } from "./router/index.js";
import Vue from 'vue';

import "./assets/styles/index.css";
import App from "./App.vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseCard from "./components/ui/BaseCard.vue";
import BaseLoader from "./components/ui/BaseLoader.vue";

const app = createApp(App);
const pinia = createPinia();
app.component("VueDatePicker", VueDatePicker);
app.component("base-button", BaseButton);
app.component("base-card", BaseCard);
app.component("base-loader", BaseLoader);
app.use(router);
app.use(pinia);
app.mount("#app");
