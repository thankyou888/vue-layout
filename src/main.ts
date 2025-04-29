import { createApp } from 'vue'
import './app.css'
import './style.css'
import App from './App.vue'
import router from './router'


// Use the router in the app
createApp(App)
  .use(router)
  .mount('#app')
