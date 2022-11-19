<template>
  <div>
    <h1>当前求和为：{{sum}}</h1>
    <h3>当前求和放大10倍后为:{{bigSum}}</h3>
    <h3>我在{{school}},学习{{subject}}</h3>
    <h3>下方组件的总人数是:{{PersonList.length}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button> 
    <button @click="decrement(n)">_</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="decrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
  export default {
      name:'Count',
      data() {
        return {
          n:1,//用户选择的数据
        }
      },
      computed:{
        // 借助mapState生成计算属性，从State中读取数据(对象写法)
        // ... mapState({sum:'sum',school:'school',subject:'subject'}),

        // 借助mapState生成计算属性，从State中读取数据(数组写法)
        ... mapState('countAbout',['sum','school','subject']),
        ... mapState('personAbout',['PersonList']),
        
        // 借助mapGetters生成计算属性，从getters中读取数据(对象写法)
        // ...mapGetters({bigSum:'bigSum'})

        // 借助mapGetters生成计算属性，从getters中读取数据(数组写法)
        ...mapGetters('countAbout',['bigSum'])
      },
      methods: {

        // 借助mapMutations生成对应的方法，方法会调用commit去联系mutations (对象写法)
        ...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),

        // 借助mapMutations生成对应的方法，方法会调用commit去联系mutations (数组写法)
        // ...mapMutations('countAbout',['JIA','JIAN']),

        // 借助mapActions生成对应的方法，方法会调用dispatch去联系actions (对象写法)
        ...mapActions('countAbout',{incrementOdd:'jiaOdd',decrementWait:'jiaWait'}),

        // 借助mapActions生成对应的方法，方法会调用dispatch去联系actions (数组写法)
        // ...mapActions('countAbout',['jiaOdd','jiaWait'])
      },
      mounted(){
        mapState({sum:'sum',school:'school',subject:'subject'})
      }
  }
</script>

<style>

</style>