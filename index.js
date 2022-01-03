const TelegramBot = require("node-telegram-bot-api");

// replace the value below with the Telegram token you receive from @BotFather
const token = "5099745054:AAEGRSAhtkpS2xbhSWInb270svae2OSp_go";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

bot.on("message", (msg) => {
  const greeting = "Hi Earthling! How are you feeling today?";
  if (msg.text.toString().toLowerCase().indexOf("hi") === 0) {
    bot.sendMessage(msg.chat.id, greeting);
  }
});

bot.on("message", (msg) => {
  const replyToSad =
    "It’s okay. Everything will be okay. Where does the problem come from?";
  if (msg.text.toString().toLowerCase().includes("sad")) {
    bot.sendMessage(msg.chat.id, replyToSad);
  }
});

bot.onText(/\/try/, (msg) => {
  bot.sendMessage(msg.chat.id, "Welcome", {
    reply_markup: {
      keyboard: [["Sample text", "Second sample"], ["Keyboard"], ["I'm robot"]],
    },
  });
});
