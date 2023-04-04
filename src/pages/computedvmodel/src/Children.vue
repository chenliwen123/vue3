<template>
  <div>
    <el-input
      v-model="model.keyword"
      placeholder="Please input"
      class="input-with-select"
    >
      <template #prepend>
        <el-select
          v-model="model.selectValue"
          placeholder="Select"
          style="width: 115px"
        >
          <el-option
            v-for="i in model.options"
            :label="i.label"
            :value="i.value"
            :key="i.value"
          />
        </el-select>
      </template>
      <template #append>
        <el-button :icon="Search" />
      </template>
    </el-input>
  </div>
</template>

<script setup>
import { Search } from '@element-plus/icons-vue';
import { get, set } from 'lodash';
import { computed, ref, watchEffect } from 'vue';
let props = defineProps({
  modelValue: {
    required: true,
    type: Object,
  },
});

const emit = defineEmits(['update:modelValue']);

let model = computed({
  set(value) {},
  get() {
    return new Proxy(props.modelValue, {
      set(obj, name, value) {
        emit('update:modelValue', {
          ...obj,
          [name]: value,
        });
        return true;
      },
    });
  },
});
</script>

<style lang="scss" scoped></style>
