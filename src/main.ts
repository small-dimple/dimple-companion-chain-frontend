
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'
import routes from "./config/route.ts";
import {createApp} from "vue";


const app = createApp(App);

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
app.use(router);
app.mount('#app');
