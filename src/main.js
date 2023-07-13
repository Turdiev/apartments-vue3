import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { Vue3Mq } from "vue3-mq";
import '@/assets/styles/main.scss'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(Vue3Mq, {
    breakpoints: {
        'smMobile': 375,
        'mobile': 768,
        'tablet': 992,
        'laptop': 1270,
        'default': Infinity
    }
})
app.mount('#app')