<template>
  <PizzaForm
    v-if="pizzadata"
    :visible="isModalVisible"
    :pizzadata="pizzadata"
    @close="hideModal"
    @submit="handleInsertPizza"
  ></PizzaForm>
  <div class="container">
    <div class="grid-container py-16 px-8">
      <div class="col-span-12">
        <button
          @click="showModal"
          class="bg-green-400 hover:bg-green-500 rounded-lg p-3 w-full"
        >
          Add new pizza
        </button>
      </div>
      <div class="col-span-12 flex flex-col gap-y-5">
        <PizzaEditableCard
          v-for="(pizza, index) in sortedPizzaData"
          :key="index"
          :pizza="pizza"
          @pizzaDeleted="freshFetch"
          @pizzaEdited="freshFetch"
          @pizzaUpdated="freshFetch"
        ></PizzaEditableCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import { fetchPizzas, insertPizza } from "~/supabase";

const pizzadata = ref(null);
const isModalVisible = ref(false);

const showModal = () => {
  isModalVisible.value = true;
};

const hideModal = () => {
  isModalVisible.value = false;
};

const handleInsertPizza = async (newPizzaData) => {
  console.log("emit received in backend.vue, now calling insertPizza...");
  await insertPizza(newPizzaData);
  freshFetch();
};

const freshFetch = async () => {
  console.log("freshFetch called");
  pizzadata.value = await fetchPizzas();
};

onMounted(async () => {
  pizzadata.value = await fetchPizzas();
});

const sortedPizzaData = computed(() => {
  if (pizzadata.value) {
    return [...pizzadata.value].sort((a, b) => a.number - b.number);
  }
  return [];
});
</script>
