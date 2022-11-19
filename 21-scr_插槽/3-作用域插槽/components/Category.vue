<template>
  <div class="Category">
    <h3>{{title}}分类</h3>
    <slot :games='games'>我是默认插槽1</slot>
  </div>
</template>

<script>
export default {
 name:'Category',
props:['title'],
   data() {
    return {
       games:['穿越火线','斗罗大陆','劲舞团']
    }
  }, 
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