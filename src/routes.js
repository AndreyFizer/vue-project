import Home from './components/home.vue';
import Profile from './components/profile/profile.vue';
import Stocks from './components/stocks/stocks.vue';

export default [
  { path: '/', component: Home },
  { path: '/profile', component: Profile },
  { path: '/stocks', component: Stocks },
];