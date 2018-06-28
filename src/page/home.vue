<template>
  <div class="home">
    <div class="header">1111</div>
    <div class="asider">
      <el-menu router :default-active="$route.path"
               mode="vertical"
               class="el-menu-vertical-demo"
               background-color="#34495e"
               text-color="#fff"
               active-text-color="#ffd04b">
        <template v-for="(item, index) in menuList">
          <el-menu-item v-if="!item.children" :key="index" :index="item.path"><span slot="title">{{item.name}}</span></el-menu-item>
          <el-submenu v-else :key="index" :index="item.path">
            <template slot="title">{{item.name}}</template>
              <el-menu-item v-for="(itm, index) in item.children" :key="index" :index="itm.path">{{itm.name}}</el-menu-item>
          </el-submenu>
        </template>
      </el-menu>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MenuList from '@/router/routes-nav'

export default {
  name: 'home',
  created () {
    console.log(MenuList)
  },
  data () {
    return {
      menuList: MenuList
    }
  }
}
</script>

<style scoped lang="less">
</style>
