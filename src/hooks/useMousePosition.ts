import { onMounted, onUnmounted, ref } from "vue";
export default function() {
  const x = ref(1);
  const y = ref(1);
  const clickHander = (event: MouseEvent) => {
    x.value = event.pageX;
    y.value = event.pageY;
  };
  onMounted(() => {
    window.addEventListener("click", clickHander);
  });
  // 页面移除时，干掉这个点击事件
  onUnmounted(() => {
    window.removeEventListener("click", clickHander);
  });
  return {
    x,
    y,
  };
}
