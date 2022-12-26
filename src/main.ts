import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import "tailwindcss/tailwind.css"
import './assets/tailwind.css'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.mount('#app')
