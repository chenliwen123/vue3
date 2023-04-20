<template>
  <div class="CardStyle_square"></div>
  <div class="CardStyle_round"></div>
  <div class="CardStyle_main">
    <h1>TiKi Platinum</h1>
    <h2>6228 8076 2232</h2>
    <h3>van conf banck</h3>
    <h4>03 / 29</h4>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.CardStyle_square {
  background-image: linear-gradient(
    to top left,
    rgba(135, 116, 249, 0.9),
    rgba(75, 162, 237, 0.9)
  );
  border-radius: 20px;
  height: 160px;
  left: 50%;
  position: absolute;
  top: 20px;
  width: 160px;
}
.CardStyle_round {
  background-image: linear-gradient(to top left, #8774f9, #4ba2ed);
  border-radius: 80px;
  bottom: 20px;
  height: 160px;
  position: absolute;
  right: 50%;
  width: 160px;
}
.CardStyle_main {
  backdrop-filter: blur(6px);
  background-image: linear-gradient(
    to top right,
    rgba(90, 149, 207, 0.5),
    rgba(58, 76, 99, 0.8)
  );
  box-shadow: 10px -10px 20px rgba(0, 0, 0, 0.2),
    -10px 10px 20px hsla(0, 0%, 100%, 0.1);

  color: hsla(0, 0%, 100%, 0.8);
  height: 400px;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.4);
  border-left: 1px solid hsla(0, 0%, 100%, 0.4);
  border-radius: 20px;
  position: absolute;
  right: calc(50% - 130px);
  text-align: center;
  top: calc(50% - 200px);
  -webkit-transform: rotate(var(--rotate));
  transform: rotate(var(--rotate));
  width: 260px;
  z-index: 10;
  h1 {
    margin-top: 50px;
    margin-bottom: 0;
  }
  h2 {
    margin-top: 100px;
    margin-bottom: 0;
  }
  h3 {
    margin-top: 20px;
    margin-bottom: 0;
  }
  h4 {
    margin-top: 10px;
  }
}
</style>
