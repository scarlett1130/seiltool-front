import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import App from './App.vue'

const app = createApp(App)

app.use(PrimeVue)
app.component('DataTable', DataTable)
app.component('Column', Column)

app.mount('#app')
