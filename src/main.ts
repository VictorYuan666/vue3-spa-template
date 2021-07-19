import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/router";
import antd from "ant-design-vue";
import "./index.css";

const app = createApp(App);

app.use(antd);
app.use(router);

app.mount("#app");
