import {createApp} from 'vue'
import store from "@/plugins/pinia";
import i18n from "@/plugins/i18n";
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import "tailwindcss/tailwind.css"
import './assets/tailwind.css'
import 'element-plus/dist/index.css'

const app = createApp(App)
// 注册全部elementIcon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(ElementPlus)
app.use(store)
app.use(i18n)
app.use(router)

app.mount('#app')
