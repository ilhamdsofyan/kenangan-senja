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
        id: 3,
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
      // Check if item already exists
      const cartItem = this.items.find((item) => item.id === newItem.id);

      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.total += parseInt(newItem.price);
        this.quantity++;
      } else {
        this.items = this.items.map((item) => {
          if (item.id !== newItem.id) {
            return item;
          } else {
            item.quantity++;
            item.total = parseInt(item.price) * parseInt(item.quantity);

            this.quantity++;
            this.total += parseInt(item.price);

            return item;
          }
        });
      }
    },
    remove(id) {
      const cartItem = this.items.find((item) => item.id === id);

      if (cartItem.quantity > 1) {
        this.items = this.items.map((item) => {
          if (item.id != id) {
            return item;
          } else {
            item.quantity--;
            item.total = parseInt(item.price) * parseInt(item.quantity);

            this.quantity--;
            this.total -= parseInt(item.price);

            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= parseInt(cartItem.price);
      }
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
