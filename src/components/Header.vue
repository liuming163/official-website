<template>
  <div class="container">
    <div class="left">
      <img src="../assets/imgs/title.png" />
    </div>
    <ul class="right">
      <li v-for="nav in navList">
        <router-link :to="nav.path">{{ nav.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
const navList = [
  {
    path: "/home",
    name: "首页",
  },
  {
    path: "/classiccases",
    name: "经典案例",
  },
  {
    path: "/enterprisedevelopment",
    name: "企业发展",
  },
  {
    path: "/about",
    name: "关于我们",
  },
  {
    path: "/cooperation",
    name: "商务合作",
  },
];
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  height: 110px;
  margin: 0 100px 0 20px;
  padding: 0 10px;
  background-color: #ccc;

  .left {
    width: 300px;
    line-height: 110px;

    img {
      width: 100%;
    }
  }

  .right {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 600px;
    font-size: 16px;
    font-weight: 700;
    // background-color: #30ac91;

    li > a {
      padding: 15px 0;

      &:hover {
        border-bottom: 2px solid #3384fb;
      }
    }
  }
}
</style>
