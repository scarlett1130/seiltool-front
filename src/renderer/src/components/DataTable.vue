<!-- eslint-disable @typescript-eslint/explicit-function-return-type -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import DataService from '../service/DataService'

const record = ref([])
const dataService = ref<DataService>(new DataService())
const keyword = ''
const selectedCategories = ref()
const categories = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
])

const onCategorySelect = () => {
  console.log('selectedCategories', selectedCategories)
}

const onTextChanged = () => {
  console.log('keyword', keyword)
}

const onPaginate = () => {
  console.log('onPaginate')
}

onMounted(() => {
  dataService.value?.getAll().then((res) => {
    console.error('res', res)
    record.value = res
  })
})
</script>
<template>
  <Card>
    <template #title> Magnetinduktive Seilinspektion </template>
    <template #subtitle> Vue3 + PrimeVue + Electron </template>
    <template #content>
      <div class="mb-3 flex">
        <MultiSelect
          id="category"
          v-model="selectedCategories"
          :options="categories"
          option-label="name"
          placeholder="Select Categories"
          @change="onCategorySelect"
        />
        <span class="p-input-icon-left ml-auto">
          <i class="pi pi-search"></i>
          <InputText v-model="keyword" type="text" placeholder="Search" @change="onTextChanged" />
        </span>
      </div>
      <div>
        <DataTable :value="record" responsive-layout="scroll">
          <Column field="operator.content" header="Operator"></Column>
          <Column field="ordz.content" header="OZL"></Column>
          <Column field="category.content" header="Category"></Column>
          <Column field="description.content" header="Description"></Column>
          <Column field="site.content" header="Designation"></Column>
          <Column field="next_inspection.content" header="n.Pruf"></Column>
        </DataTable>
        <Paginator
          :rows="10"
          :total-records="100"
          :rows-per-page-options="[10, 20, 30]"
          @page="onPaginate"
        ></Paginator>
      </div>
    </template>
  </Card>
</template>
