<style lang="scss" scoped>
@import "@/style/productIndex.scss";
</style>
<script src="@/script/productIndex.js"></script>
<template>
  <div id="div_product">
    <div class="div_add_prouduct">
      <mt-field label="商品名称" placeholder="请输入商品名称" v-model="form.name"></mt-field>
      <mt-field label="商品描述" placeholder="请输入商品描述" v-model="form.description"></mt-field>
      <mt-field label="产品策略" type="number" placeholder="请输入产品策略" v-model="form.category"></mt-field>
      <mt-field label="价格" type="number" placeholder="请输入价格" v-model="form.price"></mt-field>
      <mt-field label="一级价格" type="number" placeholder="请输入一级价格" v-model="form.gradeoneprice"></mt-field>
      <mt-field label="二级价格" type="number" placeholder="请输入二级价格" v-model="form.gradetwoprice"></mt-field>
      <mt-field label="三级价格" type="number" placeholder="请输入三级价格" v-model="form.gradethreeprice"></mt-field>
      <mt-field label="代理商价格" type="number" placeholder="请输入代理商价格" v-model="form.agentprice"></mt-field>
      <mt-field label="状态" type="number" placeholder="请输入产品状态" v-model="form.status"></mt-field>
      <mt-button id="btn_addProduct" size="small" @click="submit">增加产品</mt-button>
    </div>
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
      style="position: relative;left: -20px;"
    >
      <li v-for="item in productList" style="list-style: none;height: 70px;">
        <table style="width: 100%;" bgcolor="white">
          <tr style="height: 60px;">
            <td>
              <img :src="item.imgurl" style="width: 30px;" />
            </td>
            <td style="text-align: left;">
              <span>{{item.name}}</span>
            </td>
            <td>
              <button>上架</button>
              <button>下架</button>
              <button>删除</button>
            </td>
          </tr>
        </table>
      </li>
    </ul>
  </div>
</template>
