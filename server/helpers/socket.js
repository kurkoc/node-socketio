const { Server } = require("socket.io");

function initialize(httpServer){
    return new Server(httpServer, {
        cors: {
          origin: ["http://localhost:3001"],
          methods: ["GET", "POST"]
        }
      });
}



module.exports = {initialize}