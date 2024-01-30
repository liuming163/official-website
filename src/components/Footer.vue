<template>
  <div class="container-footer">
    <div class="left">
      <h2>北京和晞科技有限公司</h2>
      <p>地址: 北京市大兴区首开万科中心1313</p>
      <p>电话: 010-88888888</p>
      <p>邮箱: business@hxdaybreak.com</p>
    </div>
    <div class="right">
      <img src="../assets/imgs/weibo.png" alt="" />
      <p>微博</p>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.container-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 260px;
  height: 280px;
  color: #fff;
  font-size: 16px;
  background-color: #3e3e3e;

  .left {
    h2 {
      margin-bottom: 20px;
    }
  }

  .right {
    text-align: center;
    img {
      width: 120px;
      height: 120px;
    }
    p {
      margin-top: 20px;
    }
  }
}
</style>
