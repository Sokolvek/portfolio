import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import "./assets/styles/global.css"
import "@/assets/styles/felimotion.css"

const app = createApp(App)

app.use(router).mount('#app')
