const mongoose = require("mongoose");
const config = require("../config/database");

const MessageSchema = mongoose.Schema({
  name: {
    type: String
  },
  content: {
    type: String,
    required: true
  }
});

const Message1 = mongoose.model("Message", MessageSchema);

Message1.addMessage = function(newMessage, callback) {
  newMessage.save(callback);
};

Message1.getAll = function(callback) {
  Message1.find(callback);
};

module.exports = Message1;
