import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './style.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHome, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
library.add(faLinkedin, faHome, faFacebook, faArrowRightFromBracket, faWhatsapp);

createApp(App).use(router).use(store).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
