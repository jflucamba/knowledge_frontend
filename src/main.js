import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from '@/config/router'

Vue.config.productionTip = false

// TEMPORÁRIO!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ikpvc2UgRmlsaXBlIiwiZW1haWwiOiJqZmx1Y2FtYmFAZ21haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTY1Mjc4MDk1NiwiZXhwIjoxNjUzMDQwMTU2fQ.iQrC4agtoJ59jNBwatt_vgpoxoqtSnorcCImrYaT5Ds'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')