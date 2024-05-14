<template>
  <div class="flex">
    <div>{{ pizza.name }}</div>
  </div>
</template>
<script setup>
const props = defineProps({
  pizza: Object,
});
</script>
