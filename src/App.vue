<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'
export default {
    data(){
      return{

      }
    },
    components:{
      MHeader,
      Tab
    },
    created(){

    },
    methods:{

    }
}
</script>

<style lang="stylus" scoped>
</style>

