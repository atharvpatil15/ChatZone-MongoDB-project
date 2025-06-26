const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const port = 8080;
const chat = require("./models/chat.js");
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));



main()
  .then(() => {
    console.log("connect succesfully");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb+srv://atharva2005:<Patil@2005>@cluster0.sikdhtg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
}

app.listen("8080", (req, res) => {
  console.log("app is listening on port", port);
});


app.get("/", (req, res) => {
  res.redirect("/chats");
});

//home page route
app.get("/chats", async (req, res) => {
  let chats = await chat.find();
  res.render("index.ejs", { chats });
});

//route to make the new chat
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

// the route where chat will save into database and show on the home page or hat page 
app.post("/chats", (req, res) => {
  let { from, msg, to } = req.body;
  let newChat = new chat({
    from: from,
    msg: msg,
    to: to,
    createdAt: new Date(),
  });

  newChat
    .save()
    .then(() => {
      console.log("chat was saved");
    })
    .catch((err) => {
      console.log(err);
    });
    
  res.redirect("/chats");
});

app.get("/chats/:id/edit", async (req, res)=>{
    const {id} = req.params;
    let Chat = await chat.findById(id);
    res.render("edit.ejs", {Chat});
});

//the route to update the content
app.put("/chats/:id", async (req,res)=>{
    const {id} = req.params;
    let { msg: newMsg } = req.body;
    console.log(newMsg);
    console.log(req.body);
    let updatedChat = await chat.findByIdAndUpdate(id,{msg: newMsg}, {runValidators: true, new: true});

    // console.log(updatedChat);
    res.redirect("/chats");
});

//route to delete the chat 
app.delete("/chats/:id", async(req,res)=>{
  const {id} = req.params;
  let deletedChat = await chat.findByIdAndDelete(id);
  console.log("deleted chat is :",deletedChat);
  res.redirect("/chats");
})