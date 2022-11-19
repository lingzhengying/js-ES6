<template>
   <div>
    <Test/>
    <Test2/>
    <Test3/>
  </div>
</template>

<script>
  import Test from './components/text'
  import Test2 from './components/text2'
  import Test3 from './components/text3'
    export default {
      name:'App',
      components:{Test,Test2,Test3},
    }
</script>

<style>

</style>