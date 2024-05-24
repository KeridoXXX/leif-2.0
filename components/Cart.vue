<template>
  <div
    class="fixed top-0 right-0 w-1/3 h-full bg-white shadow-lg z-50"
    :class="{
      'translate-x-0 transition ease-in-out duration-500': isOpen,
      'translate-x-full transition ease-in-out duration-500': !isOpen,
    }"
  >
    <div v-if="isOpen">
      <div class="p-4 flex justify-between items-center border-b">
        <h2 class="text-lg font-semibold">Your Cart</h2>
        <button @click="$emit('close')" class="text-xl font-bold">
          &times;
        </button>
      </div>
      <div class="p-4">
        <!-- Loop through cart items here, but what array is this??? -->
        <p v-if="cartItems === null">Your cart is empty</p>
      </div>
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
