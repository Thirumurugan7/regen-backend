const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const cors = require('cors');  
const app = express();

// Connect to Database
connectDB();
app.use(cors('*'));
app.use(bodyParser.json());

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/loans', require('./routes/loans'));
app.use('/api/projects', require('./routes/projects'));


app.get("/", (req, res) => {
    res.send("Hello World");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
