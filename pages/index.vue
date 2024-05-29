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
      <div class="mb-10">
        <h2>Looking for something else</h2>
        <h5>Check out some of our other choices</h5>
      </div>

      <div class="flex justify-center gap-4">
        <nuxt-link to="/menu" class="btn-primary">FULL MENU</nuxt-link>
        <nuxt-link to="/menu" class="btn-secondary">CUSTOM PIZZA</nuxt-link>
      </div>
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

// TODOs:
// mobile view for almost everything
// More content for footer (instagram stuff perhaps?)
// A site wide shopping cart which stores the pizzas you've added to it (localstorage???) // DONE
// A PSUEDO checkout page where you can see your order and input your information -> submits an order to the database???

// mobil menu

// IDEAS:
// Limited time offers should have a live countdown to when the offer ends
// Large prices and included functionality
// PizzaForm validation, check the databse for duplicate number and similar
// PizzaForm should have a "edit" mode, where the form is prefilled with the data of the pizza being edited
</script>
