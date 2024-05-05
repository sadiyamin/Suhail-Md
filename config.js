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



global.devs = "94779062397" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94779062397";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "94779062397,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_26_05_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjksXG4gICAgICAgIDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDU5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTgwLFxuICAgICAgICA2OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzksXG4gICAgICAgIDY1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDM3LFxuICAgICAgICA0NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMyxcbiAgICAgICAgMjA0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1LFxuICAgICAgICA4NixcbiAgICAgICAgMTA0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTg1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgODYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDc0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDg4LFxuICAgICAgICAxLFxuICAgICAgICAxNDksXG4gICAgICAgIDM3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAzNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjEwLFxuICAgICAgICA5MixcbiAgICAgICAgNDgsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY1LFxuICAgICAgICA5NixcbiAgICAgICAgMTQxLFxuICAgICAgICA4NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMixcbiAgICAgICAgNzksXG4gICAgICAgIDI2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODEsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjEwLFxuICAgICAgICA1NixcbiAgICAgICAgMTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTMxLFxuICAgICAgICA4NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDk3LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNixcbiAgICAgICAgMTAsXG4gICAgICAgIDI2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjIwLFxuICAgICAgICA0NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI3LFxuICAgICAgICA0NixcbiAgICAgICAgMTYwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODksXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTUsXG4gICAgICAgIDQxLFxuICAgICAgICA5MixcbiAgICAgICAgMTAxLFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDcyLFxuICAgICAgICAxODgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjksXG4gICAgICAgIDgzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDQzLFxuICAgICAgICA0MixcbiAgICAgICAgODEsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJGWE9xdW1HQmdyZGtUc3ozUzRSQlhWUlZBb0xTTXNYeXlOeDhGbDJtMzZFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0Nzc5MDYyMzk3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGRDI1QzBDRDNBMzI5RkQxRUVBQjcyNkIzRUMwOThEQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTQ5MjYzNzJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOGY5Q1g4Q3RTaU85ZGdIT0tsd25Zd1wiLFxuICBcInBob25lSWRcIjogXCJhNWI1NWI4YS1kMDBmLTRmYzEtOTc3Mi03OGY4NTdlOTc3ZGJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc5LFxuICAgICAgMSxcbiAgICAgIDIwNSxcbiAgICAgIDE3NixcbiAgICAgIDkwLFxuICAgICAgMTgyLFxuICAgICAgODYsXG4gICAgICA4OCxcbiAgICAgIDE3LFxuICAgICAgODcsXG4gICAgICAyMjAsXG4gICAgICAyMzksXG4gICAgICA3MixcbiAgICAgIDEyLFxuICAgICAgMjQ0LFxuICAgICAgMjIwLFxuICAgICAgMyxcbiAgICAgIDE5NyxcbiAgICAgIDYxLFxuICAgICAgMzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkzLFxuICAgICAgNjEsXG4gICAgICAyMTQsXG4gICAgICAyLFxuICAgICAgMTc0LFxuICAgICAgMTQyLFxuICAgICAgMjQ4LFxuICAgICAgNDEsXG4gICAgICAyMDcsXG4gICAgICA3NCxcbiAgICAgIDQyLFxuICAgICAgMTMzLFxuICAgICAgMTQ5LFxuICAgICAgMjUwLFxuICAgICAgMjQ2LFxuICAgICAgNTEsXG4gICAgICAyMzcsXG4gICAgICAxNDgsXG4gICAgICAwLFxuICAgICAgMTM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjJLNFozMThaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc3OTA2MjM5Nzo0OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjc0ODEzODE4MDMyMzc2OjQ4QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlNhZGVlc2hhXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTGJSbk9BSEVKdm0zckVHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI1eGozOFd4b0NNME5BZVpsZWQvK1MrODREYW4xQVNNNWM0WUlTVmVpRGkwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm1xNFpJSHBFSWRLWDRlU0NxNUtWT1pTWHorbGI3NFBabktZNFprTmhtU3ViOVpzdkJKcnNpc2Vac2ZwZWY5dVJtOGE3d2tmL3dsb2FYVVBSS0czQUNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlVKNGlCS1NMemVSNU40ZGEyeVJSN3cyN1hPMGM5dVZ1bWtBblQzL2U5YTUxaXBteS9PNUl4KzRiNlJlSXVZeXk1dGNXajc3R0s1ODdidWErUjVzNUJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0Nzc5MDYyMzk3OjQ4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDQ1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTQ5MjYzNjYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIOWxcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUg5bC5qc29uIjogIntcImtleURhdGFcIjpcIlVpZkpZOWtCS0lMd3BQTnpWeklMRGNzb1p0UlI5aEZ1a2F2ZGtNc2hvc2s9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA4MDg0Mzk1OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE0ODMyNDU3MjMzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Sadeesha",


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
