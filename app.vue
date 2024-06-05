<template>
  <div class="relative min-h-screen bg-leif-white">
    <header
      :class="{
        'header-visible': isHeaderVisible,
      }"
      class="header bg-leif-white fixed w-[100vw] z-50"
    >
      <SiteHeader @cartClicked="toggleCart" @menuClicked="toggleMenu" />
    </header>

    <main class="bg-leif-white pb-16">
      <NuxtPage />
    </main>

    <footer>
      <SiteFooter />
    </footer>

    <Cart :isOpen="isCartOpen" @close="toggleCart" />
    <MobileMenu :isOpen="isMobileMenuOpen" @close="toggleMenu" />
    <Notification @notifClicked="toggleCart" />
  </div>
</template>

<script setup>
import { useCart } from "@/composables/useCart";

const isCartOpen = ref(false);
const isMobileMenuOpen = ref(false);
const isHeaderVisible = ref(false);

const { cartItems } = useCart();

const toggleCart = () => {
  isCartOpen.value = !isCartOpen.value;
  //console.log("cartstatus", isCartOpen.value);
};

const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

onMounted(() => {
  const checkScroll = () => {
    isHeaderVisible.value = window.scrollY > 50;
  };

  window.addEventListener("scroll", checkScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkScroll);
});
</script>

<style scoped>
.header {
  transform: translateY(-100%);
  transition: transform 0.3s ease-in-out;
}

.header-visible {
  transform: translateY(0);
}
</style>
