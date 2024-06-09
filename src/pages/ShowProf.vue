<template>

  <span v-if="user">
    <van-cell title="昵称" :value="user.username"/>
  <van-cell title="账户" :value="user.userAccount"/>
  <van-cell title="头像">
    <img style="height: 20px" :src="user.avatarUrl" alt=""/>
  </van-cell>
  <van-cell title="幸运数字" :value="user.orderNum"/>
  <van-cell title="性别" value="男" v-if="user.gender == '1'"/>
    <van-cell title="性别" value="女" v-if="user.gender == '0'"/>
  <van-cell title="电话" :value="user.phone"/>
  <van-cell title="邮箱" :value="user.email"/>
  <van-cell title="简介" :value="user.profile"/>
  <van-cell title="创建时间" :value="user.createTime"/>

  </span>


</template>

<script setup lang="ts">


//todo 将搜索到的用户进行查询，并通过此类进行渲染，但是不允许进行修改
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios.ts";
// import {Toast} from "vant";
// import qs from "qs";

// import {request} from "axios";

const route = useRoute();


const user = ref();

onMounted(async () => {

  const userSearchId = route.query.userSearchId;
  // 从后端获取了用户列表数据
  await myAxios.get(`/user/search/showProf`, {
    params: {
      userSearchId: userSearchId,
    }
  })
      .then((response) => {
        console.log('/user/search/showProf succeed', response);
        // Toast.success('请求成功');
        console.log(response.data);
        user.value = response.data?.data;

      })
      .catch((error) => {
        console.log('/user/search/showProf error', error);
        // Toast.fail('请求失败');

        return null;
      })


})


</script>

<style scoped>

</style>