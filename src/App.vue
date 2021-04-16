<template>
    <!--
    vue 脚手架创建项目的方式
    1.WebStorm创建
    2.vue ui 在可视化窗口勾选
    3.执行命令：vue create 项目名称

    脚手架项目文件夹
    src 编码的地方
    assets：放置静态资源
    components: 放置小组件
    router:表示路由
    store:表示状态管理
    views：表示用户展示的页面
    App.vue:表示我们的页面
    main.js:表示项目的入口
    .gitignore:表示忽略文件
    package.json:类似maven工程的pom文件

    SPA单页面应用程序
    使用vue脚手架创建的项目是单页面应用程序，整个项目只用一个页面 index.html
    -->
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        data() {

        },
        methods: {},
    }
</script>

<style lang="scss">
    html, body, #app {
        height: 100%;
        width: 100%
    }
</style>
