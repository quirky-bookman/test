import { createApp } from "vue";
import "./style.css";
import router from "./router";
import ui from "@nuxt/ui/vue-plugin";
import App from "./App.vue";

const app = createApp(App);

app.use(router);

app.use(ui);

app.mount("#app");
