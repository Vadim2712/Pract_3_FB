const express = require('express');
const bodyParser = require('body-parser');

const adminApp = express();
const ADMIN_PORT = 8080;

adminApp.use(bodyParser.json());

// Панель администратора (обработка корневого пути)
adminApp.get('/', (req, res) => {
    res.send('Админ панель'); // Выводим текст для проверки
});

// Другие маршруты для админки...

adminApp.listen(ADMIN_PORT, () => {
    console.log(`Admin server is running on http://localhost:${ADMIN_PORT}`);
});
