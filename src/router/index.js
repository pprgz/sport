import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Movie from '../views/Movie.vue';
import Search from '../views/Search.vue';
const routes = [
  { path: '/', component: Home },
  { path: '/movie/:id', component: Movie },
  { path: '/Search', component: Search}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
