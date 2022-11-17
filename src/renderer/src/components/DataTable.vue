<!-- eslint-disable @typescript-eslint/explicit-function-return-type -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import DataService from '../service/DataService'

const record = ref([])
const dataService = ref<DataService>(new DataService())

onMounted(() => {
  dataService.value?.getAll().then((res) => {
    console.error('res', res)
    record.value = res
  })
})
</script>
<template>
  <h1>Hello World</h1>
  <h2>Hello World!!</h2>
  <Button label="Submit"></Button>
  <div>
    <DataTable :value="record" responsive-layout="scroll">
      <Column field="operator.content" header="Operator"></Column>
      <Column field="ordz.content" header="OZL"></Column>
      <Column field="category.content" header="Category"></Column>
      <Column field="description.content" header="Description"></Column>
      <Column field="site.content" header="Designation"></Column>
      <Column field="next_inspection.content" header="n.Pruf"></Column>
    </DataTable>
  </div>
</template>
