import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JobDetails from '../views/jobs/JobDetails'
import ErrorPage from '../views/ErrorPage'
import EditJob from '@/views/jobs/EditJob.vue'
import AddJob from '../views/AddJob.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'Add',
    component: AddJob
  },
  {
    path: '/jobs',
    name: 'Edit',
    component: EditJob,
    props:true
  },
  {
    path: '/jobs/:id',
    name: 'jobdetails',
    component: JobDetails,
    props: true // ACCEPT ANY ROUTE PARAMS AS A PROPS
  },
  //REDIRECT
  {
    path: '/all-jobs', //old route
    redirect: '/jobs' //route to be redirected to
  },
  //catch 404 pages (ALL PAGES THAT ARE NOT ON THE ROUTE ARRAY)
  {
    path: '/:catchAll(.*)', //MUST BE THE SAME AS THIS
    name: '404',
    component: ErrorPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
