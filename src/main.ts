import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import pinia from "./store"
import "normalize.css"
import "./assets/css/index.less"
import registerIcons from "./global/register-icons"

// 1.全局注册element-plus: 方便和简洁
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

createApp(App).use(registerIcons).use(router).use(pinia).mount("#app")
