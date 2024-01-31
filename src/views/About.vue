<template>
  <div class="about">
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
.mapp {
  width: 600px;
  height: 500px;
}
</style>
