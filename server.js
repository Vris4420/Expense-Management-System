const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.get("/", (req,res) => {
    res.send("hello");
});

const PORT = 8080 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})