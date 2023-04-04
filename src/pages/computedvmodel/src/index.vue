<template>
  <div>
    {{ searchData }}
    <Children v-model="searchData"></Children>
  </div>
</template>

<script setup>
import { ref } from 'vue';
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
</script>

<style lang="scss" scoped></style>
