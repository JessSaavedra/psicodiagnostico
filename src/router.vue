<script>
import { createRouter, createWebHistory } from 'vue-router';
import SCL90R from '@/components/SCL-90R/SCL90R.vue';
import IPDE from '@/components/IPDE-DSM4/IPDE.vue';
import Home from '@/components/Home.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/IPDE', name: 'IPDE', component: IPDE },
    { path: '/SCL-90R', name: 'SCL-90R', component: SCL90R },
  ]
});

export default router;
</script>