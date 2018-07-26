import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'Home',
      component: Home
    },
  ]
})
