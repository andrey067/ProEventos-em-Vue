import { createApp } from 'vue'
// import './style.css'
import '@fortawesome/fontawesome-free/css/all.css'
import App from './App.vue'
import filters from './helpers/filters';
import "vue-toastification/dist/index.css";
import Toast from "vue-toastification";
import router from './router/index';
import Popper from "vue3-popper";
import VueFlatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import '@popperjs/core';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css'
import VueElementLoading from "vue-element-loading";
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp(App);
app.component("Popper", Popper);

app.use(Toast, {
    transition: "Vue-Toastification__bounce",
    maxToasts: 20,
    newestOnTop: true
});
app.config.globalProperties.$filters = filters;
app.use(router);
app.use(VueFlatPickr);
app.use(BootstrapVue3)
app.component("VueElementLoading", VueElementLoading);
app.mount("#app");
