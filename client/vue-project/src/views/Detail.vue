<script setup>
    import { toast } from 'vue3-toastify';
    import {useRoute} from "vue-router";
    import axios from 'axios';
    import { onMounted, nextTick, ref } from 'vue';
    import { io } from "socket.io-client";
    import SocketEvents from '../helpers/SocketEvents'
    const socket = io('http://localhost:3000');

    const route = useRoute();
    const id = route.params.id;
    let product = ref({});

    onMounted(async () => {
        var result = await axios.get('http://localhost:3000/products/' + id);
        product.value = result.data;
    });

    socket.on(SocketEvents.CONNECT, ()=>{
        toast('socket connected');
    });
    socket.emit(SocketEvents.JOIN_PRODUCT_ROOM, id);

    socket.on(SocketEvents.PRODUCT_QUANTITY_CHANGED, (quantity)=>{
        toast('quantity changed ' + quantity);
        product.value.quantity = parseInt(quantity);
    });

    socket.on(SocketEvents.JOINED_PRODUCT_ROOM, ()=>{
        toast('joined room');
    });

</script>

<template>
    <pre>{{ product }}</pre> 
</template>