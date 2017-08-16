<template>
  <div id="app">
    <m-header></m-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
export default {
    data(){
      return{

      }
    },
    components:{
      MHeader
    },
    created(){

    },
    methods:{

    }
}
</script>

<style lang="stylus" scoped>
</style>

