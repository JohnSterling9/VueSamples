<template>
  <transition name="fade">
      <div v-if="showAlert" :class="{ 'alert': true, 'green':!deleteType, 'red':deleteType }" @animationend="hideAlert">
        {{ message }}
      </div>
   </transition>   
  </template>
  
  <script>
  export default {
    props: {
      message: String,
      deleteType: Boolean
    },
    data() {
      return {
        showAlert: true
      };
    },
    methods: {
      hideAlert() {
        this.showAlert = false;
      }
    }
  };
  </script>
  
  <style>
  .alert {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 15px;
  border-radius: 5px;
  border: 1px solid transparent;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

.red {
  background-color: #f8d7da;
  border-color: #f5c6cb;
}

.green {
  background-color: #d4edda;
  border-color: #c3e6cb;
}

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  </style>