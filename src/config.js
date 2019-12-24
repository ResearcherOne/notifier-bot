const dotenv = require('dotenv');

const result = dotenv.config();
if (result.error) {
    throw result.error
}

const TELEGRAM_SECRET_TOKEN = process.env.TELEGRAM_SECRET_TOKEN;
const TELEGRAM_ID_LIST_TO_BE_NOTIFIED = process.env.TELEGRAM_ID_LIST_TO_BE_NOTIFIED.split(' ');

module.exports = {
    TELEGRAM_SECRET_TOKEN: TELEGRAM_SECRET_TOKEN,
    TELEGRAM_ID_LIST_TO_BE_NOTIFIED: TELEGRAM_ID_LIST_TO_BE_NOTIFIED
}