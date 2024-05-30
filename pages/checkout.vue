<template>
  <div class="py-16">
    <div class="container">
      <h3 class="text-center pb-16">
        LITERALLY A TEST FORM DO NOT INPUT ANY REAL INFO
      </h3>
      <div class="grid-container">
        <div
          class="col-span-12 order-1 md:col-span-6 payment-form flex flex-col"
        >
          <form @submit.prevent="submitOrder" class="space-y-4">
            <div class="w-2/3">
              <label
                class="block text-sm font-medium text-gray-700"
                for="cardNumber"
                >Card Number</label
              >
              <input
                type="text"
                id="cardNumber"
                v-model="cardNumber"
                required
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div class="flex gap-4 pb-4">
              <div class="w-20">
                <label
                  class="block text-sm font-medium text-gray-700"
                  for="expiryDate"
                  >Expiry Date</label
                >
                <input
                  type="text"
                  id="expiryDate"
                  v-model="expiryDate"
                  required
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div class="w-20">
                <label class="block text-sm font-medium text-gray-700" for="cvv"
                  >CVV</label
                >
                <input
                  type="text"
                  id="cvv"
                  v-model="cvv"
                  required
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
            </div>
            <div class="">
              <button type="submit" class="btn-secondary">
                <p>PLACE ORDER</p>
              </button>
            </div>
          </form>
        </div>
        <div class="col-span-12 md:col-span-6 cart-content">
          <ClientOnly>
            <div
              v-for="item in cartItems"
              :key="item.id"
              class="flex justify-between items-center mb-4 bg-white py-2 px-4 border-2"
            >
              <div class="flex gap-4">
                <p class="font-bold">{{ item.name }}</p>
                <p>{{ item.prices.regular }},-</p>
              </div>
              <div class="flex items-center gap-4 p-2">
                <div class="flex items-center gap-2">
                  <button
                    class="hover:scale-110 transition duration-300"
                    @click="increaseQuantity(item.id)"
                  >
                    ➕
                  </button>
                  <div>{{ item.quantity }}</div>
                  <button
                    class="hover:scale-110 transition duration-300"
                    @click="decreaseQuantity(item.id)"
                  >
                    ➖
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
          </ClientOnly>
          <div>
            <hr />
            <client-only>
              <div class="pt-4">
                <p class="font-bold text-xl">Total: {{ cartTotal }}kr</p>
              </div>
            </client-only>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCart } from "@/composables/useCart";

const {
  cartItems,
  removeFromCart,
  cartTotal,
  increaseQuantity,
  decreaseQuantity,
} = useCart();

let cardNumber = ref("");
let expiryDate = ref("");
let cvv = ref("");

const submitOrder = () => {
  alert("Order submitted!!");
};
</script>
