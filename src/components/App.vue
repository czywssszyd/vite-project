<template>
  <h2>计算属性和监视</h2>
  <fieldset>
    <legend>姓名操作</legend>
    姓氏: <input type="text" v-model="user.firstName" placeholder="请输入姓氏" /><br>
    名字: <input type="text" v-model="user.lastName" placeholder="请输入名字" /><br>
  </fieldset>
  <fieldset>
    <legend>计算属性和监视的演示</legend>
    姓名: <input type="text" v-model="fullName1" placeholder="显示姓名" /><br>
    姓名: <input type="text" v-model="fullName2" placeholder="显示姓名" /><br>
    姓名: <input type="text" v-model="fullName3" placeholder="显示姓名" /><br>
  </fieldset>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, ref, watch, watchEffect } from 'vue'
export default defineComponent ({
  name: 'App',
  setup() {
    // 定义一个响应式对象
    const user = reactive({
      firstName: '东方',
      lastName: '不败'
    })
    // 通过计算属性的方式，实现第一个姓名的显示
    // 计算属性的函数中只传入一个回调函数，表示的是get
    const fullName1 = computed(() => {
      return user.firstName + '_' + user.lastName
    })
    console.log('fullName1', fullName1) // 注意这个数据的格式，也是一个ref对象
    // 第二个姓名的显示,传入一个对象，包含set和get方法即可
    const fullName2 = computed({
      get () {
        return user.firstName + '_' + user.lastName
      },
      set (val: string) {
       const names = val.split('_')
       user.firstName = names[0]
       user.lastName = names[1]
      }
    })
    const fullName3 = ref('')
    // 使用监视
    // 第一个参数是要监听的对象， 第二个参数是一个回调，参数是第一个对象的属性，可以解构
    // watch(user, ({firstName, lastName}) => {
    //   fullName3.value = firstName + '_' + lastName
    // }, {
    //   immediate: true, // 默认执行一次，
    //   deep: true // 深度监听
    // })
    // watchEffect 本身就默认执行一次，不需要配immediate, 传入一个回调即可
    watchEffect(() => {
      fullName3.value = user.firstName + '_' + user.lastName
    })
    return {
      user,
      fullName1,
      fullName2,
      fullName3
    }
  }
})
</script>
<style lang="scss" scoped>
</style>