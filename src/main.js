import { createApp } from 'vue'
import VueMarkdownIt from 'vue3-markdown-it';
import App from './App.vue'
import './assets/styles/index.css';
const app = createApp(App).mount('#app')
app.use(VueMarkdownIt);

