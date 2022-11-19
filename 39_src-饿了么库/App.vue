<template>
  <div>
   <button>原生按钮</button>
 <input type="text">
 <r-row>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
</r-row>
<div class="block">
    <span class="demonstration">默认</span>
    <d-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </d-date-picker>
  </div>

  <u-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :before-remove="beforeRemove"
  multiple
  :limit="3"
  :on-exceed="handleExceed"
  :file-list="fileList">
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="u-upload__tip">只能上传jpg/png文件,且不超过500kb</div>
</u-upload>

<r-row>
  <el-button icon="el-icon-search"></el-button>
  <el-button type="primary" icon="el-icon-edit" circle></el-button>
  <el-button type="success" icon="el-icon-check" circle></el-button>
  <el-button type="info" icon="el-icon-message" circle></el-button>
  <el-button type="warning" icon="el-icon-star-off" circle></el-button>
  <el-button type="danger" icon="el-icon-delete" circle></el-button>
</r-row>

</div>
</template>


    
<script>
  export default {
   name:'App',
}

</script>

<style >

</style>