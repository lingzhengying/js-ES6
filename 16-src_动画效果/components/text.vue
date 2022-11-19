<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="lzy" appear>
    <h1 v-show="isShow">你好呀</h1>
    </transition>
  </div>
</template>

<script>
    export default {
        name:'Text',
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

    .lzy-enter-active{
        animation: lzy 1s linear;
    }

    .lzy-leave-active{
        animation: lzy 1s reverse;
    }

    @keyframes lzy {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>