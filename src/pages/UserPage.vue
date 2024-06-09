<template>
  <template v-if="user">
  <van-cell title="昵称" to="/user/edit" is-link :value="user.username" @click="toEdit('username','昵称',user.username)"/>
  <van-cell title="账户"  is-link :value="user.userAccount"/>
  <van-cell title="头像" to="/user/edit" is-link  @click="toEdit('avatarUrl','头像',user.avatarUrl)">
      <img style="height: 20px" :src="user.avatarUrl" alt=""/>
  </van-cell>
  <van-cell title="性别" to="/user/edit" is-link arrow-direction="down" :value="user.gender" @click="toEdit('gender','性别',user.gender)" />
  <van-cell title="电话" to="/user/edit" is-link arrow-direction="down" :value="user.phone" @click="toEdit('phone','手机号',user.phone)"/>
  <van-cell title="邮箱" to="/user/edit" is-link arrow-direction="down" :value="user.email" @click="toEdit('email','邮箱',user.email)"/>
  <van-cell title="幸运数字" to="/user/edit" is-link arrow-direction="down" :value="user.orderNum" @click="toEdit('email','邮箱',user.orderNum)"/>
  <van-cell title="创建时间"   :value="user.createTime"/>

  </template>

</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios.ts";
import {Toast} from "vant";


const user = ref();
onMounted(async () => {
  const ref = await myAxios.get('/user/current')

  if(ref.code === 0 ){
    user.value = ref.data
    Toast.success("获取用户信息成功")
  }else{
    Toast.fail("获取用户信息失败")
  }
})

const router = useRouter();

const toEdit = (editKey: string, editName: string,currentValue: string) => {
  router.push({
    path: '/user/edit',
    query: {
      editKey,
      editName,
      currentValue,
    }
  }
  )

}


</script>

<style scoped>

</style>