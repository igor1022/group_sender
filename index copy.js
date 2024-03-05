import TelegramBot from 'node-telegram-bot-api';

const token = 'YOUR_BOT_TOKEN';
const group1ChatId = -1001930823463;
const group2ChatId = -1002086506345;
const specialUserId = 269694206; // User ID to check against

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const messageText = msg.text;
    const isPrivateChat = msg.chat.type === 'private';
    const isCommand = messageText.startsWith('/');
    const isSpecialUser = msg.from.id === specialUserId;

    if (isPrivateChat && !isCommand && isSpecialUser) {
        bot.sendMessage(group1ChatId, messageText);
        bot.sendMessage(group2ChatId, messageText);
        console.log('Message sent to groups from special user:', messageText);
    } else {
        console.log('Ignoring command or message from a non-private chat or not from special user:', messageText);
    }
});
