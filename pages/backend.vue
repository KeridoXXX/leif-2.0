<template>
  <div class="flex flex-col gap-y-5">
    <PizzaEditableCard
      v-for="(pizza, index) in pizzadata"
      :key="index"
      :pizza="pizza"
    ></PizzaEditableCard>
  </div>
</template>

<script setup>
import { fetchPizzas } from "~/supabase";

const pizzadata = ref(null);

onMounted(async () => {
  pizzadata.value = await fetchPizzas();
});
</script>
