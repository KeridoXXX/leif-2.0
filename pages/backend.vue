<template>
  {{ isModalVisible }}
  <PizzaForm
    :visible="isModalVisible"
    :editing="isEditing"
    @close="hideModal"
  ></PizzaForm>
  <div class="grid-container m-10">
    <div class="col-span-6 flex flex-col gap-y-5">
      <PizzaEditableCard
        v-for="(pizza, index) in sortedPizzaData"
        :key="index"
        :pizza="pizza"
        @pizzaDeleted="freshFetch"
        @pizzaEdited="freshFetch"
      ></PizzaEditableCard>
    </div>
    <div>
      <button
        @click="showModal"
        class="bg-green-400 hover:bg-green-500 rounded-lg p-3"
      >
        Add new pizza
      </button>
    </div>
  </div>
</template>

<script setup>
import { fetchPizzas } from "~/supabase";

const pizzadata = ref(null);
const isModalVisible = ref(false);
const isEditing = ref(false);
const initialPizzaData = ref(null);

const showModal = () => {
  isModalVisible.value = true;
};

const hideModal = () => {
  isModalVisible.value = false;
};

const handleInsertPizza = async () => {
  await insertPizza();
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
