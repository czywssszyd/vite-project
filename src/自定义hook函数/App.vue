<template>
<h2>自定义hook函数</h2>
<h2>x: {{x}}, y:{{y}}</h2>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
export default defineComponent ({
  name: 'App',
  // 需求：用户在页面中点击页面，把点击的位置的横纵坐标收集起来并展示出来
  setup() {
    const x = ref(1)
    const y = ref(1)
    const clickHander = (event: any)=> {
      x.value = event.pageX
      y.value = event.pageY
    }
    onMounted(() => {
      window.addEventListener('click', clickHander)
    })
    return {
      x,
      y
    }
  }
})
</script>
<style lang="scss" scoped>
</style>