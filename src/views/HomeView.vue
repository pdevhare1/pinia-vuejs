<template>
  <div class="home"></div>
  <counter />
  <btn />
  <hr />
  <div>this count is :{{ storeCount.EvenOrOdd }}</div>
  <hr />
  <div>
    <h4>Edit counter:</h4>
    <input v-model="storeCount.count" type="number" />
  </div>
</template>

<script setup>
import counter from "@/components/Counter.vue";
import btn from "@/components/Btn.vue";
import { useCounterStore } from "@/stores/counter";
const storeCount = useCounterStore();
</script>
