import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHashHistory } from 'vue-router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './style.css';
import App from './App.vue';
import  routes from './router';


const pinia = createPinia()
const app = createApp(App);

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})

app.use(pinia)
app.use(router)
app.use(ElementPlus)

app.mount('#app')
