import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'test',
      component: require('@/components/test').default,
    },
    {
      path: '*',  
      redirect: '/',
    },
  ],
});
