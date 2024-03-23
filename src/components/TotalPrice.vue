<template>
    <div>
      <p>Total Price: ₱{{ totalPrice }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      items: {
        type: Array,
        required: true
      }
    },
    computed: {
      totalPrice() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
      }
    }
  };
  </script>