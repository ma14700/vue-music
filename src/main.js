// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'babel-polyfill'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import router from './router'
import 'common/stylus/index.styl'
import store from './store'

fastclick.attach(document.body)

Vue.use(VueLazyload, {
    loading: require('common/image/default.png')
})



new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})