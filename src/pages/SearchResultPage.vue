<template>


  <van-card
      v-for="user in userList"
      :tag=user.orderNum
      :desc=user.profile
      :title=user.username
      :thumb=user.avatarUrl
      @click=doShow(user.id)
  >
    <template #tags>
      <van-tag plain type="danger" v-for="tag in user.tags" style="margin-right: 8px; margin-top: 8px">{{ tag }}
      </van-tag>
    </template>
    <template #footer>
      <van-button size="mini">联系</van-button>
      <!--      <van-button size="mini">按钮</van-button>-->
    </template>
  </van-card>

  <!-- 搜索提示 -->
  <van-empty v-if="!userList || userList.length<1" image="search" description="搜索结果暂无" />
</template>


<script setup >


import {onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import myAxios from "../plugins/myAxios.ts";
import {Toast} from "vant";
import qs from "qs";

const route = useRoute();
const router = useRouter();
// console.log(route.query);

const {tags} = route.query;


const userList = ref([]);


onMounted(async () => {
  // 从后端获取了用户列表数据
  const userListData = await myAxios.get('/user/search/tags', {
    params: {
      tigNameList: tags
    },
    paramsSerializer: (params) => {
      return qs.stringify(params, {indices: false});
    },
  })
      .then(function (response) {
        console.log('/user/search/tags succeed', response);
        // Toast.success('请求成功');
        // console.log(response.data)
        return response.data?.data;
      })
      .catch(function (error) {
        console.log('/user/search/tags error', error);
        // Toast.fail('请求失败');

        return null;
      })

  if(userListData){
    userListData.forEach(user => {
      // 处理tags不为空的情况下，将json格式解析为String
      if(user.tags){
        user.tags = JSON.parse(user.tags);
      }
    })
    userList.value = userListData;
  }

})

// 跳转到用户详情页
const doShow = (id) => {
  router.push({
    path: '/user/showProf',
    query: {
      userSearchId: id
    }
  })
}


</script>

<style scoped>


</style>