<template>
  <mt-tabbar fixed v-model="selected">
    <!-- <mt-tab-item id="首页">
      <img slot="icon" src="../assets/images/home.png" with:35px height:36px />
      首页
    </mt-tab-item> -->
    <mt-tab-item id="商品">
      <img slot="icon" src="../assets/images/orders.png" />
      商品
    </mt-tab-item>
    <mt-tab-item id="用户">
      <img slot="icon" src="../assets/images/team.png" />
      用户
    </mt-tab-item>
    <mt-tab-item id="订单">
      <img slot="icon" src="../assets/images/orders.png" />
      订单
    </mt-tab-item>
    <mt-tab-item id="代理">
      <img slot="icon" src="../assets/images/person.png" />
      代理
    </mt-tab-item>
    <mt-tab-item id="平台">
      <img slot="icon" src="../assets/images/person.png" />
      平台
    </mt-tab-item>
  </mt-tabbar>
</template>
<style>
.mint-tabbar {
  bottom: 0;
  height: 60px;
}
.mint-tabbar > .mint-tab-item.is-selected {
  background-color: transparent;
}
</style>
<script>
// import {mapState,mapActions,mapGetters} from 'vuex'

export default {
  data() {
    return {
      selected: "商品"
    };
  },
  watch: {
    selected: function (val, oldVal) {
      // 这里就可以通过 val 的值变更来确定
      switch (val) {
        // case "首页":
        //   this.$router.push("/");
        //   break;
        case "商品":
          this.$router.push("/productIndex");
          break;
        case "用户":
          this.$router.push("/user");
          break;
        case "订单":
          this.$router.push("/order");
          break;
        case "代理":
          this.$router.push("/agent");
          break;
        case "平台":
          this.$router.push("/platform");
          break;
      }
    }
  },
  methods: {}
};
</script>


