import { defineStore } from 'pinia';
import { reactive } from 'vue';

interface InfoType {
  email:string;
  id: string;
  idmId:string;
  loginName:string;
  name:string;
  systemId:string;
  tenantId:string;
  mobile?:number;
}

export let useUserStore = defineStore('user',()=>{
  let userinfo = reactive({});

  let setUserinfo = (info:InfoType) => {
    userinfo = info;
  }
  let getUserinfo = () =>{
    return userinfo
  }


  return { userinfo, setUserinfo, getUserinfo }
})