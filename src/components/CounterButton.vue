<!-- CounterButton.vue -->
<template>
    <button @click="incrementCounter">Click me! ({{ counter }})</button>
    </template>
    <script>
        export default {
        data() {
        return {
            counter: 0
                };
                },
                methods: {
                    incrementCounter() {
                        this.counter++;
                    }
                }
        };
    </script>
<style scoped>
/* Scoped styles */
    button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    }
</style>