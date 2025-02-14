import './assets/main.css'
import './assets/main.scss';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faLightbulb, faCubes, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Importe os estilos globais do Vuetify

const vuetify = createVuetify();

library.add(faLightbulb, faCubes, faLaptopCode);

import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(vuetify);

app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app')
