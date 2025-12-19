import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import ViewUiPlus from 'view-ui-plus'
import './styles/index.less'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
    .use(router)
    .use(ViewUiPlus)
    .mount('#app')

