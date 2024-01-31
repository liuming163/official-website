<template>
  <div class="cooperation">
    <div class="top">
      <img src="../assets/imgs/banner_1.jpg" />
    </div>
    <div class="join">
      <div class="left">
        <div class="left-img">
          <img src="../assets/imgs/banner1.png">
        </div>
        <div class="left-img">
          <img src="../assets/imgs/banner2.jpg">
        </div>
      </div>
      <div class="right">
        <el-form :model="form" label-width="160px">
          <el-form-item label="公司名称: ">
            <el-input v-model="form.companyName" placeholder="请输入公司名称" clearable />
          </el-form-item>
          <el-form-item label="联系人: ">
            <el-input v-model="form.contacts" placeholder="请输入联系人" clearable />
          </el-form-item>
          <el-form-item label="联系电话: ">
            <el-input v-model="form.phone" placeholder="请输入联系电话" clearable />
          </el-form-item>
          <el-form-item label="备注: ">
            <el-input v-model="form.notes" type="textarea" placeholder="备注信息" rows="4" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" plain @click="onSubmit">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
const form = reactive({
  companyName: "", // 公司名称
  contacts: "", // 联系人
  phone: "", // 联系电话
  notes: "", // 备注
});

const onSubmit = () => {
  console.log("submit!");
}
</script>

<style scoped lang="scss">
.cooperation {
  .top {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }

  .join {
    display: flex;
    justify-content: space-between;
    position: relative;
    width: 100%;
    height: 540px;
    padding: 100px 0;

    &::after {
      content: "";
      opacity: 0.1;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-image: url(../assets/imgs/bg.jpeg);
      background-size: cover;
      z-index: -999;
    }

    .left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 40%;
      padding-left: 100px;

      .left-img {
        width: 400px;
        height: 260px;
        border-radius: 5%;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          background-size: cover;
        }
      }
    }

    .right {
      width: 60%;
      padding-right: 100px;

      :deep(.el-form-item) {
        margin-bottom: 50px;
      }

      :deep(.el-form-item__label) {
        font-size: 20px;
        line-height: 60px;
      }

      .el-input {
        width: 80%;
        font-size: 20px;
        height: 60px;
      }

      :deep(.el-textarea__inner) {
        width: 80%;
        font-size: 20px;
      }

      .el-button {
        font-size: 20px;
        padding: 20px 100px;
        margin-left: 35%;
      }
    }
  }
}
</style>
