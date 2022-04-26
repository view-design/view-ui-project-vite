import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUIPlus from 'view-design'
import 'view-design/dist/styles/viewuiplus.css'
import './styles'
// import './mock'

const app = createApp(App)

app.use(router)
  .use(store)
  .use(ViewUIPlus)
  .mount('#app')
