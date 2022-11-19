<template>
    <div>
        <ul>
            <li :style="opacity">欢迎学习vue</li>
            <li>news001<input type="text"></li>
            <li>news002<input type="text"></li>
            <li>news003<input type="text"></li>
        </ul>
    </div>
</template>

<script>
    export default {
    name:'Mews',
    data(){
        return {
            opacity:1
        }
    },
    activated(){ // 激活的钩子
        this.timer = setInterval(() => {
          console.log('news组件被销毁了');
            this.opacity -= 0.01
            if(this.opacity <= 0) this.opacity = 1
        }, 16);
    },
    deactivated(){ // 取消激活的钩子
        clearInterval(this.timer)
    },
    }
</script>

<style>

</style>