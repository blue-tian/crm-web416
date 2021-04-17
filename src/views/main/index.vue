<template>
    <div class="main-wrapper">
        <el-container>
            <el-aside width="200px">
                <div class="el-aside-log">
                    <img src="@/assets/pcr.gif" alt="" width="35px" height="35px">
                    <span>工会后台系统</span>
                </div>
                <el-scrollbar>
                    <el-menu default-active="1"
                             class="el-menu-vertical-demo">
                        <el-menu-item index="1">
                            <i class="el-icon-menu"></i>
                            <span slot="title">系统首页</span>
                        </el-menu-item>
                        <el-submenu index="2">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>商品相关</span>
                            </template>
                            <el-menu-item index="2-1">
                                <i class="el-icon-menu"></i>
                                <span slot="title">品牌管理</span>
                            </el-menu-item>
                            <el-menu-item index="2-2">
                                <i class="el-icon-menu"></i>
                                <span slot="title">分类管理</span>
                            </el-menu-item>
                            <el-menu-item index="2-3">
                                <i class="el-icon-menu"></i>
                                <span slot="title">商品管理</span>
                            </el-menu-item>
                        </el-submenu>
                        <el-submenu index="3">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>员工相关</span>
                            </template>
                            <el-menu-item index="3-1">
                                <i class="el-icon-menu"></i>
                                <span slot="title">部门管理</span>
                            </el-menu-item>
                            <el-menu-item index="3-2">
                                <i class="el-icon-menu"></i>
                                <span slot="title">员工管理</span>
                            </el-menu-item>
                        </el-submenu>
                        <el-submenu index="4">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>系统管理</span>
                            </template>
                            <el-menu-item index="4-1">
                                <i class="el-icon-menu"></i>
                                <span slot="title">角色管理</span>
                            </el-menu-item>
                            <el-menu-item index="4-2">
                                <i class="el-icon-menu"></i>
                                <span slot="title">权限管理</span>
                            </el-menu-item>
                            <el-submenu index="4-3">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span>日志相关</span>
                                </template>
                                <el-menu-item index="4-3-1">
                                    <i class="el-icon-menu"></i>
                                    <span slot="title">登陆日志</span>
                                </el-menu-item>
                                <el-menu-item index="4-3-2">
                                    <i class="el-icon-menu"></i>
                                    <span slot="title">操作日志</span>
                                </el-menu-item>
                            </el-submenu>
                        </el-submenu>
                    </el-menu>
                </el-scrollbar>
            </el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main>
                    <div class="body-wrapper">
                        <router-view/>
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>

    export default {
        name: "index"
    }
</script>

<style scoped lang="scss">
    .el-aside-log {
        height: 60px;
        line-height: 60px;
        text-align: center;
        background-color: #409EFF;

        img {
            height: 35px;
            width: 35px;
            border-radius: 50%;
            vertical-align: middle;
            margin-right: 8px;
        }

        span {
            font-weight: 700;
            font-family: "微软雅黑 Light";
        }

    }

    .main-wrapper {
        height: 100%;
        width: 100%;

    }

    .el-header {
        background-color: #409EFF;
        color: #606266;;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        color: #606266;;

        .el-scrollbar {
            height: calc(100% - 60px);
        }
    }

    .el-main {
        background-color: #DCDFE6;
        color: #606266;
        padding: 5px 0 0 5px;

    }

    .body-wrapper {
        width: 100%;
        background-color: #F2F6FC;
        padding: 5px 0 0 5px;
        box-sizing: border-box;
    }

    .el-container {
        margin-bottom: 40px;
        height: 100%;
        width: 100%;
    }

</style>