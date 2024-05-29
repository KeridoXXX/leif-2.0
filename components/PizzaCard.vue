<template>
  <div
    class="border border-black border-2 border-b-4 border-r-4 py-2 px-4 hover:scale-105 transition duration-300 cursor-pointer min-h-24 flex justify-between items-center gap-2 bg-white"
    @click="handleClick"
  >
    <div class="flex flex-col gap-1">
      <!-- heading -->
      <div class="flex gap-1">
        <p class="font-bold">{{ pizza.number }}.</p>
        <p class="font-bold">{{ pizza.name }}</p>
      </div>
      <!-- ingredients -->
      <div class="flex gap-2 flex-wrap">
        <p class="uppercase">{{ pizza.ingredients.join(", ") }}</p>
      </div>
    </div>
    <div v-if="cardtype === 'lunch'">
      <p class="underline">65,-</p>
    </div>
    <div v-if="cardtype === 'limited' || cardtype === 'menu'">
      <p class="underline">{{ pizza.prices.regular }},-</p>
    </div>
  </div>
</template>

<script setup>
import { useCart } from "@/composables/useCart";

const props = defineProps({
  pizza: Object,
  cardtype: String,
});

const { addToCart } = useCart();

const handleClick = () => {
  addToCart(props.pizza);
};
</script>
