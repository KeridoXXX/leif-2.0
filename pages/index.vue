<template>
  <div>
    <HeroVideo />
  </div>
  <div v-if="lunchTime" class="">
    <LunchPizzaBlock :pizzas="lunchPizzas" />
  </div>
  <div class="">
    <LimitedPizzaBlock :pizzas="limitedPizzas" />
  </div>
</template>

<script setup>
import { fetchPizzas } from "../supabase.js";

const pizzadata = ref(null);
const lunchTime = ref(true); // change to be false by default when done testing

// onMounted(() => {
//   const now = new Date();
//   const hours = now.getHours();
//   lunchTime.value = hours >= 11 && hours < 15; // lunch time is between 11 and 15
// });

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
