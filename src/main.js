import { createApp } from "vue";
// 重置样式
import "./assets/css/initialization.css";
import router from "./router";
import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.mount("#app");
