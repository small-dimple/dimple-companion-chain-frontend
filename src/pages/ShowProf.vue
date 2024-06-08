<template >
  <van-cell title="昵称"   :value="mockUser.username" />
  <van-cell title="账户"   :value="mockUser.userAccount"/>
  <van-cell title="头像"    >
    <img style="height: 20px" :src="mockUser.avatarUrl" alt=""/>
  </van-cell>
  <van-cell title="幸运数字"    :value="mockUser.orderNum" />
  <van-cell title="性别"    :value="mockUser.gender"  />
  <van-cell title="电话"    :value="mockUser.phone" />
  <van-cell title="邮箱"    :value="mockUser.email" />
  <van-cell title="简介"    :value="mockUser.profile" />

  <van-cell title="创建时间"   :value="mockUser.createTime"/>



</template>

<script setup lang="ts">


//todo 将搜索到的用户进行查询，并通过此类进行渲染，但是不允许进行修改
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios.ts";
import {Toast} from "vant";
import qs from "qs";
// import {request} from "axios";

const route = useRoute();

const { tags } = route.query;
onMounted(() => {
  // 从后端获取了用户列表数据
  myAxios.get('/user/search/tags', {
    params: {
      tigNameList: tags
    },
    paramsSerializer: (params) => {
      return qs.stringify(params, { indices: false });
    },
  })
      .then(function (response) {
        console.log('/user/search/tags succeed',response);
        Toast.success('请求成功');
      })
      .catch(function (error) {
        console.log('/user/search/tags error',error);
        Toast.fail('请求失败');

      })


  // import request from "@/utils/request";


})
// let date: Date = new Date();
// let dateString: string = date.toISOString();
//
// const mockUser = ref({
//   id: 123,
//   username: '酒窝',
//   userAccount: 'dimple',
//   avatarUrl: 'https://small-dimple.top/wp-content/uploads/2024/05/%E6%9A%82%E6%97%A0%E6%B6%88%E6%81%AF-300x300.png',
//   gender: '男',
//   phone: '13488565573',
//   email: '2250434308@qq.com',
//   profile:'小酒窝，一名初学者，希望多多关照，谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢谢',
//   userRole: '0',
//   orderNum: '1',
//   tags: ['java','emo','a','b','c'],
//   createTime: dateString
// });




</script>

<style scoped>

</style>