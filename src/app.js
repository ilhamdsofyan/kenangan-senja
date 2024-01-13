document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      {
        id: 1,
        name: "Robusta Blend",
        img: "assets/img/products/1.jpg",
        price: "30000",
        from: "55000",
        stars: 3,
      },
      {
        id: 2,
        name: "Robusta Brazil",
        img: "assets/img/products/2.jpg",
        price: "35000",
        from: "60000",
        stars: 4,
      },
      {
        id: 1,
        name: "Robusta FilterKaffee",
        img: "assets/img/products/3.jpg",
        price: "40000",
        from: null,
        stars: 5,
      },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      this.items.push(newItem);
      this.total += parseInt(newItem.price);
      this.quantity++;
    },
  });
});

// Konversi ke Rupiah
const rupiah = (number) => {
  if (!number) return null;

  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
