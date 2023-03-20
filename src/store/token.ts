import { defineStore } from 'pinia';
import { reactive } from 'vue';

interface InfoType {
  token: string;
}

export let useTokenStore = defineStore('token', () => {
  let token = reactive({});

  let settoken = (e: InfoType) => {
    token = e;
    sessionStorage.setItem('token', JSON.stringify(e));
  };
  let gettoken = () => {
    return token;
  };

  return { settoken, gettoken };
});
