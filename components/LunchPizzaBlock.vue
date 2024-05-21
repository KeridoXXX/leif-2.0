<template>
  <div>
    <div class="text-center">
      <h2>Lunch Items</h2>
      <h5>All are 65,-</h5>
    </div>
    <!-- <div><PizzaCard></PizzaCard></div> -->
  </div>
</template>
<script setup>
const props = defineProps({
  pizzas: Array,
});
</script>
