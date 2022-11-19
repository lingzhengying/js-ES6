<template>
  <div class="container">
     <Category title="美食" :listData="foods" >
      <img slot="center" src="./assets/DSC_0227.jpg" alt="">
      <a slot="footer" href="http://www.baidu.com">更多美食</a>
     </Category>
     <Category title="游戏" :listData="games">
      <ul slot="center">
        <li v-for="(g,index) in games" :key="index">{{g}}</li>
      </ul>
      <div class="foot" slot="footer">
         <a href="http://www.baidu.com">单机游戏</a>
       <a  href="http://www.baidu.com">网络游戏</a>
      </div>
    </Category>
     <Category title="电影" :listData="films">
       <img slot="center" src="./assets/DSC_0227.jpg" alt="">
       <template v-slot:footer>
         <div class="foot">
         <a href="http://www.baidu.com">经典</a>
       <a  href="http://www.baidu.com">热门</a>
       <a  href="http://www.baidu.com">推荐</a>
      </div>
       </template>
      <h4 slot="footer">欢迎前来观影</h4>
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
.container,.foot{
  display: flex;
  justify-content: space-around; 
}
img{
  width: 100%;
  height: 50%;
}
h4{
  text-align: center;
}

</style>