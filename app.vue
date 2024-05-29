<template>
  <div class="relative min-h-screen bg-leif-white">
    <header class="bg-leif-white">
      <SiteHeader />
    </header>

    <main class="bg-leif-white">
      <NuxtPage />
    </main>

    <footer>
      <SiteFooter />
    </footer>

    <!-- Cart Icon -->
    <div class="fixed bottom-5 right-5">
      <button @click="toggleCart" class="btn-primary">
        <span v-if="cartItems.length">View cart </span>🛒
      </button>
      <div
        v-if="cartItems.length > 0"
        class="w-6 h-6 top-[-20%] left-[-8%] bg-orange-400 absolute rounded-full"
      >
        <div class="flex justify-center items-center font-bold text-leif-white">
          {{ cartItems.length }}
        </div>
      </div>
    </div>

    <!-- Cart Sidebar -->
    <Cart :isOpen="isCartOpen" @close="toggleCart" />
  </div>
</template>

<script setup>
import { useCart } from "@/composables/useCart";

const isCartOpen = ref(false);

const { cartItems } = useCart();

const toggleCart = () => {
  isCartOpen.value = !isCartOpen.value;
  console.log("cartstatus", isCartOpen.value);
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
