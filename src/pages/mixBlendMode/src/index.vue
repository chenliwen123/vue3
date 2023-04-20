<template>
  <div class="MixBlendMode_box">
    <div class="text"></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.MixBlendMode_box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.text {
  height: 160px;
  position: relative;
  width: 600px;
  background-image: linear-gradient(45deg, #000, #000 50%, #fff 0);
  &::after {
    font-size: 56px;
    content: 'Hello World';
    position: absolute;
    color: #fff;
    left: 50px;
    top: calc(50% - 50px);
    white-space: nowrap;
    mix-blend-mode: difference;
    animation: 2s linear 0s infinite alternate sun-rise;
  }
}
@keyframes sun-rise {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(200px);
  }
}
</style>
