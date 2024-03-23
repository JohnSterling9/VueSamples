<template>
    <div class="shop">
        <div class="header-container">
            <h1>Welcome &nbsp;<span id="name-highlight">{{ username }}!</span></h1>
            <button id="main-button2" type="submit" @click="logOut">Logout</button>
        </div>

        <AlertNotification v-if="showAlert" :message="alertMessage" :deleteType="isDelete" />

        <div class="label-container">
            <p>Item</p>
            <p>Price</p>
            <p>Quantity</p>
        </div>
        <div class="form-container">
            <input class="form" v-model="itemName" placeholder="Type your item here" />
            <input class="form" v-model="itemPrice" placeholder="Type your price here" @input="restrictToNumbersPrice"/>
            <input class="form" v-model="itemQuantity" placeholder="Type your quantity here" @input="restrictToNumbersQuantity"/>
            <button id="main-button" @click="addItem">Add to Cart</button>
        </div>    

        <table>
            <thead>
                <tr>
                <th>ITEM</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>ACTIONS</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in list" :key="index">
                <td>
                    <input v-if="index === editingIndex" v-model="editedItem.name" type="text">
                    <span v-else>{{ item.name }}</span>
                </td>
                <td>
                    <input v-if="index === editingIndex" v-model="editedItem.price" type="number">
                    <span v-else>₱{{ item.price }}</span>
                </td>
                <td>
                    <input v-if="index === editingIndex" v-model="editedItem.quantity" type="number">
                    <span v-else>{{ item.quantity }}</span>
                </td>
                <td>
                    <button id="control-buttons" @click="editItem(index)">
                    {{ editingIndex === index ? 'Save' : 'Update' }}
                    </button>
                    <button id="control-buttons" @click="deleteItem(index)">Delete</button>
                </td>
                </tr>
            </tbody>
        </table>

        <TotalPrice :items=list />
    </div>
</template>    

<script>
    import AlertNotification from './AlertNotification.vue';
    import TotalPrice from './TotalPrice.vue';

    export default {
        components: {
            AlertNotification,
            TotalPrice
        },
        data() {
            return {
                username: '',

                itemName: '',
                itemPrice: '',
                itemQuantity: '',
                list: [],

                showAlert: false,
                alertMessage: '',
                isDelete: false,

                editingIndex: -1,
                editedItem: { name: '', price: 0, quantity: 0 }
            };
        },
        mounted() {
            const { username } = this.$route.query;
            this.username = username;
        },    
        methods: {
          addItem: function() {
            if (this.itemName !== '' && this.itemPrice !== '') {
              this.list.push({name: this.itemName, price: this.itemPrice, quantity: this.itemQuantity });
              this.itemName = '';
              this.itemPrice = '';
              this.itemQuantity = '';

              this.showAlert = true;
              this.isDelete = false;
              this.alertMessage = 'Item added successfully!';
              setTimeout(() => {
                    this.showAlert = false;
              }, 3000);
            }
          },

          editItem(index) {
            if (this.editingIndex === index) {
                // Save button
                this.list[index] = { ...this.editedItem };
                this.editingIndex = -1;
                this.editedItem = { name: '', price: 0, quantity: 0 };
            } else {
                // Update button
                this.editingIndex = index;
                this.editedItem = { ...this.list[index] };
            }
            },

          deleteItem(index) {
            this.list.splice(index, 1);
            
            this.showAlert = true;
            this.alertMessage = 'Item deleted successfully!';
            this.isDelete = true;
              setTimeout(() => {
                    this.showAlert = false;
              }, 3000);
          },
          restrictToNumbersPrice(event) {
              this.itemPrice = event.target.value.replace(/\D/g, '');
          },
          restrictToNumbersQuantity(event) {
              this.itemQuantity = event.target.value.replace(/\D/g, '');
          },
          logOut() {
            this.$router.push({ path: '/'});
          }  
        }
    }   
</script>

<style>
    .header-container {
        position: fixed;
        top: 0;
        left: 0;
        padding: 3px;
        width: 100%;
        display: flex;
        align-items: center;
        background-color: #cc3301;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }
    .header-container h1 {
        font-size: 20px;
        margin-left: 20px;
        color: white;
    }
    .header-container button {
        background-color: #1F3B4D;
        color: white;
        height: 30px;
        width: 100px;
        border: none;
        cursor: pointer;
        border-radius: 5px;
        margin-left: auto;
        margin-right: 30px;
    }
    .header-container button:hover {
        background-color: #0056b3;
    }
    #name-highlight {
        color: #1F3B4D;
    }
    .label-container {
        display: flex;
        justify-content: center;
        margin-left: -140px;
    }

    .label-container p {
        margin-right: 180px;
        margin-bottom: -5px;
        font-size: 16px;
        font-weight: bold;
    }
    .form {
        margin: 20px;
        margin-top: -20px;
        height: 20px;
    }    
    .form-container {
        margin-right: 50px; 
    }
    #main-button {
        background-color: #007bff;
        color: white;
        padding: 15px 30px;
        border: none;
        cursor: pointer;
        border-radius: 5px;
        margin-left: 40px;
    }
    #main-button:hover {
        background-color: #0056b3;
    }
    table {
        margin:auto;
        margin-top: 40px;
        width: 1100px;
        border-collapse: collapse;
        border-color: #1F3B4D;
    }

    th {
        background-color: #cc3301;
        color: white;
        border: none;
        padding: 5px;
        border: 1px solid #010b13;
    }

    td {
        border: 2px solid #010b13;
        padding: 5px;
    }

    th:nth-child(1),
    td:nth-child(1) {
    width: 40%;
    }

    th:nth-child(2),
    td:nth-child(2) {
    width: 15%;
    }

    th:nth-child(3),
    td:nth-child(3) {
    width: 15%;
    }

    th:nth-child(4),
    td:nth-child(4) {
    width: 30%;
    }
    #control-buttons {
        background-color: #cc3301;
        color: white;
        margin-right: 15px;
        padding: 5px;
        border: none;
        cursor: pointer;
        border-radius: 5px;
    }
    #control-buttons:hover {
        background-color: #0056b3;
    }
</style>