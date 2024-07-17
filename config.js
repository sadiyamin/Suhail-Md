const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://sadiyamin7:26hZRQsKJealefqk@anya.ikwalvb.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Colombo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94768211853";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_06_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTYwLFxuICAgICAgICA4MixcbiAgICAgICAgNDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODgsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTAyLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODksXG4gICAgICAgIDc5LFxuICAgICAgICAzNixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjAxLFxuICAgICAgICA2MixcbiAgICAgICAgOTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTU0LFxuICAgICAgICA2OCxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjIyLFxuICAgICAgICA3OCxcbiAgICAgICAgNCxcbiAgICAgICAgNTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM4LFxuICAgICAgICA1MyxcbiAgICAgICAgMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTYyLFxuICAgICAgICA2LFxuICAgICAgICAxODcsXG4gICAgICAgIDI4LFxuICAgICAgICA0NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc3LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxODIsXG4gICAgICAgIDczLFxuICAgICAgICA4OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDM0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDUyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTksXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI3LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjUzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjMwLFxuICAgICAgICA2NixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTYzLFxuICAgICAgICA2OSxcbiAgICAgICAgMjE4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNixcbiAgICAgICAgNjEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTY3LFxuICAgICAgICA2OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTksXG4gICAgICAgIDcxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDkwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjE4LFxuICAgICAgICA2MixcbiAgICAgICAgMTcwLFxuICAgICAgICAxODEsXG4gICAgICAgIDgyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDksXG4gICAgICAgIDUzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTMyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDY4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDY2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiR3EvVmRNVW5sY0tRNGhEUGd3d2hKRmhrSnE5czNWcGJRRUlTcDZIQ3kyST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTXYxQlp6TUhURW1IT3g1MF9OUEFWQVwiLFxuICBcInBob25lSWRcIjogXCI0OTg2N2VkYS01NGM3LTQ4ZTgtYWQxOC00MTkxYjA4Yzk4YjRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTQsXG4gICAgICAxMTQsXG4gICAgICA3OCxcbiAgICAgIDgxLFxuICAgICAgMjAyLFxuICAgICAgNzksXG4gICAgICAyMjUsXG4gICAgICAyMTEsXG4gICAgICAxMDYsXG4gICAgICAyMDcsXG4gICAgICAxNTcsXG4gICAgICAxNjUsXG4gICAgICAxNjksXG4gICAgICA3MCxcbiAgICAgIDE5MyxcbiAgICAgIDEyNyxcbiAgICAgIDI1NSxcbiAgICAgIDEwNixcbiAgICAgIDI0NyxcbiAgICAgIDIwN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NCxcbiAgICAgIDE5NSxcbiAgICAgIDIxMCxcbiAgICAgIDExMCxcbiAgICAgIDM0LFxuICAgICAgODcsXG4gICAgICAxOTEsXG4gICAgICAxNSxcbiAgICAgIDE1MSxcbiAgICAgIDE5NCxcbiAgICAgIDcxLFxuICAgICAgMzEsXG4gICAgICA2OCxcbiAgICAgIDgsXG4gICAgICAxNCxcbiAgICAgIDEwMSxcbiAgICAgIDI0NCxcbiAgICAgIDU2LFxuICAgICAgOTAsXG4gICAgICAxNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNktHRjZXWlRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzY4MjExODUzOjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0MjU4MDc1ODgwNjYyNDoxMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJR2F5dVVDRUtIMDM3UUdHQWNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInhaVVhlNmNwdGNxbWt3aXlpcE5yVGp5QmdiSVVlYi9xZ005SDIrdXlqamM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicW92RUZTaE1vZmxjUjZzVFVYSitkVHpadW1ia29majEzSGRPdm14WnBHOTJMRHdLZzhwZlZSajh1dkpzdERwcnRpa2hPaDFGdkJHRWhaRFM1Q3BxQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidHpmeHFkTzR6OEJOSVVkVDdiWkNoQXBHcE1zZCtKWmJweHFHeFZqTTJ3VEEwcVp6TWFUK0NjK1c2emNFYnR6aHBFTVJBdFBwYndjdjZPKzNhdit6aUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NjgyMTE4NTM6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEyMzYwMDQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEM01cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUQzTS5qc29uIjogIntcImtleURhdGFcIjpcIjloQVJBWW16eU00ZDVDVzZacFhMSnhuOVJoQVY2N05FMVpUWGI3T2QxK1E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzQ5ODk5MDA5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Sadeesha",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
