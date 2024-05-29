import { ref, computed, onMounted } from "vue";

// reactive cart items array
const cartItems = ref([]);

// using this typeof window check to prevent SSR errors - will only run on the client-side
const loadCart = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      cartItems.value = JSON.parse(savedCart);
    }
  }
};

// using this typeof window check to prevent SSR errors - will only run on the client-side
const saveCart = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.setItem("cart", JSON.stringify(cartItems.value));
  }
};

const addToCart = (pizza) => {
  const existingItem = cartItems.value.find((item) => item.id === pizza.id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.value.push({ ...pizza, quantity: 1 });
  }
  console.log("current cart:", cartItems.value);
  saveCart();
};

const removeFromCart = (pizzaId) => {
  cartItems.value = cartItems.value.filter((item) => item.id !== pizzaId);
  saveCart();
};

const increaseQuantity = (pizzaId) => {
  const existingItem = cartItems.value.find((item) => item.id === pizzaId);
  if (existingItem) {
    existingItem.quantity += 1;
  }
  saveCart();
};

const decreaseQuantity = (pizzaId) => {
  const existingItem = cartItems.value.find((item) => item.id === pizzaId);
  if (existingItem) {
    existingItem.quantity -= 1;
    if (existingItem.quantity <= 0) {
      removeFromCart(pizzaId);
    }
  }
  saveCart();
};

const clearCart = () => {
  cartItems.value = [];
  saveCart();
};

// using this typeof window check to prevent SSR errors - will only run on the client-side
if (typeof window !== "undefined") {
  loadCart();
}

const cartTotal = computed(() => {
  return cartItems.value.reduce(
    (total, item) => total + item.prices.regular * item.quantity,
    0
  );
});

export const useCart = () => {
  return {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
  };
};
