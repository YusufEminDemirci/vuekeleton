/* Styles */
import './assets/main.css'

/* Vue App */
import App from './App.vue'
import { createApp } from 'vue'
const app = createApp(App)

/* I18n */
import { createI18n } from 'vue-i18n'
const i18n = createI18n({
  // something vue-i18n options here ...
})
app.use(i18n)

/* Pinia */
import { createPinia } from 'pinia'
app.use(createPinia())

/* Router */
import router from './router'
app.use(router)

app.mount('#app')
