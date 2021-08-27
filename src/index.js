import { getAPI } from './api/api.js';
import './css/main.css';
import header from './components/header';

header();

console.log(getAPI.upcoming());