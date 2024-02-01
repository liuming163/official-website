<template>
  <div class="enterprise-development">
    <div class="top">
      <img src="../assets/imgs/banner_6.png" />
    </div>
    <h1>发展历程</h1>
    <ul class="news-container">
      <li v-for="(item, index) in newsList" :key="index" class="dev-history">
        <div class="content">
          <p class="content-title">{{ item.title }}</p>
          <p>{{ item.introduce }}</p>
        </div>
        <div class="time">
          <p>{{ item.date }}</p>
          <span>{{ item.year }}</span>
        </div>
        <div class="circle">
          <img src="../assets/imgs/circle.png" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const newsList = [
  {
    id: "001",
    title: "公司参与多项热播剧",
    introduce:
      "公司参与多项热播剧工作，助合作方维权200部",
    date: "01-14",
    year: "2024",
  },
  {
    id: "002",
    title: "通过高新企业认证",
    introduce:
      "公司通过高新企业认证，提升公司形象，利于开拓国内外市场",
    date: "05-24",
    year: "2023",
  },
  {
    id: "003",
    title: "获取多项软著证书",
    introduce:
      "公司获取多项软著证书，彰显公司的技术实力和价值",
    date: "09-02",
    year: "2022",
  },
  {
    id: "004",
    title: "申请专利100+",
    introduce:
      "公司成功申请专利100+，保护知识产权，维护公司利益",
    date: "05-24",
    year: "2022",
  },
];
</script>

<style scoped lang="scss">
.enterprise-development {
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

  h1 {
    text-align: center;
    margin: 50px auto;
  }

  .news-container {
    overflow: hidden;
    margin-bottom: 0;
    padding: 10px 16%;
    position: relative;

    &::before {
      position: absolute;
      content: "";
      top: 70px;
      left: 50%;
      width: 1px;
      height: calc(100% - 140px);
      background-color: #707070;
    }
  }

  .dev-history {
    width: 55.6%;
    height: 120px;
    float: left;
    color: #333;
    text-align: right;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;

    &:hover {
      color: #1e73be;
      border: 1px solid #1e73be;
      cursor: pointer;
    }

    .content {
      width: 60%;
      float: left;
      padding: 20px 0;

      .content-title {
        margin-bottom: 10px;
      }
    }

    .time {
      width: 20%;
      float: left;
      padding: 10px 0;

      p {
        font-size: 30px;
        margin: 5px 0;
      }
    }

    .circle {
      width: 20%;
      height: 100%;
      float: left;
      position: relative;

      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 20px;
        height: 20px;
      }
    }

    &:nth-of-type(2n) {
      float: right;
      text-align: left;

      .content {
        float: right;
      }

      .time {
        float: right;
      }

      .circle {
        float: right;
      }
    }
  }
}
</style>
