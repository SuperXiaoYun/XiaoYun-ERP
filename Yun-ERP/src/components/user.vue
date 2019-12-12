<style lang="scss" scoped>
@import "@/style/user.scss";
</style>
<script src="@/script/user.js"></script>
<template>
  <div id="div_user">
    <div class="div_user_search">
      <table style="width：100%;" bgcolor="white">
        <tr style="height: 30px;">
          <td>
            <mt-picker :slots="slots" @change="onValuesChange" name="plantformpicker"></mt-picker>
          </td>
          <td>
            <mt-picker :slots="slots" @change="onValuesChange" name="statauspikcer"></mt-picker>
          </td>
        </tr>
      </table>
    </div>
    <div class="div_user_list">
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
        style="position: relative;left: -20px;"
      >
        <li v-for="item in userList" style="list-style: none;height: 70px;">
          <table style="width: 100%;" bgcolor="white">
            <tr style="height: 60px;">
              <td style="text-align: center;">
                <span>{{item.id}}</span>
              </td>
              <td style="text-align: center;">
                <span>{{item.plantformname}}</span>
              </td>
              <td>
                <span>>>更多信息</span>
              </td>
            </tr>
          </table>
        </li>
      </ul>
    </div>
  </div>
</template>
