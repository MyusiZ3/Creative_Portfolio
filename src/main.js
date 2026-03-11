import { createApp } from "vue";
import { MotionPlugin } from "@vueuse/motion";
import App from "./App.vue";
import router from "./router";
import "./main.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const app = createApp(App);

app.use(router);
app.use(MotionPlugin);

app.mount("#app");
