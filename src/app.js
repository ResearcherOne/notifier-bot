const Telegraf = require('telegraf');
const telegram = require('telegraf/telegram')

const config = require("./config.js");

const helpText = "You need to be assigned by the server-side software to be able to receive notifications. Please contact admin.";

const bot = new Telegraf(config.TELEGRAM_SECRET_TOKEN);


function notifyUsers(message) {
    const IDList = config.TELEGRAM_ID_LIST_TO_BE_NOTIFIED;
    IDList.forEach(ID => {
        bot.telegram.sendMessage(ID, message)
    });
}


bot.start((ctx) => ctx.reply('Welcome to notifier bot! '+helpText))
bot.help((ctx) => ctx.reply(helpText))

const command = "/myid";
bot.command(command, function(ctx){
    const receivedText = ctx.message.text;
    const receivedTitle = receivedText.substring(command.length+1);

    const userID = ctx.message.from.id;
    const chatID = ctx.chat.id;

    ctx.reply("Your id is "+userID+" and your chat id is "+chatID);
})

bot.on('message', function(ctx){
    ctx.reply('Oops, this is not a command. Get help by typing /help')
    notifyUsers(bot, "OMG-OMG-OMG")
})
bot.launch()