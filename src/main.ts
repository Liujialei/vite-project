import { createApp } from 'vue'
import App from './App.vue'

//router 引入
import router from './router/index'

const app = createApp(App)
app.use(router).mount('#app')
