import TelegramBot from 'node-telegram-bot-api';

const token = '';

const group1ChatId = -1002046062164;
const group2ChatId = -1002088693739;
const group3ChatId = -1001987266452;
const group4ChatId = -1001920113346;
const group5ChatId = -1002029904846;

const specialUserId = 269694206; // User ID to check against    

//TESTOVI
// const group1ChatId = -1001930823463;
// const group2ChatId = -1002086506345;


const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const messageText = msg.text;
    const isPrivateChat = msg.chat.type === 'private';
    const isCommand = messageText.startsWith('/');
    const isSpecialUser = msg.from.id === specialUserId;

    if (isPrivateChat && !isCommand && isSpecialUser) {
        bot.sendMessage(group1ChatId, messageText);
        bot.sendMessage(group2ChatId, messageText);
        bot.sendMessage(group3ChatId, messageText);
        bot.sendMessage(group4ChatId, messageText);
        bot.sendMessage(group5ChatId, messageText);
    } else {
        console.log('Ignoring command or message from a non-private chat:', messageText);
    }
});