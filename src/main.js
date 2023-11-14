import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'

import router from './router';

const app=createApp( App );
app.use( router );
app.mount( '#app' );
//使用elementui-plus的icon时 添加i-eq作为icon前缀