import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import CreatePostView from '../views/CreatePostView.vue';
import PostDetailView from '../views/PostDetailView.vue';
import TagView from '@/views/TagView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/create',
    name: 'CreatePost',
    component: CreatePostView,
  },
  {
    path: '/post/:id',
    name: 'PostDetail',
    component: PostDetailView,
    props: true,
  },
  {
    path: '/tags/:tag',
    name: TagView,
    component: TagView,
    props: true
  }
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
