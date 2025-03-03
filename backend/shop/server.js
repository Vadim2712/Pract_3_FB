const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const SHOP_PORT = 3000;

// Настройки CORS с указанием источника
const corsOptions = {
    origin: 'http://127.0.0.1:5500',  // Убедитесь, что указываете правильный порт фронтенда
    methods: 'GET',
    allowedHeaders: 'Content-Type',
};

// Разрешаем CORS
app.use(cors(corsOptions));

let products = [
    { id: 1, name: 'Товар 1', price: 100, description: 'Описание товара 1', categories: ['Категория 1'] },
    { id: 2, name: 'Товар 2', price: 200, description: 'Описание товара 2', categories: ['Категория 2'] },
    { id: 3, name: 'Товар 3', price: 150, description: 'Описание товара 3', categories: ['Категория 1'] },
    { id: 4, name: 'Товар 4', price: 250, description: 'Описание товара 4', categories: ['Категория 2'] },
    { id: 5, name: 'Товар 5', price: 300, description: 'Описание товара 5', categories: ['Категория 1', 'Категория 2'] }
];

// Получить список товаров
app.get('/shop/products', (req, res) => {
    res.json(products);
});

// Запуск сервера
app.listen(SHOP_PORT, () => {
    console.log(`Shop server is running on http://localhost:${SHOP_PORT}`);
});
