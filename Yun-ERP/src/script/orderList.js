import { mapState } from 'vuex'

export default {
  data() {
    return {
      selectPlatform: false,
      currentPlatform: {},
      selectStatus: false,
      currentStatus: {},
      orderList: [
        {
          userId: 1,
          phone: '186****5502',
          status:0,
          avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
        },
        {
          userId: 2,
          phone: '186****5502',
          status: 0,
          avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
        },
        {
          userId: 3,
          phone: '186****5502',
          status: 0,
          avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
        }
      ]
    }
  },
  created() {
    // 数据需在create生命周期中设定，否则picker中无法获取
    this.$store.state.platformData = [
      { label: 'zzz',value:0 },
      { label: 'xxx',value:0 },
      { label: 'ccc',value:0 },
      { label: 'awdfawfs', value: 0 },
      { label: 'xxasfvasx', value: 0 },
      { label: 'cxasxcc', value: 0 },
    ];

    this.$store.state.statusData = [
      { label: '审核中', value: 0 },
      { label: '已确认', value: 0 },
      { label: '已提交', value: 0 },
    ];
  },
  methods: {
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        let last = this.orderList[this.orderList.length - 1];
        for (let i = 1; i <= 10; i++) {
          this.orderList.push(last);
        }
        this.loading = false;
      }, 2500);
    },
    confirmPlatform() {
      this.currentPlatform = this.$refs.platformPicker.getValues()[0];
      this.selectPlatform = false;
    },
    confirmStatus() {
      this.currentStatus = this.$refs.statusPicker.getValues()[0];
      this.selectStatus = false;
    },
    vertify() {

    },
  },
  computed: {
    ...mapState([
      'platformData',
      'statusData'
    ]),
    platformList() {
      let dateSlots = [
        {
          flex: 1,
          values: this.platformData,
          className: 'slot1',
          textAlign: 'center'
        }
      ];
      return dateSlots
    },
    statusList() {
      let dateSlots = [
        {
          flex: 1,
          values: this.statusData,
          className: 'slot1',
          textAlign: 'center'
        }
      ];
      return dateSlots
    },
  },
  mounted: function () {
    String.prototype.pageTitle = '订单列表';
  }
}
