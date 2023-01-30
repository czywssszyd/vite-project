
import { defineComponent, ref } from 'vue'
// 发送ajax请求
export default function(url: string) {
  // 加载的状态
  const loading = ref(true)
  // 请求成功的数据
  const data = ref(null)
  // 错误信息
  const errorMsg = ref('')
  // 发送请求
  fetch(url).then((res) => {
    console.log(res)
  }).catch(error =>{

  })
  return {
    loading,
    data,
    errorMsg
  }
}