const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Connection String for connecting to the Database (^W^) ||NOTE TO SELF: NO LOSING THE PASSWORD, KEEP A COPY OF THEM SOMEWHERE.||
// mongoose.connect("mongodb+srv://20255221_db_user:DdO3Y6cPFpSVhwRQ@aptechprojects.ns4ubnz.mongodb.net/AptechProjects?appName=AptechProjects")
//     .then(() => console.log("MongoDB Connected Successfully"))
//     .catch(console.error);

// Temporary storage (saves users in memory)
let users = [];

// schema & model
// const userSchema = new mongoose.Schema({
//     fullName: String,
//     email: String,
//     password: String,
// });

// const User = mongoose.model("registration", userSchema, "registration");

app.post("/register", async (req, res) => {
    try {
        const user = {
            fullName: req.body.fullName,
            email: req.body.email,
            password: req.body.password,
            registeredAt: new Date()
        };
        users.push(user);
        console.log("User registered:", user);
        res.json({ message: "User registration successful.", user });
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
});

//to check for server if it works, original: 
app.listen(5000, () => console.log("Server running on port 5000"));