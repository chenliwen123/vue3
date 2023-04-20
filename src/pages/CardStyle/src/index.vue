<template>
  <div class="CardStyle">
    <div class="CardStyle_bg">
      <slot></slot>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.CardStyle {
  margin: 6px 4px;
  width: calc(50% - 14px);
  box-sizing: content-box;
  .CardStyle_bg {
    background: radial-gradient(circle at 60% 90%, #2e67a1, transparent 60%),
      radial-gradient(
        circle at 20px 20px,
        rgba(46, 103, 161, 0.8),
        transparent 25%
      ),
      #182336;
    height: 560px;
    border-radius: 6px;
    position: relative;
  }
  border: 3px solid rgba(53, 162, 253, 0.267);
  border-radius: 10px;
  background: rgba(0, 12, 23, 0.867);
}
</style>
