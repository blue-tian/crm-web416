<template>
    <div class="brand-wrapper">
        <!--        搜索框-->
        <div class="search-form">
            <el-form :inline="true" class="demo-form-inline" size="mini">
                <el-form-item label="品牌名称">
                    <el-input placeholder="品牌名称" style="width: 150px" v-model="searchParams.brandName"></el-input>
                </el-form-item>
                <el-form-item label="开始时间">
                    <div class="block">
                        <el-date-picker
                                value-format="yyyy-MM-dd HH:mm:ss"
                                align="center"
                                style="width: 200px"
                                v-model="value2"
                                @change="chooseTime"
                                type="datetimerange"
                                unlink-panels
                                range-separator="-"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                                :picker-options="pickerOptions">
                        </el-date-picker>
                    </div>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="searchPage">查询</el-button>
                    <el-button type="warning" @click="reSetForm">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
        <!--        操作按钮-->
        <div class="update-button">
            <el-button type="primary" icon="el-icon-edit" size="mini" @click="brandForm={},imageUrl=``,dialogFormVisible=true">新增
            </el-button>
            <el-button type="success" icon="el-icon-edit" size="mini" :disabled="this.batchIds.length!=1">修改</el-button>
            <el-button type="danger" icon="el-icon-delete" size="mini" :disabled="this.batchIds.length<=0"
                       @click="showBatchDeleteDialog">删除
            </el-button>
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
                        prop="brandName"
                        label="品牌名称"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="brandDesc"
                        label="品牌描述"
                        align="center">
                </el-table-column>
                <el-table-column
                        align="center"
                        prop="brandSite"
                        label="品牌站点">
                    <template v-slot="bing">
                        <a :href="bing.row.brandSite">{{bing.row.brandSite}}</a>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="brandLogo"
                        label="品牌logo"
                        align="center">
                    <template v-slot="bing">
                        <img :src="bing.row.brandLogo" alt="" height="35px">
                    </template>
                    <template>
                        <el-avatar size="small" src="brandLogo"></el-avatar>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="操作"
                        align="center">

                    <template v-slot="bing">
                        <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
                        <el-popconfirm
                                confirm-button-text='确定'
                                cancel-button-text='取消'
                                icon="el-icon-info"
                                icon-color="red"
                                title="是否删除？"
                                placement="top"
                                @confirm="deleteById"
                        >
                            <el-button slot="reference" type="danger"
                                       icon="el-icon-delete" size="mini" style="margin-left: 5px"
                                       @click="deleteId=bing.row.id"></el-button>
                        </el-popconfirm>
                    </template>


                </el-table-column>
            </el-table>
        </div>
        <!--     分页-->
        <div class="page-box">
            <el-pagination
                    :page-size="searchParams.pageSize"
                    :current-page="searchParams.currentPage"
                    :total="total"
                    @current-change="currentPageChange"
                    background
                    layout="prev, pager, next"
            >
            </el-pagination>
        </div>
        <!--        弹框-->
        <div class="form-data">
            <el-dialog title="实体操作" :visible.sync="dialogFormVisible" width="33%">
                <el-form ref="form"  label-width="80px" size="small">
                    <el-form-item label="品牌名称">
                        <el-input v-model="brandForm.brandName"></el-input>
                    </el-form-item>
                    <el-form-item label="品牌站点">
                        <el-input v-model="brandForm.brandSite"></el-input>
                    </el-form-item>
                    <el-form-item label="品牌图片">
                        <el-upload
                                class="avatar-uploader"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :show-file-list="false"
                                :http-request="getStrBase"
                        >
                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="品牌描述">
                        <el-input v-model="brandForm.brandDesc"></el-input>
                    </el-form-item>
                </el-form>

                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false" size="small">取 消</el-button>
                    <el-button type="primary" @click="updateBrand(),dialogFormVisible = false" size="small">确 定</el-button>
                </div>
            </el-dialog>
        </div>

    </div>
</template>

<script src="../brand/index.js">
</script>

<style  lang="scss" src="../brand/index.scss">

</style>