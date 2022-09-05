import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import Lottie from 'vue-lottie'
import LottieAnimation from "lottie-web-vue";


const app = createApp(App)
app.use(LottieAnimation)
app.use(router)

app.mount('#app')
