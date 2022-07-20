import { createApp } from 'vue'
import './style.css'
import '@fortawesome/fontawesome-free/css/all.css'
import App from './App.vue'
import filters from './helpers/filters';
import "vue-toastification/dist/index.css";
import Toast from "vue-toastification";
import router from './router/index';
import Popper from "vue3-popper";

const app = createApp(App);
app.component("Popper", Popper);
app.use(Toast, {
    transition: "Vue-Toastification__bounce",
    maxToasts: 20,
    newestOnTop: true
});
app.config.globalProperties.$filters = filters;
app.use(router);
app.mount("#app");
