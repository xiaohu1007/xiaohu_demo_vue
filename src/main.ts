import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { setupStore } from './store';
// import { setupElementPlus } from './plugins/element-plus';
import '@/assets/main.scss';

const app = createApp(App);

setupStore(app);
// setupElementPlus(app);

app.mount('#app');
