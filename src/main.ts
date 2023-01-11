import { createApp } from 'vue';
import { createPinia } from 'pinia';

import 'bulma/css/bulma.css';
import '@/styles/index.scss';

import App from './App.vue';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount('#app');
