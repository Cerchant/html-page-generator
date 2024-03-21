import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

// import 'bootstrap/dist/css/bootstrap.css';
// import Bootstrap from 'bootstrap/dist/js/bootstrap.esm';
// Vue.use(Bootstrap);
import 'bootstrap/dist/js/bootstrap.js';


import DraggableResizableVue from 'draggable-resizable-vue3';

const app = createApp(App)

app.use(DraggableResizableVue)

app.mount('#app')


//createApp(App).mount('#app')
