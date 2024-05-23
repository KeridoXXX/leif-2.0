<template>
  <div>
    <div class="text-center mb-10">
      <h2>Limited time offers</h2>
      <h5>Get them before they are gone!</h5>
    </div>
    <div v-if="pizzas && pizzas.length" class="card-container">
      <PizzaCard
        v-for="(pizza, index) in pizzas"
        :key="index"
        :cardtype="'limited'"
        :pizza="pizza"
      ></PizzaCard>
    </div>
    <div v-else>
      <h5>No limited offers available, check back later!</h5>
      <nuxt-link to="/menu" class="underline"
        >Check out our regular menu</nuxt-link
      >
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  pizzas: Array,
});
</script>
