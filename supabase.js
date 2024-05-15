import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://wmtijaoqacxqmmbjbfap.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtdGlqYW9xYWN4cW1tYmpiZmFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5MjExMzksImV4cCI6MjAyODQ5NzEzOX0.t0JhJJzN-n87PaxzwlXK7rK_zz97hWP9FhEJJLLXfFE";

const supabase = createClient(supabaseUrl, supabaseKey);

//console.log(supabase); // Used to check the status of the connection

export const fetchPizzas = async () => {
  try {
    const { data, error } = await supabase.from("pizzas").select("*");

    if (error) {
      throw error;
    }

    return data;
    console.log(data);
  } catch (error) {
    console.error("Error fetching pizzas:", error.message);
    return null;
  }
};

export const fetchPizza = async (id) => {
  try {
    const { data, error } = await supabase
      .from("pizzas")
      .select("*")
      .eq("id", id); // how do we hit the right pizza?

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error fetching pizza:", error.message);
    return null;
  }
};

export const insertPizza = async (pizza) => {
  try {
    const { data, error } = await supabase.from("pizzas").insert([pizza]);

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error inserting pizza:", error.message);
    return null;
  }
};

export const updatePizza = async (id, pizza) => {
  try {
    const { data, error } = await supabase
      .from("pizzas")
      .update(pizza)
      .match({ id }); // what is match?

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error updating pizza:", error.message);
    return null;
  }
};

export const deletePizza = async (id) => {
  try {
    const { data, error } = await supabase.from("pizzas").delete().eq("id", id); // what is eq?

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error deleting pizza:", error.message);
    return null;
  }
};

export const updateLunchStatus = async (id, status) => {
  try {
    const { data, error } = await supabase
      .from("pizzas")
      .update({ lunchitem: status })
      .eq("id", id);

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error updating lunch status:", error.message);
    return null;
  }
};

export const updateLimitedStatus = async (id, status) => {
  try {
    const { data, error } = await supabase
      .from("pizzas")
      .update({ limiteditem: status })
      .eq("id", id);

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error updating limited status:", error.message);
    return null;
  }
};

// const pizzaData = [
//   {
//     id: 1,
//     name: "MARGHERITA",
//     type: "KLASSISKE PIZZAER",
//     prices: {
//       regular: 69,
//       large: 110,
//     },
//     ingredients: ["ost"],
//   },
//   {
//     id: 2,
//     name: "VESUVIO",
//     type: "KLASSISKE PIZZAER",
//     prices: {
//       regular: 77,
//       large: 130,
//     },
//     ingredients: ["Skinke"],
//   },
//   {
//     id: 3,
//     name: "CAPRICCIOSA",
//     type: "KLASSISKE PIZZAER",
//     prices: {
//       regular: 80,
//       large: 130,
//     },
//     ingredients: ["Skinke", "champignon"],
//   },
//   {
//     id: 4,
//     name: "HAWAII",
//     type: "KLASSISKE PIZZAER",
//     prices: {
//       regular: 80,
//       large: 130,
//     },
//     ingredients: ["Skinke", "ananas"],
//   },
//   {
//     id: 5,
//     name: "QUATRO STAGIONI",
//     type: "KLASSISKE PIZZAER",
//     prices: {
//       regular: 85,
//       large: 145,
//     },
//     ingredients: ["Skinke", "champignon", "artiskok", "pepperoni"],
//   },
//   {
//     id: 6,
//     name: "PEPPERONI",
//     type: "KLASSISKE PIZZAER",
//     prices: {
//       regular: 78,
//       large: 130,
//     },
//     ingredients: ["Pepperoni"],
//   },
//   {
//     id: 7,
//     name: "AMORE",
//     type: "KLASSISKE PIZZAER",
//     prices: {
//       regular: 85,
//       large: 145,
//     },
//     ingredients: ["Skinke", "champignon", "artiskok"],
//   },
//   {
//     id: 8,
//     name: "ITALIANA",
//     type: "KLASSISKE PIZZAER",
//     prices: {
//       regular: 82,
//       large: 140,
//     },
//     ingredients: ["Kødsauce", "løg"],
//   },
//   {
//     id: 9,
//     name: "GORGONZOLA",
//     type: "KLASSISKE PIZZAER",
//     prices: {
//       regular: 82,
//       large: 140,
//     },
//     ingredients: ["Champignon", "løg", "gorgonzola"],
//   },
//   {
//     id: 10,
//     name: "ROMA",
//     type: "KLASSISKE PIZZAER",
//     prices: {
//       regular: 78,
//       large: 130,
//     },
//     ingredients: ["Champignon", "oliven"],
//   },
//   {
//     id: 11,
//     name: "SICILIANA",
//     type: "KLASSISKE PIZZAER",
//     prices: {
//       regular: 85,
//       large: 140,
//     },
//     ingredients: ["Oliven", "capers", "ansjoser"],
//   },
//   {
//     id: 12,
//     name: "VICHINGA",
//     type: "KLASSISKE PIZZAER",
//     prices: {
//       regular: 85,
//       large: 140,
//     },
//     ingredients: ["Skinke", "champignon", "peberfrugt", "chili", "hvidløg"],
//   },
//   {
//     id: 13,
//     name: "LORIK",
//     type: "KLASSISKE PIZZAER",
//     prices: {
//       regular: 89,
//       large: 150,
//     },
//     ingredients: ["Kødstrimler", "champignon", "gorgonzola"],
//   },
//   {
//     id: 14,
//     name: "ECSOTICA",
//     type: "KLASSISKE PIZZAER",
//     prices: {
//       regular: 89,
//       large: 145,
//     },
//     ingredients: ["Skinke", "rejer", "ananas"],
//   },
//   {
//     id: 15,
//     name: "ROSSINI",
//     type: "KLASSISKE PIZZAER",
//     prices: {
//       regular: 90,
//       large: 155,
//     },
//     ingredients: ["Skinke", "pepperoni", "bacon", "cocktailpølser"],
//   },
//   {
//     id: 16,
//     name: "SARDENA",
//     type: "KLASSISKE PIZZAER",
//     prices: {
//       regular: 89,
//       large: 150,
//     },
//     ingredients: ["Cocktailpølser", "bacon", "løg", "æg"],
//   },
//   {
//     id: 17,
//     name: "MISTTA",
//     type: "KLASSISKE PIZZAER",
//     prices: {
//       regular: 84,
//       large: 140,
//     },
//     ingredients: ["Skinke", "pepperoni"],
//   },
//   {
//     id: 18,
//     name: "SOLE",
//     type: "KLASSISKE PIZZAER",
//     prices: {
//       regular: 91,
//       large: 145,
//     },
//     ingredients: ["Skinke", "panchetta", "æg"],
//   },
//   {
//     id: 19,
//     name: "LEIF'S",
//     type: "KLASSISKE PIZZAER",
//     prices: {
//       regular: 91,
//       large: 160,
//     },
//     ingredients: [
//       "Parmaskinke",
//       "høvlet parmesanost",
//       "rucolasalat",
//       "pestodressing",
//     ],
//   },
//   {
//     id: 20,
//     name: "TORIO",
//     type: "KLASSISKE PIZZAER",
//     prices: {
//       regular: 82,
//       large: 140,
//     },
//     ingredients: ["Pepperoni", "champignon"],
//   },
//   {
//     id: 21,
//     name: "TINA",
//     type: "KLASSISKE PIZZAER",
//     prices: {
//       regular: 91,
//       large: 155,
//     },
//     ingredients: [
//       "Kødstrimler",
//       "champignon",
//       "løg",
//       "peberfrugt",
//       "chili",
//       "dressing",
//     ],
//   },
//   {
//     id: 22,
//     name: "VEGETARIANA",
//     type: "KLASSISKE PIZZAER",
//     prices: {
//       regular: 80,
//       large: 140,
//     },
//     ingredients: ["Champignon", "løg", "peberfrugt", "asparges"],
//   },
//   {
//     id: 23,
//     name: "FLORIM",
//     type: "KLASSISKE PIZZAER",
//     prices: {
//       regular: 89,
//       large: 150,
//     },
//     ingredients: ["Champignon", "løg", "peberfrugt", "kylling"],
//   },
//   {
//     id: 24,
//     name: "ANTONELO",
//     type: "KLASSISKE PIZZAER",
//     prices: {
//       regular: 89,
//       large: 150,
//     },
//     ingredients: ["Skinke", "kødsauce", "cocktailpølser"],
//   },
//   {
//     id: 25,
//     name: "NØRREBRO",
//     type: "KLASSISKE PIZZAER",
//     prices: {
//       regular: 87,
//       large: 145,
//     },
//     ingredients: ["Shawarma", "salat", "dressing"],
//   },
//   {
//     id: 26,
//     name: "PECORINO",
//     type: "KLASSISKE PIZZAER",
//     prices: {
//       regular: 85,
//       large: 145,
//     },
//     ingredients: ["Asparges", "artiskok", "fetaost"],
//   },
//   {
//     id: 27,
//     name: "PAESANA",
//     type: "KLASSISKE PIZZAER",
//     prices: {
//       regular: 84,
//       large: 145,
//     },
//     ingredients: ["Skinke", "panchetta"],
//   },
//   {
//     id: 28,
//     name: "MARINARA",
//     type: "KLASSISKE PIZZAER",
//     prices: {
//       regular: 85,
//       large: 145,
//     },
//     ingredients: ["Alt godt fra havet"],
//   },
//   {
//     id: 29,
//     name: "TONA",
//     type: "KLASSISKE PIZZAER",
//     prices: {
//       regular: 85,
//       large: 145,
//     },
//     ingredients: ["Tun", "løg"],
//   },
//   {
//     id: 30,
//     name: "MATADOR",
//     type: "KLASSISKE PIZZAER",
//     prices: {
//       regular: 95,
//       large: 169,
//     },
//     ingredients: ["Oksefilet", "champignon", "løg", "bearnaise sauce"],
//   },
//   {
//     id: 31,
//     name: "PARMA",
//     type: "KLASSISKE PIZZAER",
//     prices: {
//       regular: 89,
//       large: 150,
//     },
//     ingredients: ["Gorgonzola", "parmaskinke"],
//   },
//   {
//     id: 32,
//     name: "CALZONE (INDBAGT)",
//     type: "KLASSISKE PIZZAER",
//     prices: {
//       regular: 82,
//       large: null,
//     },
//     ingredients: ["Skinke", "champignon"],
//   },
//   {
//     id: 33,
//     name: "CALZONE SPECIEL (INDBAGT)",
//     type: "KLASSISKE PIZZAER",
//     prices: {
//       regular: 85,
//       large: null,
//     },
//     ingredients: ["Kødsauce", "spaghetti"],
//   },
//   {
//     id: 34,
//     name: "LABI",
//     type: "KLASSISKE PIZZAER",
//     prices: {
//       regular: 95,
//       large: 169,
//     },
//     ingredients: [
//       "Bresaola",
//       "rucola",
//       "parmesan",
//       "semidried tomater",
//       "pesto",
//     ],
//   },
//   {
//     id: 35,
//     name: "KARTOFFEL",
//     type: "KLASSISKE PIZZAER",
//     prices: {
//       regular: 89,
//       large: 150,
//     },
//     ingredients: ["Kartoffel", "panchetta", "pesto"],
//   },
//   {
//     id: 36,
//     name: "ÆGIRS",
//     type: "KLASSISKE PIZZAER",
//     prices: {
//       regular: 94,
//       large: 160,
//     },
//     ingredients: ["Babyspinat", "gorgonzola", "parmaskinke"],
//   },
//   {
//     id: 37,
//     name: "MIMER'S",
//     type: "KLASSISKE PIZZAER",
//     prices: {
//       regular: 94,
//       large: 160,
//     },
//     ingredients: [
//       "Stærk italiensk salami",
//       "semidried tomater",
//       "baby spinat",
//       "pesto",
//     ],
//   },
//   {
//     id: 38,
//     name: "CALABRIA",
//     type: "KLASSISKE PIZZAER",
//     prices: {
//       regular: 94,
//       large: 160,
//     },
//     ingredients: [
//       "Stærk italiensk salami",
//       "rucola",
//       "parmesanost",
//       "pesto",
//       "cherry tomater",
//     ],
//   },
//   {
//     id: 45,
//     name: "NDUJA",
//     type: "PIZZA SPECIALE",
//     prices: {
//       regular: 91,
//       large: 160,
//     },
//     ingredients: ["Tomat", "mozzarella", "nduja", "cherry tomater", "rucola"],
//   },
//   {
//     id: 46,
//     name: "DIAVOLA",
//     type: "PIZZA SPECIALE",
//     prices: {
//       regular: 98,
//       large: 170,
//     },
//     ingredients: [
//       "Tomat",
//       "mozzarella",
//       "salsiccia",
//       "nduja",
//       "cherry tomater",
//       "rucola",
//       "bøffel mozzarella",
//     ],
//   },
//   {
//     id: 47,
//     name: "PRANVERA",
//     type: "PIZZA SPECIALE",
//     prices: {
//       regular: 91,
//       large: 160,
//     },
//     ingredients: [
//       "Tomat",
//       "mozzarella",
//       "cherry tomater",
//       "rucola",
//       "bøffel mozzarella",
//       "olivenolie",
//     ],
//   },
//   {
//     id: 48,
//     name: "SPINAT",
//     type: "PIZZA SPECIALE",
//     prices: {
//       regular: 91,
//       large: 160,
//     },
//     ingredients: [
//       "Tomat",
//       "mozzarella",
//       "spinat",
//       "kartoffel",
//       "cherry tomater",
//       "løg",
//     ],
//   },
//   {
//     id: 50,
//     name: "QUATRO FORMAGGI",
//     type: "HVIDE PIZZAER",
//     prices: {
//       regular: 92,
//       large: 160,
//     },
//     ingredients: [
//       "Mascarpone",
//       "parmesan",
//       "mozzarelaost",
//       "gorgonzolaost",
//       "frisk basilikum",
//     ],
//   },
//   {
//     id: 51,
//     name: "MOZZARELLA",
//     type: "HVIDE PIZZAER",
//     prices: {
//       regular: 92,
//       large: 160,
//     },
//     ingredients: [
//       "Mozzarela",
//       "parmaskinke",
//       "frisktomater",
//       "frisk basilikum",
//     ],
//   },
//   {
//     id: 52,
//     name: "MORTADELLA",
//     type: "HVIDE PIZZAER",
//     prices: {
//       regular: 92,
//       large: 160,
//     },
//     ingredients: [
//       "Mortadella",
//       "frisktomater",
//       "høvlet parmesanost",
//       "rucolasalat",
//       "pestodressing",
//     ],
//   },
//   {
//     id: 53,
//     name: "LA SALAMI",
//     type: "HVIDE PIZZAER",
//     prices: {
//       regular: 92,
//       large: 160,
//     },
//     ingredients: [
//       "Italiensk salami",
//       "høvlet parmesanost",
//       "rucolasalat",
//       "pestodressing",
//     ],
//   },
//   {
//     id: 54,
//     name: "PASTRAMI",
//     type: "HVIDE PIZZAER",
//     prices: {
//       regular: 92,
//       large: 160,
//     },
//     ingredients: [
//       "Pastrami",
//       "høvlet parmesanost",
//       "rucolasalat",
//       "pestodressing",
//     ],
//   },
//   {
//     id: 55,
//     name: "QUATRO CARNE DI FIRENTE",
//     type: "HVIDE PIZZAER",
//     prices: {
//       regular: 92,
//       large: 160,
//     },
//     ingredients: [
//       "Mortadella",
//       "pastrami",
//       "parmaskinke",
//       "italiensk salami",
//       "rucolasalat",
//       "parmesan",
//       "pestodressing",
//     ],
//   },
//   {
//     id: 56,
//     name: "GONI",
//     type: "HVIDE PIZZAER",
//     prices: {
//       regular: 92,
//       large: 160,
//     },
//     ingredients: ["Kartofler", "løg", "gorgonzola", "pesto"],
//   },
//   {
//     id: 57,
//     name: "PATATA",
//     type: "HVIDE PIZZAER",
//     prices: {
//       regular: 92,
//       large: 160,
//     },
//     ingredients: ["Kartofler", "salsiccia", "rozmarin"],
//   },
//   {
//     id: 58,
//     name: "QUATRO FUNGHI",
//     type: "HVIDE PIZZAER",
//     prices: {
//       regular: 92,
//       large: 160,
//     },
//     ingredients: [
//       "4 forskellige svampe",
//       "pinjekerne",
//       "høvlet parmesan ost",
//       "trøffelsauce",
//     ],
//   },
//   {
//     id: 59,
//     name: "PANCHETTA",
//     type: "HVIDE PIZZAER",
//     prices: {
//       regular: 92,
//       large: 160,
//     },
//     ingredients: ["Kartofler", "panchetta", "cherry tomater", "løg"],
//   },
//   {
//     id: 150,
//     name: "PIEMONTE",
//     type: "GOURMET PIZZAER",
//     prices: {
//       regular: 99,
//       large: 160,
//     },
//     ingredients: ["Vildsvin", "skovsvampe", "trøffelsauce"],
//   },
//   {
//     id: 151,
//     name: "MESSINA",
//     type: "GOURMET PIZZAER",
//     prices: {
//       regular: 89,
//       large: 155,
//     },
//     ingredients: ["gorgonzola", "nduja"],
//   },
//   {
//     id: 152,
//     name: "SALSICCIA",
//     type: "GOURMET PIZZAER",
//     prices: {
//       regular: 91,
//       large: 160,
//     },
//     ingredients: ["Salsiccia fresca", "grillede auberginer", "revet parmesan"],
//   },
//   {
//     id: 155,
//     name: "MARGARITA NAPOLI",
//     type: "PIZZAER med GUL TOMATSAUCE",
//     prices: {
//       regular: 79,
//       large: 125,
//     },
//     ingredients: [
//       "Gul tomatsauce",
//       "bøffel mozzarella",
//       "frisk basilicum",
//       "olivenolie",
//     ],
//   },
//   {
//     id: 156,
//     name: "SALERNO",
//     type: "PIZZAER med GUL TOMATSAUCE",
//     prices: {
//       regular: 99,
//       large: 160,
//     },
//     ingredients: [
//       "Gul tomatsauce",
//       "mozzarella",
//       "squash",
//       "bresaola",
//       "parmesan",
//     ],
//   },
//   {
//     id: 157,
//     name: "MILANO",
//     type: "PIZZAER med GUL TOMATSAUCE",
//     prices: {
//       regular: 95,
//       large: 155,
//     },
//     ingredients: [
//       "Gul tomatsauce",
//       "mozzarella",
//       "squash",
//       "nduja",
//       "gorgonzola",
//     ],
//   },
//   {
//     id: 158,
//     name: "BARI",
//     type: "PIZZAER med GUL TOMATSAUCE",
//     prices: {
//       regular: 92,
//       large: 150,
//     },
//     ingredients: [
//       "Gul Tomatsauce",
//       "mozzarella",
//       "squash",
//       "nduja",
//       "gorgonzola",
//     ],
//   },
//   {
//     id: 70,
//     name: "ODRI",
//     type: "VEGANSKE PIZZAER",
//     prices: {
//       regular: 92,
//       large: 155,
//     },
//     ingredients: [
//       "Grillede aubergine",
//       "grillet squash",
//       "grillede peberfrugt",
//       "hvidløg",
//     ],
//   },
//   {
//     id: 71,
//     name: "SARANDA",
//     type: "VEGANSKE PIZZAER",
//     prices: {
//       regular: 92,
//       large: 155,
//     },
//     ingredients: ["Veganske pølser", "aubergine", "grillet paprika"],
//   },
//   {
//     id: 72,
//     name: "VLORA",
//     type: "VEGANSKE PIZZAER",
//     prices: {
//       regular: 92,
//       large: 155,
//     },
//     ingredients: ["Kartofler", "veganske pølser", "løg"],
//   },
//   {
//     id: 73,
//     name: "LURA",
//     type: "VEGANSKE PIZZAER",
//     prices: {
//       regular: 92,
//       large: 155,
//     },
//     ingredients: ["Champignon", "peberfrugt", "løg", "asparges"],
//   },
// ];

// async function insertPizzaData() {
//   try {
//     pizzaData.forEach((pizza, index) => {
//       pizza.number = index + 1;
//       delete pizza.id;
//     });

//     const { data, error } = await supabase
//       .from("pizzas")
//       .insert(pizzaData)
//       .select();

//     if (error) {
//       console.error("Error inserting pizzas:", error.message);
//     } else {
//       console.log("Pizzas inserted successfully:", data);
//     }
//   } catch (error) {
//     console.error("Error inserting pizzas:", error.message);
//   }
// }

// insertPizzaData();
