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
      <button
        @click="toggleCart"
        class="bg-leif-red text-white px-4 py-3 shadow-lg"
      >
        🛒
      </button>
    </div>

    <!-- Cart Sidebar -->
    <Cart :isOpen="isCartOpen" @close="toggleCart" />
  </div>
</template>

<script setup>
const isCartOpen = ref(false);

const toggleCart = () => {
  isCartOpen.value = !isCartOpen.value;
  console.log("cartstatus", isCartOpen.value);
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
