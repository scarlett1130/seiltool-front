<!-- eslint-disable @typescript-eslint/explicit-function-return-type -->
<script lang="ts">
import DataService from '../service/DataService'
import DataTable from 'primevue/datatable'

export default {
  data(): { data: undefined; dataService: DataService | null } {
    return {
      data: undefined,
      dataService: null
    }
  },
  created() {
    this.dataService = new DataService()
  },
  mounted() {
    console.log('mounted')
    this.dataService?.getAll().then((data) => {this.data = data; console.log(data)})
  }
}
</script>
<template>
  <h1>Hello World</h1>
  <h2>Hello World!!</h2>
  <div>
    <DataTable :value="data" responsive-layout="scroll">
      <Column field="operator.content" header="Operator"></Column>
      <Column field="ordz.content" header="OZL"></Column>
      <Column field="category.content" header="Category"></Column>
      <Column field="description.content" header="Description"></Column>
      <Column field="site.content" header="Designation"></Column>
      <Column field="next_inspection.content" header="n.Pruf"></Column>
    </DataTable>
  </div>
</template>
