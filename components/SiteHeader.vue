<template>
  <div class="flex justify-between items-center p-4">
    <div class="w-[10rem]">
      <nuxt-link to="/"
        ><img src="assets/logos/leif_logo.png" alt=""
      /></nuxt-link>
    </div>
    <nav :class="{ active: isOpen }">
      <ul class="flex gap-4 text-leif-red">
        <li class="p-2">
          <nuxt-link to="/menu">Menukort & bestilling</nuxt-link>
        </li>
        <li class="p-2">
          <nuxt-link to="/buildapizza">Byg en pizza</nuxt-link>
        </li>
        <li class="p-2 border border-2 border-leif-red rounded-lg">
          <nuxt-link to="/contact">Kontakt &#128222;</nuxt-link>
        </li>
      </ul>
    </nav>
    <div class="mobile-menu-toggle" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.header {
  background-color: #333;
  color: #fff;
  padding: 1rem 0;
}

.menu li {
  margin-right: 1rem;
}

.menu li:last-child {
  margin-right: 0;
}

.mobile-menu-toggle {
  display: none;
  cursor: pointer;
}

.mobile-menu-toggle span {
  display: block;
  width: 25px;
  height: 3px;
  background-color: #fff;
  margin-bottom: 5px;
}

@media screen and (max-width: 768px) {
  .menu {
    display: none;
    flex-direction: column;
    background-color: #333;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
    z-index: 1;
    transition: all 0.3s ease-in;
  }

  .menu.active {
    display: flex;
  }

  .mobile-menu-toggle {
    display: block;
  }
}
</style>
