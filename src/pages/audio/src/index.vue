<template>
  <div>
    <canvas id="canvas" ref="canvasref"></canvas>
    <audio id="audio" ref="audioref" controls :src="audiomp3"></audio>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import audiomp3 from '../wohuideng.mp3';
const canvasref = ref();
const audioref = ref();
onMounted(() => {
  const audioEle = audioref.value;
  const cvs = canvasref.value;
  const ctx = cvs.getContext('2d');
  function initCvs() {
    cvs.width = window.innerWidth * devicePixelRatio;
    cvs.height = (window.innerHeight / 2) * devicePixelRatio;
  }
  initCvs();
  let isInit = false;
  let dataArray, analyser;
  audioEle.onplay = function () {
    if (isInit) {
      return;
    }
    const audCtx = new AudioContext();
    const source = audCtx.createMediaElementSource(audioEle);
    analyser = audCtx.createAnalyser();
    analyser.fftSize = 512;
    dataArray = new Uint8Array(analyser.frequencyBinCount);
    source.connect(analyser);
    analyser.connect(audCtx.destination);
    isInit = true;
  };

  function draw() {
    requestAnimationFrame(draw);
    const { width, height } = cvs;
    ctx.clearRect(0, 0, width, height);
    if (!isInit) {
      return;
    }
    analyser.getByteFrequencyData(dataArray);
    const len = dataArray.length / 2.5;
    const barWidth = width / len;
    ctx.fillStyle = '#78C5f7';
    for (let i = 0; i < len; i++) {
      const data = dataArray[i];
      const barHight = (data / 255) * height;
      const x1 = i * barWidth + width / 2;
      const x2 = width / 2 - (i + 1) * barWidth;
      const y = height - barHight;
      ctx.fillRect(x1, y, barWidth - 3, barHight);
      ctx.fillRect(x2, y, barWidth - 3, barHight);
    }
  }
  draw();
});
</script>

<style lang="scss" scoped></style>
