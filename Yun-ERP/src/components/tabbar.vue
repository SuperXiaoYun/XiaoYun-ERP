<template>
  <mt-tabbar fixed v-model="selected">
    <mt-tab-item id="首页">
      <img slot="icon" src="../assets/images/home.png" with:35px height:36px />
      首页
    </mt-tab-item>
    <mt-tab-item id="商品">
      <img slot="icon" src="../assets/images/orders.png" />
      商品
    </mt-tab-item>
    <mt-tab-item id="用户">
      <img slot="icon" src="../assets/images/team.png" />
      用户
    </mt-tab-item>
    <mt-tab-item id="订单">
      <img slot="icon" src="../assets/images/person.png" />
      订单
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
      selected: "首页"
    };
  },
  watch: {
    selected: function(val, oldVal) {
      // 这里就可以通过 val 的值变更来确定
      switch (val) {
        case "首页":
          this.$router.push("/");
          break;
        case "商品":
          this.$router.push("/orderDetail");
          break;
        case "用户":
          this.$router.push("/teamBuilding");
          break;
        case "订单":
          this.$router.push("/personal");
          break;
      }
    }
  },
  methods: {}
};
</script>


