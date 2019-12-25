const config = require("./config.js");
const NotifierBot = require('./NotifierBot.js');

const notifierBot = new NotifierBot(config.TELEGRAM_SECRET_TOKEN, config.TELEGRAM_ID_LIST_TO_BE_NOTIFIED, config.TELEGRAM_HELP_TEXT);

setTimeout(() => {
    notifierBot.notifyUsers("YO YO YO YO");
}, 5000);