/*
WHATSAPP BOT BY Janith sadanuwan 
WHATSAPP - 94767438882
SUPPORT GROUP - https://t.me/QueenNilu
YOUTUBE - http://youtube.com/janithsadanuwan
*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// PUT YOUR SESSION ID HERE  ##Required 

global.SESSION_ID = 'QueenNilu;;;gix2zKDZ#j0GbIcgVApQ8EXCIzPggF8Ep4TpUk6fB_pSPtuoPz3w' // PUT your session ID BY scan QR 

// databse URL  ##Required 
global.POSTGRESQL_URL = 'postgres://treamx_nilu_2_user:821qxYe5aaU7VTy5lkUeqH6hX9oZVJO7@dpg-clbfig6g1b2c73d3vlvg-a.frankfurt-postgres.render.com/treamx_nilu_2'

 

// ⚙️ OWNER SETTINGS  ⚙️

global.OWNER_NUMBER = '94721031998'

global.OWNER_NAME = 'Tream X '

global.TIMEZONE = 'Asia/Colombo' 

global.INBOX_BLOCK_MESSAGE = 'කරුනාකර අදාල Group එක තුළ පමනක් බොට් භාවිත කරන්න ❤️' // Inboc Block Message

global.INBOX_BLOCK = 'false' // TO Inbox Block On put true

global.READ_MESSAGE = "true" 

global.OPENAI_API_KEY = "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" 

/*
⚙️ BOT  SETTINGS  ⚙️
*/

global.BOT_NAME = 'Tream X'

global.FOOTER = 'Tream X 2023'

global.BOT_OFFLINE = false    //  Always Onlne -  | false offline -True

global.STICKER_NAME = '@Tream X 🤹‍♂️' //sticker

global.LANG = 'SI' // Language (EN-  TO english  ,  SI- TO sinhala )

global.PREFIX = '.' // Bot Prefix

global.CAPTION = 'Tream X  © 2023' // Caption

global.ALIVELOGO = 'https://telegra.ph/file/50485b07a9cddf08224b6.jpg' // Set Alive Logo link 

global.ALIVE_MESSAGE = 'Hello Guys 🌝❤️ Your Bot Online Now 😎' // Set Alive Message

global.MAX_SIZE = '500' // Bot Uloading Max size 

global.ANTI_BAD = true // Antibad (on = True , Off = False )

global.ANTI_BAD_ACTION = false

global.ANTI_LINK = true //Anti Link (on = True , Off = False )

global.ANTI_BOTS = true

global.ONLY_GROUP = 'false' // Only group mode

global.GROUP_LINK = 'https://chat.whatsapp.com/IRdyJY5P4sF5BhtP5PIdHH' // ur group link


/* 18 + Download Settings */

global.SEX_DL = 'false' // 18 + video dl

/* AUTO REPLY SETTINGS */

global.AUTO_STICKER = true

global.AUTO_REPLY = true

global.VOICE_REPLY = true


/* V card */

global.ytname = "YT: Tream X" //ur yt chanel name
global.socialm = "GitHub: janithsadanuwan" //ur github or insta name
global.location = "Srilanka, colombo" //ur location
