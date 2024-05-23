<template>
  {{ newPizzaData }}
  <div v-if="visible" class="modal-overlay">
    <div class="modal-container">
      <div class="modal-header">
        <h3>{{ "Add New Pizza" }}</h3>
        <button @click="closeModal">X</button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="handleSubmit">
          <div>
            <label>Number</label>
            <input v-model="newPizzaData.number" type="number" required />
          </div>

          <div>
            <label>Name</label>
            <input v-model="newPizzaData.name" type="text" required />
          </div>

          <div>
            <label>Type</label>
            <select v-model="newPizzaData.type">
              <option value="KLASSISKE PIZZAER">KLASSISKE PIZZAER</option>
              <option value="SPECIAL PIZZAER">PIZZA SPECIALE</option>
              <option value="HVIDE PIZZAER">HVIDE PIZZAER</option>
              <option value="GOURMET PIZZAER">GOURMET PIZZAER</option>
              <option value="PIZZAER MED gul TOMATSOVS">GULE PIZZAER</option>
              <option value="VEGANSKE PIZZAER">VEGANSKE PIZZAER</option>
            </select>
          </div>

          <div>
            <label>Regular Price</label>
            <input
              v-model="newPizzaData.prices.regular"
              type="number"
              required
            />
          </div>

          <div>
            <label>Large Price</label>
            <input v-model="newPizzaData.prices.large" type="number" />
          </div>

          <div>
            <label>Ingredients</label>
            <input
              v-model="ingredientsInput"
              type="text"
              placeholder="Enter ingredients, separated by commas"
            />
          </div>

          <div>
            <label>Lunch Item</label>
            <input v-model="newPizzaData.lunchItem" type="checkbox" />
          </div>

          <div>
            <label>Limited Item</label>
            <input v-model="newPizzaData.limitedItem" type="checkbox" />
          </div>

          <button type="submit">
            {{ "Add Pizza" }}
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

//console.log("pizzadata prop???", props.pizzadata);

const emit = defineEmits(["close", "submit"]);

const newPizzaData = reactive({
  number: props.pizzadata.length + 1,
  name: "",
  type: "KLASSISKE PIZZAER",
  prices: {
    regular: "",
    large: "",
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
  console.log("submitted, now sending emit to parent", newPizzaData);
  emit("submit", newPizzaData);
  closeModal();
};

const closeModal = () => {
  emit("close");
};
</script>
