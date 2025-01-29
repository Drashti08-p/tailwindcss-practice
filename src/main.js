import "./assets/input.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import { FontAwesomeIcon } from "./fontawesome"; // Import the configured Font Awesome
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);

app.mount("#app");
