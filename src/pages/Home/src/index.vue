<template>
  <div class="Home_content">
    <CardStyle :style="{ '--rotate': '-20deg' }">
      <Blur></Blur>
    </CardStyle>
    <CardStyle :style="{ '--rotate': '20deg' }">
      <Blur></Blur>
    </CardStyle>
    <CardStyle><MixBlendMode /> </CardStyle>
    <CardStyle><Characters /> </CardStyle>
  </div>
</template>

<script setup>
import CardStyle from '@/pages/CardStyle';
import Blur from '@/pages/blur';
import MixBlendMode from '@/pages/mixBlendMode';
import Characters from '@/pages/Characters';
</script>

<style lang="scss" scoped>
.Home_content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background: linear-gradient(135deg, #224141, #162a2a);
}
</style>
