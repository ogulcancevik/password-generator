import '@/main.css'

import 'vue-toastification/dist/index.css'
import Toast, { POSITION } from 'vue-toastification'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(Toast, {
  position: POSITION.TOP_CENTER,
  timeout: 2000
})
app.mount('#app')
