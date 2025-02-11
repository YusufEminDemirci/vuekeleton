/* Styles */
import './assets/main.css'

/* Vue App */
import App from './App.vue'
import { createApp } from 'vue'
const app = createApp(App)

/* I18n */
import { i18n } from '@/locales'
app.use(i18n)

/* Pinia */
import { createPinia } from 'pinia'
app.use(createPinia())

/* Router */
import router from './router'
app.use(router)

app.mount('#app')
