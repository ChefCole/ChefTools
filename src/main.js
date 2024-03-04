import { createApp } from "vue";
import "./styles.css";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from "./App.vue";

import {createRouter,createWebHashHistory} from 'vue-router'
import Home from './pages/home/home.vue'
import User from './pages/user/user.vue'
import About from './pages/about/about.vue'
import ApiSetting from './pages/setting/api-setting.vue'

const routes = [
    { path: '/', component: Home ,name:""},
    { path: '/user', component: User ,name:""},
    { path: '/about', component: About ,name:""},
    { path: '/apiSetting', component: ApiSetting ,name:""},
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})
router.afterEach((to, from, next) => {
    document.title = to.name;
})

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')