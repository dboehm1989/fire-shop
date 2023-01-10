import { createApp } from 'vue';
import { createPinia } from 'pinia';

import 'bulma/css/bulma.css';
import '@/assets/style/index.scss';
import '@/assets/style/bulma-variables.scss';

import App from './App.vue';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount('#app');
