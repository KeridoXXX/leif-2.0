<template>
  <div
    :class="{
      'bg-yellow-200': pizza.lunchitem && !pizza.limiteditem,
      'bg-blue-200': !pizza.lunchitem && pizza.limiteditem,
      'bg-purple-400': pizza.limiteditem && pizza.lunchitem,
      'bg-white': !pizza.lunchitem && !pizza.limiteditem,
    }"
    class="border border-2 border-black p-2 flex justify-between"
  >
    <div class="flex flex-col gap-2">
      <div>
        {{ pizza.number }}. {{ pizza.type }} -
        {{ pizza.name }}
      </div>
      <div>
        <div>lunch:{{ pizza.lunchitem }}</div>
        <div>limited:{{ pizza.limiteditem }}</div>
      </div>
      <div class="flex flex-wrap gap-2">
        <div
          class="bg-stone-200 rounded-lg px-2 py-1"
          v-for="ingredient in pizza.ingredients"
        >
          {{ ingredient }}
        </div>
      </div>
      <div>
        <div>Regular price: {{ pizza.prices.regular }},-</div>
        <div v-if="pizza.prices.large">
          Large price: {{ pizza.prices.large }},-
        </div>
      </div>
      <div class="flex gap-2">
        <button
          @click="handleLunchItem"
          class="bg-yellow-300 hover:bg-yellow-400 p-2"
          :class="pizza.lunchitem ? 'border-2 border-black' : ''"
        >
          Lunch item {{ pizza.lunchitem ? "✅" : "❌" }}
        </button>
        <button
          @click="handleLimitedItem"
          class="bg-blue-300 hover:bg-blue-400 p-2"
          :class="pizza.limiteditem ? 'border-2 border-black' : ''"
        >
          Limited item {{ pizza.limiteditem ? "✅" : "❌" }}
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
        @click="handleEditPizza"
        class="bg-green-400 hover:bg-green-500 rounded-lg p-3"
      >
        Edit
      </button>
    </div>
  </div>
</template>

<script setup>
import {
  deletePizza,
  insertPizza,
  updatePizza,
  updateLimitedStatus,
  updateLunchStatus,
} from "~/supabase";

const props = defineProps({
  pizza: Object,
});

const emit = defineEmits(["pizzaDeleted", "pizzaEdited", "pizzaAdded"]);

const handleDeletePizza = async () => {
  await deletePizza(props.pizza.id);
  emit("pizzaDeleted", props.pizza.id);
};

const handleEditPizza = () => {
  emit("pizzaEdit", props.pizza);
};

const handleLunchItem = async () => {
  await updateLunchStatus(props.pizza.id, !props.pizza.lunchitem);
  emit("pizzaEdited");
};

const handleLimitedItem = async () => {
  await updateLimitedStatus(props.pizza.id, !props.pizza.limiteditem);
  emit("pizzaEdited");
};

const handleUpdatePizza = () => {
  // TODO add the function
  emit("pizzaEdited");
};

//console.log("lunch:", props.pizza.lunchitem);
//console.log("limited", props.pizza.limiteditem);
</script>
