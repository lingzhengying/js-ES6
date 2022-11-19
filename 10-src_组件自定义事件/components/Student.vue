<template>
    <div class="student">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <h2>{{number}}</h2>
        <button @click="add">点我number++</button>
        <button @click="sendStudentName">把学生名给APP</button>
        <button @click="unbind">解绑lzy事件</button>
        <button @click="death">销毁当前student组件的实例(vc)</button>
    </div>
</template>

<script>
    export default{
        name:'Student',
        data(){
            return{
                name:'张三',
                sex:'男',
                number:0
            }
        },
        methods: {
            add(){
                console.log('add回调被调用了');
                this.number++
            },
           sendStudentName(){
            // 触发student组件实例身上的lzy事件
            this.$emit('lzy',this.name,666,777,555)
            // this.$emit('demo')
           },
           unbind(){
            this.$off('lzy')
            // this.$off()
            
           },
           death(){
            this.$destroy() // 销毁了当前student组件的实例 销毁后所有student实例的自定义事件全部不奏效
           }
        },
    }
</script>

<style>
    .student{
        background-color: orange;
        padding: 5px;
        margin-top: 10px;
    }
</style>