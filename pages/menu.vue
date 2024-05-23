<template>
  <div class="container-wide">
    <div
      class="mb-16"
      v-for="(pizzas, type) in categorizedPizzaData"
      :key="type"
    >
      <div class="text-center mb-10">
        <h2>{{ type }}</h2>
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
import { ref, computed, onMounted } from "vue";

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
