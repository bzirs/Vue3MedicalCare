<script setup lang="ts">
import { useRouter } from 'vue-router';


const router = useRouter()
console.log(history);
const onClickLeft = () => {

  // TODO 点击左侧返回按钮
  const flag = history.state.back ?? true
  if (flag) return router.back()

  router.push('/')
}
const onClickRight = () => {
  // TODO 点击右侧文字按钮
}

// const emits = defineEmits < {
//   (e: 'handleRight'): void
// }>()

interface IProps {
  title?: string,
  rightText?: string
}

defineProps<IProps>()

</script>

<template>
  <van-nav-bar fixed left-arrow :title="title" :right-text="rightText" @click-left="onClickLeft"
    @click-right="$emit('handleRight', '123')"></van-nav-bar>
</template>

<style lang="scss" scoped>
:deep() {
  .van-nav-bar {
    &__arrow {
      font-size: 18px;
      color: var(--cp-text1);
    }

    &__text {
      font-size: 15px;
    }
  }
}
</style>
