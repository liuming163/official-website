<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Header></Header>
  <!-- 路由出口 -->
  <router-view></router-view>
  <Footer></Footer>
  <!-- 回到顶部 -->
  <el-backtop :right="100" :bottom="100" />
</template>
