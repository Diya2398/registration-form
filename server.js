// server.js
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/registration', { useNewUrlParser: true, useUnifiedTopology: true });

// Define Schema
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

// Middleware
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/registration_form.html');
});

app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });
    newUser.save((err) => {
        if (err) {
            console.error(err);
            res.status(500).send('error registering user');
        } else {
            res.send('User registered successfully');
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
