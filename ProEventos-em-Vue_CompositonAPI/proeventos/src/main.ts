import { createApp } from 'vue'
// import './style.css'
import '@fortawesome/fontawesome-free/css/all.css'
import App from './App.vue'
import filters from './helpers/filters';
// import BootstrapVue3 from 'bootstrap-vue-3'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import '@popperjs/core';
import "vue-toastification/dist/index.css";
import Toast from "vue-toastification";
import 'mdb-vue-ui-kit/css/mdb.min.css';

const app = createApp(App);
// app.use(BootstrapVue3)
app.use(Toast, {
    transition: "Vue-Toastification__bounce",
    maxToasts: 20,
    newestOnTop: true
});
app.config.globalProperties.$filters = filters;
app.mount("#app");
