<template>
  <div>
    <Header></Header>
    <!-- 路由组件的出口 -->
    <router-view></router-view>
    <!-- 在Home、Search下显示，在Login、Register下隐藏 -->
    <Footer v-show="$router.meta.show"></Footer>
  </div>
</template>

<script>
//引入w
import Header from './components/Header'
import Footer from './components/Footer'
export default{
  name:'',
  components:{
    Header,
    Footer
  }
}
</script>

<style>

</style>
