<template>
  <div class="about">
    <div class="top">
      <img src="../assets/imgs/banner_3.png" />
    </div>
    <h1>公司简介</h1>
    <div class="info">
      <div class="left">
        <p>
          版权保护，又称著作权，最终目的不是“如何防止使用”，而是“如何控制使用”，版权法的实质是一种控制作品使用的机制。国内传统模式下版权保护面临确权、监控、取证、版税结算等众多痛点。版权保护全流程主要有确权、监控、取证、维权四个步骤，当前国内版权保护模式下在各个流程中均体现出效率低成本高等问题。在监控、取证方面依靠人工的传统模式也产生了人工效率低与互联网传播效率高而不适应的问题。目前，新媒体技术快速发展，微信、抖音、快手等新媒体平台打破了传统的信息传播方式。网络在给人们带来便利的同时，也带来了一些问题，其中最为严重的就是侵权问题。且在文字/视频/音频方向各大平台都有很严重的侵权行为发生。同时由于网络文字/视频/音频作品具有可拷贝和再分发的特性，网络中出现大量的侵权行为。
        </p>
        <p>
          和晞科技是一家提供基于人工智能+大数据+内容指纹库等核心技术驱动的版权维权和内容安全服务及解决方案。打造满足政府监管、IP权利人维权、平台过滤的版权开放平台。以版权监测、版权存证、电子取证及版权运营等业务服务企业。以版权内容为核心，依托海量内容搜索引擎技术、云计算及版权大数据可视化分析技术，致力于为行业打造版权监测保护体系提供保障。
        </p>
      </div>
      <div class="right">
        <img src="../assets/imgs/banner_4.png" />
      </div>
    </div>
    <h1>联系方式</h1>
    <!-- 设置放置地图的ref -->
    <div id="map" class="mapp"></div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
// 百度地图BMap构造函数
let BMap = null;
onMounted(() => {
  BMap = window.BMap;
  var map = new BMap.Map("map"); // 创建地图实例
  var point = new BMap.Point(116.325194, 39.717693); // 创建点坐标
  map.centerAndZoom(point, 18); // 初始化地图，设置中心点坐标和地图级别
  map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
  var marker = new BMap.Marker(point); // 创建标注
  map.addOverlay(marker); // 将标注添加到地图中
  var opts = {
    width: 100, // 信息窗口宽度
    height: 70, // 信息窗口高度
    title: "北京和晞科技有限公司", // 信息窗口标题
  };
  var infoWindow = new BMap.InfoWindow(
    `<span>地址: 北京市大兴区首开万科中心1313<span>`,
    opts
  ); // 创建信息窗口对象
  map.openInfoWindow(infoWindow, map.getCenter()); // 打开信息窗口
});
</script>

<style scoped lang="scss">
.about {
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

  .info {
    display: flex;
    padding: 0 10%;

    .left {
      flex: 1;
      padding-right: 100px;
      font-size: 18px;
      line-height: 40px;
      p {
        margin-bottom: 20px;
      }
    }

    .right {
      width: 460px;

      img {
        width: 100%;
      }
    }
  }

  .mapp {
    width: 80%;
    height: 500px;
    text-align: center;
    margin: 10px auto;
  }
}
</style>
