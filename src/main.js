import { createApp } from 'vue';
import { createPinia } from 'pinia'; 
import { router } from './router/index.js';

import './assets/styles/index.css';
import App from './App.vue';
import BaseButton from './components/ui/BaseButton.vue';

const app = createApp(App);
const pinia = createPinia();
app.component('base-button', BaseButton);
app.use(router);
app.use(pinia);
app.mount('#app');
