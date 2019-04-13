<template>
  <div class="HelloWorld">
       <el-button :plain="true" @click="openCenter">文字居中</el-button>

       <br>
       <br>

       <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>

      <br>
      <br>
      
      <el-button type="primary" @click="openFullScreen">loading效果</el-button>

      <br>
      <br>

      <div class="block">
        <span class="demonstration">查询时间</span>
        
        <el-date-picker
          v-model="value1"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
        ---
        <el-date-picker
          v-model="value2"
          align="right"
          type="date"
          placeholder="选择日期"
          :picker-options="pickerOptions1">
        </el-date-picker>
      </div>

      <br>
      <br>

     <el-upload
      class="upload-demo"
      drag
      :headers="importHeaders"
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
     </el-upload>

      <br>
      <br>

      <el-button @click="login">我是按钮</el-button>
  </div>
</template>

<script>
import { Loading } from 'element-ui';
export default {
    name: 'HelloWorld',
    data() {
      return {
        activeName2: 'first',
        pickerOptions1: {},
        value1: '',
        value2: '',
        importHeaders:{
            enctype:'multipart/form-data'
        },
        cart_list : [],
				check_list:[]
      };
    },
    methods: {
      openCenter() {
        this.$message({
          message: '居中的文字',
          center: true
        });
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      openFullScreen() {
         let options = { 
            fullscreen: true,
            background: "rgba(0, 0, 0, 0.8)",
            text: '拼命加载中'
        }
        Loading.service(options);
        setTimeout(() => {
          Loading.service(options).close(); 
        }, 1000);
      },
      login(){
        console.log(111);
        this.$http.post('/api/login').then(res=>{
          localStorage.set('token',res)
          location.replace('/index')
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
