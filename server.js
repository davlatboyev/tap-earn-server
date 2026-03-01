const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let users = {};

app.post("/tap", (req, res) => {
    const userId = req.body.userId;

    if (!users[userId]) {
        users[userId] = { coin: 0, level: 1 };
    }

    users[userId].coin += users[userId].level;

    if (users[userId].coin >= users[userId].level * 100) {
        users[userId].level++;
    }

    res.json(users[userId]);
});

app.get("/", (req,res)=>{
    res.send("Tap Earn Server Working 🚀");
});

app.listen(3000, () => console.log("Server running"));