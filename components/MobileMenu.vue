<template>
  <div
    class="fixed top-0 left-0 w-full h-full bg-white shadow-lg z-50"
    :class="{
      'translate-x-0 transition ease-in-out duration-500': isOpen,
      '-translate-x-full transition ease-in-out duration-500': !isOpen,
    }"
  >
    <div class="p-4 flex justify-between items-center border-b">
      <h2 class="text-lg font-semibold">Menu</h2>
      <button @click="$emit('close')" class="text-xl font-bold">&times;</button>
    </div>
    <div class="p-4">
      <ul class="text-leif-red">
        <li @click="$emit('close')" class="p-2 hover:underline">
          <nuxt-link to="/">Forside</nuxt-link>
        </li>
        <li @click="$emit('close')" class="p-2 hover:underline">
          <nuxt-link to="/menu">Menukort & bestilling</nuxt-link>
        </li>
        <li @click="$emit('close')" class="p-2 hover:underline">
          <nuxt-link to="/buildapizza">Byg en pizza</nuxt-link>
        </li>
        <li @click="$emit('close')" class="p-2 hover:underline">
          <nuxt-link to="/contact">Kontakt &#128222;</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});
</script>

<style scoped>
/* Add any necessary styles here */
</style>
