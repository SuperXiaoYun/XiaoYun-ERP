<style lang="scss" scoped>
  @import "@/style/orderList.scss";
</style>
<script src="@/script/orderList.js"></script>
<template>
  <div id="div_order">

    <div class="select" @click="selectPlatform = true">
      <mt-cell title="选择平台" is-link>
        <span>{{currentPlatform?currentPlatform.label: '请选择平台'}}</span>
      </mt-cell>
    </div>
    <mt-popup v-model="selectPlatform" position="bottom" class="mint-popup">
      <mt-picker :slots="platformList" :visible-item-count="3" :show-toolbar="true" ref="platformPicker" value-key="label" value-value="value">
        <mt-button @click="confirmPlatform" class="sure">确认</mt-button>
      </mt-picker>
    </mt-popup>

    <div class="select" @click="selectStatus = true">
      <mt-cell title="选择状态" is-link>
        <span>{{currentStatus?currentStatus.label: '请选择状态'}}</span>
      </mt-cell>
    </div>
    <mt-popup v-model="selectStatus" position="bottom" class="mint-popup">
      <mt-picker :slots="statusList" :visible-item-count="3" :show-toolbar="true" ref="statusPicker" value-key="label" value-value="value">
        <mt-button @click="confirmStatus" class="sure">确认</mt-button>
      </mt-picker>
    </mt-popup>


    <ul v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
        style="position: relative;left: -20px;">
      <li v-for="item in orderList" style="list-style: none;height: 70px;">
        <table style="width: 100%;" bgcolor="white">
          <tr style="height: 60px;">
            <td><img :src="item.avatar" style="width: 30px;" /></td>
            <td style="text-align: left;"><span>{{item.phone}}<br /></span></td>
            <td>
              <mt-button type="primary" @click="vertify">审核通过</mt-button>
            </td>
          </tr>
        </table>
      </li>
    </ul>
  </div>
</template>
