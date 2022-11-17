import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import DataTable from 'primevue/datatable'
import Button from 'primevue/button'
import Column from 'primevue/column'
import App from './App.vue'
import 'primevue/resources/themes/arya-orange/theme.css'
import 'primevue/resources/primevue.min.css'

const app = createApp(App)

app.use(PrimeVue)
app.component('DataTable', DataTable)
// eslint-disable-next-line vue/no-reserved-component-names
app.component('Button', Button)
app.component('Column', Column)

app.mount('#app')
