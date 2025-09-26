const express = require('express');
require('dotenv').config();

const app = express();

const categoryRoutes = require('/routes/categoryRoutes');

app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

app.use('/api/v1/category', categoryRoutes);