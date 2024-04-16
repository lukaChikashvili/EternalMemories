const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');


app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;


// CONNECT DATABASE
mongoose.connect(process.env.MONGO_URL).then(() => {
   console.log('database connected');
}).catch((err) => {
   console.log(err);
})


app.listen(PORT, () => {
   console.log(`server running on port ${PORT}`);
})