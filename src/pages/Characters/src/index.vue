<template>
  <div class="Characters">
    <div class="Characters_Text">
      <span v-for="item in text">{{ item }}</span>
    </div>
    <el-button type="primary" @click="rollt({ value: text })"
      >Once Again</el-button
    >
  </div>
</template>

<script setup>
import { ref } from 'vue';

const text = ref('Hello World');

const rollt = (e) => {
  let index = -10;
  let tampstr = e.value;
  let time;
  /**@function 获取随机的code */
  const getInt = (ar) => {
    const max = Math.ceil(ar[1]);
    const min = Math.floor(ar[0]);
    return Math.random() * (max - min) + min;
  };
  /**@function 根据传入的大小写字符随机生成一个字符 */
  const getChar = (it) => {
    let capitalization = [65, 90];
    let small = [97, 122];
    let code = 0;
    if (it.charCodeAt() > 90) {
      code = getInt(small);
    } else {
      code = getInt(capitalization);
    }
    ' ' === it && (code = 32);
    return String.fromCharCode(code);
  };
  const setvalue = () => {
    index++;
    if (index > tampstr.length) {
      clearTimeout(time);
      return;
    }
    const arr = e.value.split('');
    let temparr = [];
    for (const item of arr) {
      temparr.push(getChar(item));
    }
    temparr.splice(0, index, tampstr.substr(0, index));
    text.value = temparr.join('');
    time = setTimeout(() => {
      setvalue();
    }, 60);
  };
  setvalue();
};
</script>

<style lang="scss" scoped>
.Characters {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  .Characters_Text {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span {
    font-size: 56px;
    color: #fff;
    min-width: 20px;
  }
}
</style>
