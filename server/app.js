const express = require('express');
const cors = require('cors')
const http = require('http');
const app = express();
const httpServer = http.createServer(app);
const socket= require('./helpers/socket')
const database= require('./helpers/mongo')
const SocketEvents = require('./helpers/socketEvents')

const io = socket.initialize(httpServer);
database.initialize();

app.use(cors());
app.use(express.json());

var productRouter = require('./routes/products.routes.js')(io);
app.use('/products', productRouter);


io.on(SocketEvents.CONNECT, (socket)=> {
  socket.on(SocketEvents.JOIN_PRODUCT_ROOM, (id)=> {
    socket.join('product-' + id);
    socket.emit(SocketEvents.JOINED_PRODUCT_ROOM);
  });
})

httpServer.listen(3000, () => {
  console.log('listening on *:3000');
});