import {findPage, ADeleteById, ABatchDeleteById, addEntity} from "@/api/brand"
import DateOption from "../../utils/DateOptions";
import base from "../../utils/base64";

export default {
    data() {
        return {
            tableData: [],
            pickerOptions: DateOption.picker,
            value2: "",
            total: 0,
            searchParams: {
                currentPage: 1,
                pageSize: 5,
            },
            deleteId: 0,
            batchIds: [],
            dialogFormVisible: false,
            brandForm: {},
            imageUrl: "",
        }
    },
    created() {
        this.searchPage();
    },
    methods: {
        //新增
        async updateBrand() {
            await addEntity(this.brandForm);
            this.searchPage();
        },
        //获取图片base64
        async getStrBase(e) {
            this.imageUrl = await base.getImgBase(e.file);
            this.brandForm.brandLogo = this.imageUrl;
        },
        //批量删除
        async batchDeleteById() {
            await ABatchDeleteById(this.batchIds);
            this.searchPage();
        },
        //弹出批量删除框
        showBatchDeleteDialog() {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.batchDeleteById();
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });

        },
        //单个删除
        async deleteById() {
            await ADeleteById(this.deleteId);
            this.searchPage();
        },
        //重置
        reSetForm() {
            this.searchParams = {
                currentPage: 1,
                pageSize: 5,
            };
            this.value2 = ""
        },
        chooseTime() {
            this.searchParams.startTime = this.value2[0];
            this.searchParams.endTime = this.value2[1];
            console.log(this.searchParams)

        },
        //当前页发生改变时触发
        currentPageChange(page) {
            console.log(page)
            this.searchParams.currentPage = page;
            this.searchPage();
        },
        /**
         * 条件查询
         */
        // PageBySearch() {
        //     this.reSetForm();
        //     this.searchPage();
        // },
        /**
         * 查询所有
         * @param val
         */
        searchPage() {
            findPage(this.searchParams).then(response => {
                this.total = response.total;
                console.log(response.total)
                this.tableData = response.data;
                console.log(response.data)
            })
        },
//勾选改变状态,val代表勾选的数量
        selectChange(val) {
            this.batchIds = val.map(item => item.id);
            console.log(val)
        }
    }
}
