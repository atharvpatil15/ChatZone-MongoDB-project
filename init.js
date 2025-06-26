const mongoose = require("mongoose");
const chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connect succesfully");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ChatZone");
}

let allChat = [
  {
    from: "yash",
    to: "joy",
    msg: "hii joy, yash here",
    createdAt: new Date(),
  },
  {
    from: "gaurav",
    to: "golu",
    msg: "hii golu, gaurav here",
    createdAt: new Date(),
  },
  {
    from: "mahesh",
    to: "pawan",
    msg: "hii pawan, mahesh here",
    createdAt: new Date(),
  },
  {
    from: "guddu",
    to: "bittu",
    msg: "hii bittu, guddu here",
    createdAt: new Date(),
  },
  {
    from: "deva",
    to: "naman",
    msg: "hii naman, deva here",
    createdAt: new Date(),
  }
];



chat.insertMany(allChat);

