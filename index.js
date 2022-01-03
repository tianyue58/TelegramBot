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
  if (msg.text.toString().toLowerCase().indexOf("hi") === 0 || msg.text.toString().toLowerCase().includes("bot")) {
    bot.sendMessage(msg.chat.id, greeting);
  }
});

bot.on("message", (msg) => {
  
  if (msg.text.toString().toLowerCase().includes("sad")) {
    
    bot.sendMessage(msg.chat.id, "Where does the problem come from?", {
      "reply_markup": {
          keyboard: [["At school"],   ["At work/internship"], ["In my private life"]]
          }
      });
  }
});

bot.on("message", (msg) => {
  const replyToSchool =
    "View the tips below to alleviate stress from school and improve your mental health.\n \nRemember to breathe \n Eat, sleep and exercise well \n Set realistic goals \n \n For more tips, check out our interactive website at www.nusodyssey.com.";
  if (msg.text.toString().toLowerCase().includes("school")) {
    bot.sendMessage(msg.chat.id, replyToSchool); 
    bot.sendVideo(msg.chat.id,"https://v-phinf.pstatic.net//20210225_103/1614238878699nLzOy_GIF/image.gif",{caption : "Hope you'll feel better soon. I wish I could give you a hug."} ); 
  }
});

bot.on("message", (msg) => {
  const replyToWork =
    "View the tips below to alleviate stress from work or internship and improve your mental health.\n \nRemember to breathe \n Eat, sleep and exercise well \n Set realistic goals \n \n For more tips, check out our interactive website at www.nusodyssey.com.";
  if (msg.text.toString().toLowerCase().includes("work")) {
    bot.sendMessage(msg.chat.id, replyToSchool);  
  }
});

bot.on("message", (msg) => {
  const replyToPrivate =
    "View the tips below to alleviate stress from your private life and improve your mental health.\n \nRemember to breathe \n Eat, sleep and exercise well \n Set realistic goals \n \n For more tips, check out our interactive website at www.nusodyssey.com.";
  if (msg.text.toString().toLowerCase().includes("private")) {
    bot.sendMessage(msg.chat.id, replyToSchool);  
  }
});

bot.onText(/\/start/, (msg) => {

  bot.sendMessage(msg.chat.id, "Welcome", {
  "reply_markup": {
      "keyboard": [["See our campaign"],   ["See our website"], ["Play with the bot"]]
      }
  });
  
  });

  bot.on("message", (msg) => {
  
    if (msg.text.toString().toLowerCase().includes("campaign")) {
      bot.sendMessage(msg.chat.id, "Introducing our campaign, NUS Odyssey!"); 
      bot.sendMessage(msg.chat.id, "Fllow this link to see our campaign details. \n https://drive.google.com/file/d/13WPAlLQ5kHbbdDeaRiJyTdM3G6H94M67/view?usp=sharing"); 
    
    }
  });


