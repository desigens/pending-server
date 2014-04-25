var express = require('express');
var target = express();

// Адрес для проверки корректной работы заглушки
target.get('/test', function (req, res) {
    res.send(200);
});

target.get('*', function (req, res) {
    // Ответа сервера не последует (эмуляция «лежащего» сервера).
});

// Порт 80 нужно запускать через sudo (см. "npm start" в package.json).
// Можно еще попробовать sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 3000
target.listen(80);


/*

В файле hosts нужно направить нужные хосты на локальный сервер (для тестирования с локальной машины):
127.0.0.1 www.google-analytics.com

Для тестирования с виртуальных машин, нужно изменить hosts внутри этих виртуалок.
Должен быть указан IP адрес основной ОС в локальной сети (можно узнать через ifconfig).

*/