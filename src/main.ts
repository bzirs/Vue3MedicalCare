import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

// import './assets/main.css'
import './assets/base.css'
import store from './stores'

import '@/styles/main.scss'

import './utils/vant'

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')
