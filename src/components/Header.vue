<template>
  <!-- 头部整体盒子 -->
  <div class="container-header">
    <!-- 头部logo -->
    <div class="left">
      <img src="../assets/imgs/title.png" />
    </div>
    <!-- 头部导航 -->
    <ul class="right">
      <li
        v-for="(nav, index) in navList"
        :key="index"
        :class="[index == navIndex ? 'active' : '']"
        @click="navClick(index)"
      >
        <router-link :to="nav.path">{{ nav.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
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
const navIndex = ref(""); // 设置选中的导航项
navIndex.value = sessionStorage.getItem("navIndex")
  ? sessionStorage.getItem("navIndex")
  : 0; // 从sessionStorage中获取选中的导航项，如果没有则默认为0
// 导航项的点击事件
const navClick = (index) => {
  navIndex.value = index;
  sessionStorage.setItem("navIndex", index); // 将选中的导航项保存到sessionStorage中
};
</script>

<style lang="scss" scoped>
.container-header {
  display: flex;
  justify-content: space-between;
  height: 110px;
  margin: 0 100px 0 20px;
  padding: 0 10px;

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
    }

    li {
      position: relative;
    }

    li::after {
      content: "";
      display: block;
      /*开始时候下划线的宽度为100%*/
      width: 100%;
      height: 2px;
      position: absolute;
      bottom: -15px;
      background: #3384fb;
      transition: all 0.3s ease-in-out;
      /*通过transform的缩放scale来让初始时x轴为0*/
      transform: scale3d(0, 1, 1);
      /*将坐标原点移到元素的中间，以原点为中心进行缩放*/
      transform-origin: 50% 0;
    }

    li:hover::after {
      /*鼠标经过时还原到正常比例*/
      transform: scale3d(1, 1, 1);
    }

    .active > a {
      color: #3384fb;
      padding: 15px 0;
      border-bottom: 2px solid #3384fb;
    }
  }
}
</style>
