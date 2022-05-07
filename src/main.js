import { createApp } from 'vue'
import { Button, Message } from 'view-ui-plus'
import App from './App.vue'
import router from './router'
import store from './store'
import 'view-ui-plus/dist/styles/viewuiplus.css'
import './styles'
// import './mock'

const app = createApp(App)

app.component(Button.name, Button)
app.config.globalProperties.$Message = Message

app.use(router)
  .use(store)
  .mount('#app')
