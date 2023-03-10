<script>
import { ref, watch, toRefs } from 'vue'
import { useUserStore } from '@/store/user.ts'
import { storeToRefs } from 'pinia'
export default {
  setup(props) {
    let { msg } = toRefs(props);
    let chilrenmsg = ref(msg.value);
    console.log(chilrenmsg);
    const count = ref(0);
    // 返回值会暴露给模板和其他的选项式 API 钩子
    watch(count,(newcount)=>{
      chilrenmsg.value = chilrenmsg.value + newcount
      console.log(msg);
    })

    let userStore = useUserStore();
    const { userinfo } = storeToRefs(userStore);
    
    let getbuttonfun = () => {
      console.log(userStore.getUserinfo());
    }

    let setbuttonfun = () => {
      userStore.setUserinfo({
        email:'1410762621@qq.com',
        id: '1499902381666816002',
        idmId:'u2019356840',
        loginName:'10110729',
        name:'王婷',
        systemId:'MC-0001',
        tenantId:'YQJT',
        mobile:'18686451377',
      })
    }
    
    return {
      count,
      chilrenmsg,
      getbuttonfun,
      setbuttonfun,
    }
  },
  props:{
    msg:{
      type:String
    }
  },
  
  watch:{
    count:function(newdata){
      console.log(this.count);
      console.log(this.msg);
    }
  },

  mounted() {
  }
}
</script>

<template>
  <h1>{{ count }}</h1>
  <input v-model="count">
  {{ chilrenmsg }}
  <Button @click=" setbuttonfun() ">设置用户信息</Button>
  <Button @click=" getbuttonfun() ">查询用户信息</Button>
</template>