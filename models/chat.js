const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    from: {
        type: String,
        require: true
    },
    to: {
        type: String,
        require: true
    },
    msg: {
        type: String
    },
    createdAt: {
        type: Date,
        require: true
    }
});

const chat = mongoose.model("chat", chatSchema);

module.exports = chat;
