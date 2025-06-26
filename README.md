
# ChatZone 💬

A simple yet powerful CRUD-based Chat App built with **Node.js**, **Express.js**, and **MongoDB**. This project is designed to demonstrate backend fundamentals including RESTful routing, form handling, database integration, and dynamic views using EJS.

---

## 🚀 Features

- 🌐 View all chat messages
- ✍️ Create new chats
- 🛠️ Edit existing messages
- ❌ Delete unwanted chats
- 📦 MongoDB database integration using Mongoose
- 🌍 Live deployed on Render
- ☁️ Database hosted on MongoDB Atlas

---

## 📸 Live Demo

🔗 [ChatZone Live on Render](https://chatzone-mongodb-project.onrender.com)

---

## 🧠 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose ODM
- **Templating**: EJS
- **Deployment**: Render (App) & MongoDB Atlas (Database)
- **Middleware**: Method-Override for PUT & DELETE support

---

## 📂 Folder Structure

```
ChatZone-MongoDB-project/
│
├── models/
│   └── chat.js              # Chat schema using Mongoose
│
├── views/
│   ├── index.ejs            # Chat list page
│   ├── new.ejs              # Form to create chat
│   └── edit.ejs             # Form to edit chat
│
├── public/                  # Static assets (CSS, JS, etc.)
│
├── index.js                 # Main server file
└── package.json
```

---

## 📦 Installation

```bash
git clone https://github.com/atharvpatil15/ChatZone-MongoDB-project.git
cd ChatZone-MongoDB-project
npm install
```

---

## ⚙️ Configuration

Create a `.env` file or directly edit the MongoDB URI in `index.js`:

```js
mongoose.connect("YOUR_MONGODB_ATLAS_URI_HERE")
```

---

## ✅ Run the App

```bash
node index.js
```

Open your browser at:  
📍 `http://localhost:8080`

---

## 📚 Learning Outcomes

- CRUD operations using Express.js and MongoDB
- RESTful routing and MVC architecture
- Mongoose schema, models, and query methods
- Templating with EJS
- Middleware integration for extended HTTP methods
- Render deployment process and MongoDB Atlas configuration

---


## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
