<template>
  <div>
    <PizzaCard
      v-for="(pizza, index) in pizzadata"
      :key="index"
      :pizza="pizza"
    ></PizzaCard>
  </div>
</template>

<script setup>
import { fetchPizzas } from "../supabase.js";

const pizzadata = ref(null);

onMounted(async () => {
  pizzadata.value = await fetchPizzas();
});
</script>
