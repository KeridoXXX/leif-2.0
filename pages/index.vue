<template>
  <div>
    <HeroVideo />
  </div>
  <div class="py-16">
    <div class="container-wide" v-if="lunchTime">
      <LunchPizzaBlock :pizzas="lunchPizzas" />
    </div>
  </div>
  <div class="py-16">
    <div class="container-wide">
      <LimitedPizzaBlock :pizzas="limitedPizzas" />
    </div>
  </div>
  <div class="py-16">
    <div class="text-center">
      <h2>Complete menu</h2>
      <h5>Check out some of our other choices</h5>
      <button></button>
    </div>
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
  return pizzadata.value?.filter((pizza) => pizza.lunchitem === true);
});

// ideas/TODOs:
// Limited time offers should have a live countdown to when the offer ends
// Large prices and included functionality
// PizzaForm validation, check the databse for duplicate number and similar
// PizzaForm should have a "edit" mode, where the form is prefilled with the data of the pizza being edited
</script>
