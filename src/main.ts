import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
import Dashboard from './Dashboard.vue'
import store from './store/store'


import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faCheckCircle, 
  faExclamationCircle, 
  faArrowAltCircleRight, 
  faHourglassStart, 
  faExclamationTriangle,
  faPlayCircle,
  faPauseCircle,
  faAngleDown, 
  faComment,
  faEnvelopeSquare,
  faAngleUp,
  faEdit,
  faPenSquare,
  faInfoCircle,
  faSquare} from '@fortawesome/free-solid-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSquare, faInfoCircle, faPenSquare, faEdit, faCheckCircle, faExclamationCircle, faArrowAltCircleRight, faHourglassStart, faExclamationTriangle, faPlayCircle, faPauseCircle, faAngleDown, faComment, faEnvelopeSquare, faAngleUp)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('apexchart', VueApexCharts)

Vue.config.productionTip = false
Vue.use(BootstrapVue)


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


new Vue({
  store,
  render: h => h(Dashboard)
}).$mount('#dashboard')
