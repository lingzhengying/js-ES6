<template>
  <div class="Category">
    <h3>{{title}}分类</h3>
    <slot name="center">我是默认插槽1</slot>
    <slot name="footer">我是默认插槽2</slot>
  </div>
</template>

<script>
export default {
 name:'Category',
props:['listData','title']
}
</script>

<style>
.Category{
    background-color: skyblue;
    width: 200px;
    height: 300px;
}
h3{
  background-color: orange;
  text-align: center;
}
</style>