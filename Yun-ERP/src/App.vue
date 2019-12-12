<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <mt-header :title="title">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
    </mt-header>
    <router-view />
    <myTabbar></myTabbar>
  </div>
</template>

<script scoped>
 import myTabbar from "@/components/tabbar.vue";

  export default {
    data() {
      return {
        title: ''
      };
    },
    components: {
      myTabbar
    },
    mounted: function () {
      this.title = String.prototype.pageTitle;
    }
  };
</script scoped>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
</style>
