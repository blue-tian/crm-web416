<template>
        <div class="brand-wrapper">
            <!--        搜索框-->
            <div class="search-form">
                <el-form :inline="true" class="demo-form-inline" size="mini">
                    <el-form-item label="审批人">
                        <el-input placeholder="审批人" style="width: 150px"></el-input>
                    </el-form-item>
                    <el-form-item label="开始时间">
                        <div class="block">
                            <el-date-picker
                                    align="center"
                                    style="width: 200px"
                                    v-model="value2"
                                    type="datetimerange"
                                    unlink-panels
                                    range-separator="-"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期"
                                    :picker-options="pickerOptions">
                            </el-date-picker>
                        </div>
                    </el-form-item>
                    <el-form-item label="活动区域">
                        <el-select placeholder="活动区域" style="width: 150px">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary">查询</el-button>
                        <el-button type="warning">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <!--        操作按钮-->
            <div class="update-button">
                <el-button type="primary" icon="el-icon-edit" size="mini">新增</el-button>
                <el-button type="success" icon="el-icon-edit" size="mini">修改</el-button>
                <el-button type="danger" icon="el-icon-delete" size="mini">删除</el-button>
            </div>
            <!--        表格数据-->
            <div class="data-box">
                <el-table
                        ref="multipleTable"
                        :data="tableData"
                        tooltip-effect="dark"
                        style="width: 100%;height: 100%"
                        @selection-change="selectChange">
                    <el-table-column
                            align="center"
                            type="selection"
                            width="55">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="品牌名称"
                            align="center">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="品牌描述"
                            align="center">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="品牌logo"
                            align="center">
                        <template>
                            <el-avatar size="small" src="aaa"></el-avatar>
                        </template>
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="address"
                            label="品牌站点"
                            show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="操作"
                            align="center">
                        <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
                        <el-button type="danger" icon="el-icon-delete" size="mini"></el-button>
                    </el-table-column>
                </el-table>
            </div>

            <div class="page-box">
                <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="1000">
                </el-pagination>
            </div>
        </div>
</template>

<script>
import {findPage} from "@/api/brand"
    export default {
        data() {
            return {
                tableData: [],
                pickerOptions: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                value2: '',
                total:0,
                searchParams: {
                    currentPage: 1,
                    pageSize: 5,
                }
            }
        },
        created() {
            this.searchPage();
        },
        methods: {
            /**
             * 查询所有
             * @param val
             */
            searchPage(){
                findPage(this.searchParams);
            },

            selectChange() {

            }
        }
    }
</script>

<style scoped lang="scss">
    .el-form-item--mini.el-form-item, .el-form-item--small.el-form-item{
        margin-bottom: 0px;
    }

    .update-button{
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .page-box{
        margin-top: 10px;
        text-align: center;
    }
</style>