<script setup>
import { ref } from "vue"

  let count = ref(0);
  count.value++

</script>



<template>
  <div class="Home">
    Home
   <span>
    {{ count }}
   </span>
  </div>

</template>

<style lang="scss" scoped>
.Home{
  color:#000;
  span{
    color:#f00000
  }
}
</style>