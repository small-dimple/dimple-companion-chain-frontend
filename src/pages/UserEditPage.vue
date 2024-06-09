

<template>


  <van-form @submit="onSubmit">
      <van-field
          v-model="editUser.currentValue"
          :name="editUser.editKey"
          :label="editUser.editName"
          :placeholder="`请输入${editUser.editName}`"
      />
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>


</template>



<script setup >

import {useRoute, useRouter} from "vue-router";
import {ref} from "vue";
import myAxios from "../plugins/myAxios.ts";
import {Toast} from "vant";

const route = useRoute();
const router = useRouter();

const { editKey, currentValue, editName } = route.query;
const editUser = ref({

  editKey,
  currentValue,
  editName,

});

const onSubmit = async () => {

  const res = await myAxios.post('/user/update',
      {
        id:1,
        [editUser.value.editKey]:editUser.value.currentValue
      })

  if(res.code === 0 && res.data > 0){
    Toast.success(`${editUser.value.editName}修改成功`)
    router.back();
  }else{
    Toast.fail(`${editUser.value.editName}修改失败`)
  }
};



</script>
<style scoped>

</style>