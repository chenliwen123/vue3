<template>
  <div>
    {{ searchData }}
    <Children :model-value="searchData" @update:model-value="update"></Children>
  </div>
</template>

<script setup>
import { reactive, ref, watchEffect } from 'vue';
import Children from './Children.vue';
let searchData = ref({
  keyword: '',
  selectValue: '',
  options: [
    { label: '北京', value: '1' },
    { label: '上海', value: '2' },
    { label: '深圳', value: '3' },
  ],
});
const update = (value) => {
  searchData.value = value;
};
</script>

<style lang="scss" scoped></style>
