<template>
  <div>
    <HeroVideo />
  </div>
  <div class="">
    <LimitedPizzaBlock :pizzas="limitedPizzas" />
  </div>
  <div class="">
    <LunchPizzaBlock :pizzas="lunchPizzas" />
  </div>
</template>

<script setup>
import { fetchPizzas } from "../supabase.js";

const pizzadata = ref(null);

onMounted(async () => {
  pizzadata.value = await fetchPizzas();
});

const limitedPizzas = computed(() => {
  return pizzadata.value?.filter((pizza) => pizza.limiteditem === true);
});

const lunchPizzas = computed(() => {
  return pizzadata.value?.filter((pizza) => pizza.limiteditem === true);
});
</script>
