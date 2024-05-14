<template>
  <div class="flex">
    <div>{{ pizza.type }}</div>
  </div>
</template>
<script setup>
const props = defineProps({
  pizza: Object,
});
</script>
