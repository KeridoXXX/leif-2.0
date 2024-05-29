<template>
  <div
    v-if="visible"
    class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75"
  >
    <div class="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-lg">
      <div class="flex justify-between items-center bg-blue-500 text-white p-4">
        <h3 class="text-lg font-semibold">Add New Pizza</h3>
        <button @click="closeModal" class="text-white text-lg font-bold">
          &times;
        </button>
      </div>
      <div class="p-4">
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700"
              >Number</label
            >
            <input
              v-model="newPizzaData.number"
              type="number"
              required
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Name</label>
            <input
              v-model="newPizzaData.name"
              type="text"
              required
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Type</label>
            <select
              v-model="newPizzaData.type"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value="KLASSISKE PIZZAER">KLASSISKE PIZZAER</option>
              <option value="PIZZA SPECIALE">PIZZA SPECIALE</option>
              <option value="HVIDE PIZZAER">HVIDE PIZZAER</option>
              <option value="GOURMET PIZZAER">GOURMET PIZZAER</option>
              <option value="PIZZAER MED gul TOMATSAUCE">GULE PIZZAER</option>
              <option value="VEGANSKE PIZZAER">VEGANSKE PIZZAER</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Price</label>
            <input
              v-model="newPizzaData.prices.regular"
              type="number"
              required
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700"
              >Ingredients</label
            >
            <p class="text-sm text-gray-600">
              Ex. cheese, tomato, sausage, basil, pesto
            </p>
            <input
              v-model="ingredientsInput"
              type="text"
              placeholder="Enter ingredients, separated by commas"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          <div class="flex items-center">
            <input
              v-model="newPizzaData.lunchItem"
              type="checkbox"
              class="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label class="ml-2 block text-sm font-medium text-gray-700"
              >Lunch Item</label
            >
          </div>

          <div class="flex items-center">
            <input
              v-model="newPizzaData.limitedItem"
              type="checkbox"
              class="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label class="ml-2 block text-sm font-medium text-gray-700"
              >Limited Item</label
            >
          </div>

          <button
            type="submit"
            class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Add Pizza
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from "vue";

const props = defineProps({
  pizzadata: Array,
  visible: Boolean,
  initialPizzaData: Object,
});

const emit = defineEmits(["close", "submit"]);

const newPizzaData = reactive({
  number: props.pizzadata.length + 1,
  name: "",
  type: "KLASSISKE PIZZAER",
  prices: {
    regular: "",
    large: "150",
  },
  ingredients: [],
  lunchitem: false,
  limiteditem: false,
});

const ingredientsInput = ref("");

const handleSubmit = () => {
  newPizzaData.ingredients = ingredientsInput.value
    .split(",")
    .map((i) => i.trim());
  emit("submit", newPizzaData);
  closeModal();
};

const closeModal = () => {
  emit("close");
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-container {
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  width: 100%;
  max-width: 500px;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modal-body {
  margin-top: 1rem;
}
</style>
