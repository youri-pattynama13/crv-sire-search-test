import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueI18n from './i18n/entry';

const app = createApp(App);

app.use(VueI18n);
app.use(router).mount('#app');
