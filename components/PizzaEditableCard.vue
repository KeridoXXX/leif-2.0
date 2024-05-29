<template>
  <div
    :class="{
      'bg-yellow-200': editablePizza.lunchitem && !editablePizza.limiteditem,
      'bg-blue-200': !editablePizza.lunchitem && editablePizza.limiteditem,
      'bg-purple-400': editablePizza.limiteditem && editablePizza.lunchitem,
      'bg-white': !editablePizza.lunchitem && !editablePizza.limiteditem,
    }"
    class="border border-2 border-black p-2 flex justify-between"
  >
    <div class="flex flex-col gap-2">
      <!-- Editable Number, type and name fields -->
      <div class="flex flex-wrap gap-2">
        <div>
          <p>Number:</p>
          <input
            v-model="editablePizza.number"
            type="number"
            class="border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        <div>
          <p>Type:</p>
          <select
            v-model="editablePizza.type"
            class="border border-gray-300 rounded-md shadow-sm p-2"
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
          <p>Name:</p>
          <input
            v-model="editablePizza.name"
            type="text"
            class="border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
      </div>
      <!-- Editable Ingredients -->
      <div class="">
        <p>Ingredients:</p>
        <p class="text-xs text-gray-600">fx: ost, tomat, frisk basilikum</p>
        <input
          v-model="ingredientsInput"
          type="text"
          placeholder="Enter ingredients, separated by commas"
          class="border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>
      <!-- Editable Prices -->
      <div>
        <div>
          <p>Price:</p>
          <input
            v-model="editablePizza.prices.regular"
            type="number"
            class="border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
      </div>
      <div class="flex gap-2">
        <button
          @click="handleLunchItem"
          class="bg-yellow-300 hover:bg-yellow-400 p-2"
          :class="editablePizza.lunchitem ? 'border-2 border-black' : ''"
        >
          Lunch item {{ editablePizza.lunchitem ? "✅" : "❌" }}
        </button>
        <button
          @click="handleLimitedItem"
          class="bg-blue-300 hover:bg-blue-400 p-2"
          :class="editablePizza.limiteditem ? 'border-2 border-black' : ''"
        >
          Limited item {{ editablePizza.limiteditem ? "✅" : "❌" }}
        </button>
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <button
        @click="handleDeletePizza"
        class="bg-red-400 hover:bg-red-500 rounded-lg p-3"
      >
        X
      </button>
      <button
        @click="saveChanges"
        class="bg-green-400 hover:bg-green-500 rounded-lg p-3"
      >
        Save
      </button>
    </div>
  </div>
</template>

<script setup>
import {
  deletePizza,
  updateLimitedStatus,
  updateLunchStatus,
  updatePizza,
} from "~/supabase";

const props = defineProps({
  pizza: Object,
});

const emit = defineEmits(["pizzaDeleted", "pizzaEdited", "pizzaUpdated"]);

const editablePizza = reactive({ ...props.pizza });
const ingredientsInput = ref(editablePizza.ingredients.join(", "));
editablePizza.prices.large = "150";

// Watch for changes and update ingredients array
watch(
  () => ingredientsInput.value,
  (newValue) => {
    editablePizza.ingredients = newValue.split(",").map((i) => i.trim());
  }
);

const handleDeletePizza = async () => {
  await deletePizza(props.pizza.id);
  emit("pizzaDeleted", props.pizza.id);
};

const saveChanges = async () => {
  await updatePizza(editablePizza.id, editablePizza);
  emit("pizzaUpdated", editablePizza);
};

const handleLunchItem = async () => {
  editablePizza.lunchitem = !editablePizza.lunchitem; // Update lunchitem property
  await updateLunchStatus(props.pizza.id, editablePizza.lunchitem);
};

const handleLimitedItem = async () => {
  editablePizza.limiteditem = !editablePizza.limiteditem; // Update limiteditem property
  await updateLimitedStatus(props.pizza.id, editablePizza.limiteditem);
};
</script>
