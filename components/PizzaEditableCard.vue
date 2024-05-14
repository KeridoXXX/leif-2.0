<template>
  <div class="border border-2 border-black p-2">
    <div>
      {{ pizza.number }}. {{ pizza.type }} -
      {{ pizza.name }}
    </div>
    <div class="flex gap-2">
      <div
        class="bg-stone-200 rounded-lg px-2 py-1"
        v-for="ingredient in pizza.ingredients"
      >
        {{ ingredient }}
      </div>
    </div>
    <div>
      <div>Regular price: {{ pizza.prices.regular }},-</div>
      <div v-if="pizza.prices.large">
        Large price: {{ pizza.prices.large }},-
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  pizza: Object,
});

console.log(props.pizza);
</script>
