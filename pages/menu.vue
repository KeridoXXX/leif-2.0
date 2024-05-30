<template>
  <div class="container-wide">
    <div
      class="py-16"
      v-for="(pizzas, type) in categorizedPizzaData"
      :key="type"
    >
      <div class="text-center mb-10">
        <h2>{{ type }}</h2>
        <h5 v-if="type === 'HVIDE PIZZAER'">
          White pizzas are made with a mascarpone cheese sauce instead of the
          typical marinara
        </h5>
        <h5 v-else-if="type === 'PIZZAER med GUL TOMATSAUCE'">
          These pizzas are made with a yellow tomato sauce
        </h5>
        <h5 v-else>
          All pizzas are made with a classic marinara sauce and mozzerella
          cheese
        </h5>
      </div>
      <div class="card-container">
        <PizzaCard
          v-for="(pizza, index) in pizzas"
          :cardtype="'menu'"
          :key="index"
          :pizza="pizza"
        ></PizzaCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import { fetchPizzas } from "../supabase.js";

const pizzadata = ref(null);

onMounted(async () => {
  pizzadata.value = await fetchPizzas();
});

const categorizedPizzaData = computed(() => {
  if (pizzadata.value) {
    return pizzadata.value.reduce((types, pizza) => {
      if (!types[pizza.type]) {
        types[pizza.type] = [];
      }
      types[pizza.type].push(pizza);
      types[pizza.type].sort((a, b) => a.number - b.number);
      return types;
    }, {});
  }
  return {};
});
</script>
