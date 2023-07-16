import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import { Vue3Mq } from "vue3-mq";
import '@/assets/styles/main.scss'
import 'element-plus/dist/index.css'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(ElementPlus)
app.use(Vue3Mq, {
    breakpoints: {
        'xsMobile': 0,
        'smMobile': 376,
        'mobile': 768,
        'tablet': 992,
        'laptop': 1270
    }
})
app.mount('#app')
