import { mapState } from 'vuex'

export default {
    data() {
        return {
            selectPlatform: false,
            currentPlatform: {},
            selectStatus: false,
            currentStatus: {},
            agentList: [
                {
                    id: 1,
                    phone: '18976579009',
                    name: 'agent1',
                },
                {
                    id: 1,
                    phone: '18976579009',
                    name: 'agent1',
                },
                {
                    id: 1,
                    phone: '18976579009',
                    name: 'agent1',
                }
            ]
        }
    },
    created() {
        // 数据需在create生命周期中设定，否则picker中无法获取
        this.$store.state.platformData = [
            { label: 'zzz', value: 0 },
            { label: 'xxx', value: 0 },
            { label: 'ccc', value: 0 },
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
                let last = this.agentList[this.orderList.length - 1];
                for (let i = 1; i <= 10; i++) {
                    this.agentList.push(last);
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
