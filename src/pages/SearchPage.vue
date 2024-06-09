<template>

  <form action="/">
    <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
    />
  </form>

  <van-divider content-position="left">可选标签</van-divider>
  <div v-if="activeIds.length === 0">请选择标签</div>

  <van-row gutter="20">
    <van-col v-for="tag in activeIds">
      <van-tag closeable size="medium" type="primary" @close="doclose(tag)">
        {{ tag }}

      </van-tag>

    </van-col>
  </van-row>

  <van-divider content-position="left">选择标签</van-divider>
  // 标签选择
  <van-tree-select
      v-model:active-id="activeIds"
      v-model:main-active-index="activeIndex"
      :items="tagList"
  />
  <div style="padding: 20px">
    <van-button  block   type="success" @click="doSearchResult" >搜索</van-button>

  </div>


</template>


<script setup lang="ts">
import {ref} from 'vue';
import {useRouter} from "vue-router";

const router = useRouter();
const originTagList =  [
  {
    text: '浙江',
    children: [
      {text: '男', id: '男'},
      {text: '女', id: '女'},
    ],
  },
  {
    text: '江苏',
    children: [
      {text: '杭州', id: '杭州'},
      {text: '无锡', id: '无锡'},
      {text: '徐州', id: '徐州'},
    ],
  },
  {
    text: '福建',
    children: [
      {text: '南京', id: '南京'},
      {text: '无锡', id: '无锡'},
      {text: '徐州', id: '徐州'},
    ],
  },
];

let tagList = ref(originTagList);

const searchText = ref('');
const onSearch = (val) =>{
  tagList.value = originTagList.map(parentTag => {
    const tempChildren = [...parentTag.children];
    const tempParentTag = {...parentTag}
    tempParentTag.children = tempChildren.filter(item => item.text.includes(searchText.value))
    return tempParentTag;
  });


};

const onCancel = () => {
  searchText.value = '';
  tagList.value= originTagList;
};

const activeIds = ref([]);
const activeIndex = ref(0);
const doclose = (tag) => {
  activeIds.value = activeIds.value.filter((item) => item !== tag);
}

const doSearchResult = () => {
  router.push({
    path: '/user/list',
    query: {
    tags: activeIds.value,
  }
  })


}




</script>

<style scoped>

</style>