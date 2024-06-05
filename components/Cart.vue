<template>
  <div
    class="fixed top-0 right-0 w-[100vw] lg:w-1/3 h-full bg-white shadow-lg z-50"
    :class="{
      'translate-x-0 transition ease-in-out duration-500': isOpen,
      'translate-x-full transition ease-in-out duration-500': !isOpen,
    }"
  >
    <div class="h-full max-lg:pl-4" v-if="isOpen">
      <div class="p-4 flex justify-between items-center border-b">
        <h2 class="text-lg font-semibold">Your Cart</h2>
        <button @click="$emit('close')" class="text-xl font-bold">
          &times;
        </button>
      </div>
      <div class="h-full p-4">
        <!-- Loop through cart items here, but what array is this??? -->
        <div v-if="cartItems.length === 0">
          <p>Your cart is empty</p>
        </div>
        <div class="flex flex-col justify-between h-[90%] overflow-auto" v-else>
          <div>
            <div
              v-for="item in cartItems"
              :key="item.id"
              class="flex justify-between items-center mb-4"
            >
              <div class="gap-4">
                <p class="font-bold">{{ item.name }}</p>
                <p class="">{{ item.prices.regular }},-</p>
              </div>
              <div class="flex items-center gap-4 p-2">
                <div class="flex items-center gap-2">
                  <button
                    class="hover:scale-110 transition duration-300"
                    @click="decreaseQuantity(item.id)"
                  >
                    ➖
                  </button>
                  <div>{{ item.quantity }}</div>
                  <button
                    class="hover:scale-110 transition duration-300"
                    @click="increaseQuantity(item.id)"
                  >
                    ➕
                  </button>
                </div>
                <button
                  @click="removeFromCart(item.id)"
                  class="hover:scale-110 transition duration-300"
                >
                  &#x1F5D1;
                </button>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between p-5">
            <div class="flex gap-2">
              <p>Total:</p>
              <p>{{ cartTotal }},-</p>
            </div>
            <div>
              <NuxtLink to="/checkout">
                <button @click="$emit('close')" class="btn-secondary">
                  Checkout
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCart } from "@/composables/useCart";

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});

const {
  cartItems,
  removeFromCart,
  cartTotal,
  increaseQuantity,
  decreaseQuantity,
} = useCart();
</script>

<style scoped>
/* Add any necessary styles here */
</style>
