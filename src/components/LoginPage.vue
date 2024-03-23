<template>
    <div class="login-background">
    <div class="login-container" :class="{ 'popup': isLoaded }">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button id="loginbutton" type="submit" @click="login">Login</button>
      </form>
    </div>
  </div>
</template>
  
  <script>
  import router from '../routes/router.js';

  export default {
    setup() {
        const routerInstance = router;

        return {
        routerInstance
        };
    },
    data() {
      return {
        username: '',
        password: '',
        isLoaded: false
      };
    },
    mounted() {
      setTimeout(() => {
        this.isLoaded = true;
      }, 100);
    },
    methods: {
        login() {
            if (this.username && this.password !== '') {
                this.$router.push({ path: '/shoplist', query: { username: this.username, password: this.password }});
            } else {
                alert('Please fill out the login form');
                return;
            }
        }
    }
  };
  </script>

  <style>
    .login-background {
    display: flex;
    justify-content: center;
    margin-top: -35px;
    }

    .login-container {
    background-color: #cc3301;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    width: 300px;
    transition: transform 0.5s ease;
    transform: scale(0.8);
    margin-top: 30px;
    }

    .popup {
    transform: scale(1); /* Scale back to normal size */
    }

    .form-group {
    margin-bottom: 15px;
    }

    h2 {
    color: white;
    }

    label {
    display: block;
    margin-bottom: 5px;
    color: white;
    }

    input[type="text"],
    input[type="password"] {
    width: calc(100% - 20px); /* Adjust width */
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    }

    #loginbutton {
    width: 100%;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    }

    #loginbutton:hover {
    background-color: #0056b3;
    }

  </style>