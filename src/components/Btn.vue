<template>
  <div class="btn">
    <button @click="storeCount.countMinus">-</button>
    <button @click="storeCount.countPlus">+</button>
  </div>
</template>
<script setup>
import { useCounterStore } from "@/stores/counter";
const storeCount = useCounterStore();
</script>
