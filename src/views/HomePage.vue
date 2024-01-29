<template>
  <div class="home-page">
    <!-- 轮播图区域 -->
    <el-carousel height="600px">
      <el-carousel-item v-for="item in swiperList" :key="item.id">
        <h1 class="swiper-text swiper-title">{{ item.title }}</h1>
        <p class="swiper-text swiper-content">{{ item.content }}</p>
      </el-carousel-item>
    </el-carousel>
    <!-- 核心技术区域 -->
    <h1 class="copy-right-title">核心技术驱动 版权检测</h1>
    <div v-for="item in copyRightList" :key="item.id" class="copy-right">
      <div v-if="item.site == 'right'" class="c-img">
        <img :src="item.img" alt="版权检测图" />
      </div>
      <div class="c-text">
        <p>{{ item.title }}</p>
        <p>{{ item.count }} +</p>
        <el-button type="primary" plain class="learn-more">了解更多</el-button>
      </div>
      <div v-if="item.site == 'left'" class="c-img">
        <img :src="item.img" alt="版权检测图" />
      </div>
    </div>
  </div>
</template>

<script setup>
// 轮播图区域
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
// 核心技术区域
import c1 from "../assets/imgs/copy_right_1.png";
import c2 from "../assets/imgs/copy_right_2.png";
import c3 from "../assets/imgs/copy_right_3.png";
import c4 from "../assets/imgs/copy_right_4.png";
const copyRightList = [
  {
    id: 1,
    title: "检测覆盖平台",
    count: "6000",
    img: c1,
    site: "left",
  },
  {
    id: 2,
    title: "检测版权作品",
    count: "13000000",
    img: c2,
    site: "right",
  },
  {
    id: 3,
    title: "发现侵权线索",
    count: "8000000",
    img: c3,
    site: "left",
  },
  {
    id: 4,
    title: "下架侵权APP",
    count: "2400",
    img: c4,
    site: "right",
  },
];
</script>

<style scoped lang="scss">
// 轮播图区域
.home-page {
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

  // 核心技术区域
  .copy-right-title {
    font-size: 46px;
    text-align: center;
    margin-top: 50px;
  }
  .copy-right {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 400px;
    margin-bottom: 10px;
    padding: 0 15%;
    .c-text {
      width: 400px;
      text-align: center;
      font-size: 30px;
      font-weight: 400;

      .learn-more {
        margin-top: 30px;
        padding: 16px 30px;
      }
    }
    .c-img {
      flex: 1;
      height: 100%;
      text-align: center;

      img {
        height: 100%;
      }
    }
  }
}
</style>
