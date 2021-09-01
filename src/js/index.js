import '../css/main.css';

import router from './router';
import './api/getTitle';


window.addEventListener("DOMContentLoaded", () => {
    router(window.location.pathname);
})