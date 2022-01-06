const Promise = require('bluebird');
Promise.config({
  cancellation: true
});
const TelegramBot = require("node-telegram-bot-api");

// replace the value below with the Telegram token you receive from @BotFather
const token = "5099745054:AAEGRSAhtkpS2xbhSWInb270svae2OSp_go";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  const greeting = "Hi Earthling! How are you feeling today?";
  if (msg.text.toString().toLowerCase().indexOf("hi") === 0 || msg.text.toString().toLowerCase().includes("bot")) {
    bot.sendMessage(msg.chat.id, greeting,{
      "reply_markup": {
          keyboard: [["I have something on my mind"],   ["I'm in a good mood"]]
          }
      });
  }
});

bot.on("message", (msg) => {
  
  if (msg.text.toString().toLowerCase().includes("i have something on my mind")) {
    
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
    "View the tips below to alleviate stress from work or internship and improve your mental health.\n \nTry relaxation strategies \n Keep perfectionism in check\n Take a walk during lunch break \n \n For more tips, check out our interactive website at www.nusodyssey.com.";
  if (msg.text.toString().toLowerCase().includes("work/internship")) {
    bot.sendMessage(msg.chat.id, replyToWork);  
    bot.sendVideo(msg.chat.id,"https://tenor.com/bxYUF.gif",{caption : "I hope you'll feel better soon! :3"} ); 
  }
});

bot.on("message", (msg) => {
  const replyToPrivate =
    "View the tips below to alleviate stress from your private life and improve your mental health.\n \nAccept your feelings \n Turn to friends and family members \n Get professional help if needed \n \n For more tips, check out our interactive website at www.nusodyssey.com.";
  if (msg.text.toString().toLowerCase().includes("private")) {
    bot.sendMessage(msg.chat.id, replyToPrivate); 
    bot.sendVideo(msg.chat.id,"https://media.giphy.com/media/4yqm7egRkeAm492ORN/giphy.gif",{caption : "I hope you'll feel better soon! :3"} ); 
     
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

  bot.on("message", (msg) => {
  
    if (msg.text.toString().toLowerCase().includes("website")) {
      
    bot.sendMessage(msg.chat.id, "Our website link is www.nusodyssey.com."); 
    bot.sendPhoto(msg.chat.id,"https://i.postimg.cc/yYtqKXCh/Screenshot-2022-01-06-at-12-13-54-PM.png",{caption : "Here's how our website looks like. Check it out now!"} ); 
    }
  });

  bot.on("message", (msg) => {
  
    if (msg.text.toString().toLowerCase().includes("i'm in a good mood")) {
      
    bot.sendMessage(msg.chat.id, "It's great you're feeling okay. View our website to see how you can stay this way. \n \n www.nusodyssey.com"); 
    }
  });

  bot.on("message", (msg) => {
    if (!msg.text.toString().toLowerCase().includes("i'm in a good mood")) {
      
      bot.sendMessage(msg.chat.id, "It's great you're feeling okay. View our website to see how you can stay this way. \n \n www.nusodyssey.com"); 
      }
  })


