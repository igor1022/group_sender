const TelegramBot = require('node-telegram-bot-api');

// Укажите свой токен, полученный у BotFather
const token = '';

// ID групп, куда будут пересылаться сообщения
const group1ChatId = -1002046062164;
const group2ChatId = -1002088693739;
const group3ChatId = -1001987266452;
const group4ChatId = -1001920113346;
const group5ChatId = -1002029904846;

// Создаем бота
const bot = new TelegramBot(token, { polling: true });

// Обработчик сообщений
bot.on('message', (msg) => {
    const messageText = msg.text;
    bot.sendMessage(group1ChatId, messageText);
    bot.sendMessage(group2ChatId, messageText);
    bot.sendMessage(group3ChatId, messageText);
    bot.sendMessage(group4ChatId, messageText);
    bot.sendMessage(group5ChatId, messageText);
});
