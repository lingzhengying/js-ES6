<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group name="lzy" appear>
    <h1 v-show="!isShow" key="1">你好呀</h1>
    <h1 v-show="isShow" key="2">零征英</h1>
    </transition-group>
  </div>
</template>

<script>
    export default {
        name:'Text2',
        data() {
            return {
                isShow:true
            }
        },
    }
</script>

<style scoped>
    h1{
        background-color: orange;
    }

/* 进入的起点,离开的起点 */
   .lzy-leave,.lzy-leave-active{
    transform: translateX(-100%);
   }
    .lzy-enter-active,.lzy-leave-active{
        transition: 0.5s linear;
    }
   /* 进入的终点,离开的终点 */
   .lzy-enter-to,.lzy-leave{
    transform: translateX(0);
   }


</style>