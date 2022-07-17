import { createApp } from "vue";
import App from "./App.vue";
import '@fortawesome/fontawesome-free/css/all.css'
import filters from "./helpers/filters";

const app = createApp(App);
app.config.globalProperties.$filters = filters;
app.mount("#app");
