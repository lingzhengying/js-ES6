<template>
    <ul class="todo-main">
    <transition-group name="lzy" appear="">
        <MyItem 
        v-for="todoObj in todos" 
        :key="todoObj.id" 
        :todo='todoObj' 
        />
    </transition-group>
    </ul>
</template>

<script>
import MyItem from './MyItem'
export default {
    name:'MyList',
    components:{MyItem},
    props:['todos']
}
</script>

<style scoped>
.todo-main{
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
}
.todo-empty{
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
}
    .lzy-enter-active{
        animation: lzy 1s linear;
    }

    .lzy-leave-active{
        animation: lzy 0.1s reverse;
    }

    @keyframes lzy {
        from{
            transform: translateX(-10%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>
