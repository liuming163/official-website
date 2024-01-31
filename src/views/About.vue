<template>
  <div class="about">
    <!-- 设置放置地图的ref -->
    <div class="mapp" ref="baiduRef"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
// 地图嵌入
const baiduRef = ref(null);
const map = ref(null);
const point = ref(null);
const marker = ref(null);

const initMap = (lng = 116.325194, lat = 39.717693) => {
  map.value = new BMap.Map(baiduRef.value); //新建一个map地图实例
  point.value = new BMap.Point(lng, lat); //创建点
  //   console.log(point.value, 858585);
  marker.value = new BMap.Marker(point.value); //做标记

  map.value.centerAndZoom(point.value, 15);
  map.value.enableScrollWheelZoom(true); //滚轮缩放
  map.value.addOverlay(marker.value); //在地图上显示标记点
  //   样式id，设置样式的自定义
  map.value.setMapStyleV2({
    styleId: "1fb853a740649182c004c7f05e3f1ac7",
  });

  //   点击标注监听事件
  marker.value.addEventListener("click", function (e) {
    alert("您点击了标注");
    console.log(e, 888888888);
  });
};

onMounted(() => {
  initMap();
});
</script>

<style scoped lang="scss">
.mapp {
  width: 600px;
  height: 500px;
}
</style>
