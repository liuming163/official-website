<template>
  <div class="home-page">
    <!-- 轮播图区域 -->
    <el-carousel height="600px">
      <el-carousel-item v-for="item in swiperList" :key="item.id">
        <h1 class="swiper-text swiper-title">{{ item.title }}</h1>
        <p class="swiper-text swiper-content">{{ item.content }}</p>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
const swiperList = [
  {
    id: 1,
    title: "和晞科技",
    content: "打造满足政府监管、IP权利人维权、版权维权和内容安全版权开放平台1",
  },
  {
    id: 2,
    title: "和晞科技",
    content: "打造满足政府监管、IP权利人维权、版权维权和内容安全版权开放平台2",
  },
  {
    id: 3,
    title: "和晞科技",
    content: "打造满足政府监管、IP权利人维权、版权维权和内容安全版权开放平台3",
  },
];
</script>

<style scoped lang="scss">
.swiper-text {
  text-align: center;
  font-weight: 700;
  color: #fff;
}
.swiper-title {
  margin-top: 200px;
  font-size: 50px;
}
.swiper-content {
  margin-top: 20px;
  font-size: 20px;
}
.el-carousel__item {
  background-size: cover;
  width: 100%;
  height: 100%;
}
.el-carousel__item:nth-child(3) {
  background: url("../assets/imgs/banner1.png") no-repeat center center;
}
.el-carousel__item:nth-child(4) {
  background-image: url("../assets/imgs/banner3.png");
}
.el-carousel__item:nth-child(5) {
  background-image: url("../assets/imgs/banner2.jpg");
}
</style>
