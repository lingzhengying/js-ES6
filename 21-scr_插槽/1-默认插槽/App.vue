<template>
  <div class="container">
     <Category title="美食" :listData="foods">
      <img src="./assets/DSC_0227.jpg" alt="">
     </Category>
     <Category title="游戏" :listData="games">
      <ul>
        <li v-for="(g,index) in games" :key="index">{{g}}</li>
      </ul>
    </Category>
     <Category title="电影" :listData="films">
       <img src="./assets/DSC_0227.jpg" alt="">
      </Category>
  </div>
</template>


    
<script>
import Category from './components/Category.vue'

    export default {
   name:'App',
   components:{Category},
   data() {
    return {
        foods:['火锅','小龙虾','小虾米','牛排'],
       games:['穿越火线','斗罗大陆','劲舞团'],
       films:['《教父》','《特战荣耀》','《红海行动》']
    }
  }, 
}

</script>

<style >
.container{
  display: flex;
  justify-content: space-around; 
}
img{
  width: 100%;
  height: 50%;
}
</style>