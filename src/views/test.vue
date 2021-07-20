<template>
  <div>test</div>
  <h2
    class="
      text-3xl
      font-extrabold
      leading-9
      tracking-tight
      text-red-900
      sm:text-4xl sm:leading-10
    "
  >
    Ready to dive in?
    <br />
    <span class="text-indigo-600">Vite 2.x + Vue 3.x + Tailwind 2.x</span>
  </h2>
  <a-button type="primary">Primary Button{{ a }}</a-button>
</template>
<script setup lang="ts">
import { defineComponent, ref } from "vue";
import { Button } from "ant-design-vue";

const a = ref("");

function init() {
  console.log("123");
}
</script>
