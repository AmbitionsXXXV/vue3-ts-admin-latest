import useCountStore from '../../store/counter';
<template>
  <div class="main">
    <h1>main: {{ counterStore.counter }} - {{ counterStore.doubleCounter }}</h1>
    <button @click="changeCounter">修改Counter</button>
    <button @click="resetCounter">还原Counter</button>
  </div>
</template>

<script setup lang="ts">
import useCountStore from "@/store/counter"

const counterStore = useCountStore()

function changeCounter() {
  counterStore.changeCounterAction(3636)
}

function resetCounter() {
  counterStore.$reset()
}
</script>

<style scoped>
.main {
  color: aquamarine;
}
</style>
