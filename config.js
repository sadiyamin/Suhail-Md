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



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94779062397";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_02_04_16_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiZUs1ckhlZUR6eE80dlBWalV6eUxDbDNJQzRkMEVYT2Zzdmh3dmNkdVZYMD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlpEcWdzSWRhMGZTNGVNZjd4L0RQUFl3NDlPOXA2R3pleUJVZlB0UjdmSDA9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiY01kOWpxbHM0UzBRR3dmNEZiK1Mwc3BRUGpkMk1vZFE1L3hIV1Jtb1MzYz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlExZ2NQRXBOa2pyckdWVDBLNE9aeXRPQnczWmk3ODQxNVNRTmJZcGhpRDg9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiT0N6NldLVGtiaEZUdjg0KzJ5UG1BQllqYm1PNzE3czJNbi8wNHgwazQzMD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjA5OHVlRmk2emRwY3pmQm5rcnduak9yMjJPUTVuQXcyZ0ZHTzl5ZW11akk9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJzTjNUS2VueTNSSmZMRHJtbURmQWZpSzArelg4NTJISGJad0pPb1NsaG5jPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwibDVLZ3BKaUxVazZ2aU01Y2JVNDBzQzloUVh5SU52elJvTEF5aTkwQmVBVT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJmWjV4WTBDbTVNRW4xcjdnM1FZRG9URjNVZlZpL2FjMHIyWkFpRUQyNjVlZlNjZmszcUtlVXV3MHluR0JZakkweEtrWElvcUo2aUpYMTMwUVE1NHlEQT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6NDIsXCJhZHZTZWNyZXRLZXlcIjpcIk5Ob1Rta1o0ZVhuVXcxL1NaZlVDRmV4azNDOERnV1ByUldHVTRUQld4eWc9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbe1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCI5NDc3OTA2MjM5N0BzLndoYXRzYXBwLm5ldFwiLFwiZnJvbU1lXCI6dHJ1ZSxcImlkXCI6XCI4RTFCMzEyNTRCOTZGODU4REVGMjFBNDY3MzYxMzNENFwifSxcIm1lc3NhZ2VUaW1lc3RhbXBcIjoxNzEzMjgzMzQ2fV0sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwiTkIzRldaZ3JUYXVfOXVhSlZBUWJEQVwiLFwicGhvbmVJZFwiOlwiZGExYmY1ODctYzVhYy00NjNhLWI1YmQtZmNjOGZkYmEzNjI4XCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJ5UHkyL3pDYmNrY3JrcjI0a0wzQzg4eE1ZcGc9XCJ9LFwicmVnaXN0ZXJlZFwiOmZhbHNlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInpXaGJlVnhhU3hQcG4va1FINzZtYnBBbG9Udz1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDTGJGN2xNUWlNTDZzQVlZRFNBQUtBQT1cIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIm04bGpqUmo5U3hZcmN5aGZzMWRSK2FNNTBsWW1mRllwUHIybjhFZXdDQk09XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCIzTkNZRk9GeFNyelY2RGJxcEdqRXRxYnREelVqMjU0bXlPRjFpUzFDenE1aWtPd0V6eEhvVGJHWlVxQnl2YnE5Vzc4WFB1Zzh6RVA3SVM5cys2d2pDZz09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcIkFIVDdhY3g3WUZYck5zbFFadEtnU01ITG51NWhTbHppSnlRa2dhdjdNUzNsYk91UnBJZmtGUnBKMGJRR3VwendWZ0MySTlPQ1lFVlo0c1dVdVBkR0NnPT1cIn0sXCJtZVwiOntcImlkXCI6XCI5NDc3OTA2MjM5NzozOEBzLndoYXRzYXBwLm5ldFwiLFwibGlkXCI6XCIyNzQ4MTM4MTgwMzIzNzY6MzhAbGlkXCIsXCJuYW1lXCI6XCJTYWRlZXNoYVwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjk0Nzc5MDYyMzk3OjM4QHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQlp2Slk0MFkvVXNXSzNNb1g3TlhVZm1qT2RKV0pueFdLVDY5cC9CSHNBZ1RcIn19XSxcInBsYXRmb3JtXCI6XCJhbmRyb2lkXCIsXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjoxNzEzMjgzMzQwLFwibXlBcHBTdGF0ZUtleUlkXCI6XCJBQUFBQUlhQVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlaNC5qc29uIjogIntcImtleURhdGFcIjpcIlFIdjg0Uzdtd3Z0U2FUSTZSRnFSeVVYc1l5cHNwdXM3NVFKOThkVXlkY2c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc1ODc0NzQyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJWjUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJibjhsYkJKUzdIQWZSUytYYVdiY0ZKMUs1TTZySmZnUkdaQ0gyQmtyTzE0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3NTg3NDc0MixcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsNCwxLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlaNi5qc29uIjogIntcImtleURhdGFcIjpcIlJGa0ZNeVNQdnFqQnVkR2duN2hyMi9nb2g4U29BNEIyZVZneU1CVTlMeXc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc1ODc0NzQyLFwiY3VycmVudEluZGV4XCI6NixcImRldmljZUluZGV4ZXNcIjpbMCw0LDYsMl19LFwidGltZXN0YW1wXCI6XCIxNzEzMTc1MzMxMDUwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSVo4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiNkh6Y3JteU1rWVAyUXphcWw4ZnpBQlZOMFlZalBlQ1ZBV3dJcHNrSUxVYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzU4NzQ3NDIsXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDQsNiwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJWjkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJyeDBIRW5PcHhjazQyekYrZkQ3Q0duRlU2dUNvYkJmbVNXVFRNdEhlL1VRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3NTg3NDc0MixcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzAsNCw3LDZdfSxcInRpbWVzdGFtcFwiOlwiMTcxMzI1NTY5NDkxNVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlaX18uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI3anM3RW16dEtzZTd3WWtVbVo1aGU2NW5oemdoeURBSGFLazVYWHNsMGFRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3NTg3NDc0MixcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzAsNCw3LDZdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlhQS5qc29uIjogIntcImtleURhdGFcIjpcIlM4Q2szY0xkVXUyM1RvYngxSTUxY0J1NWNYWmxtTGdLYlV1TnFjNDdIckU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc1ODc0NzQyLFwiY3VycmVudEluZGV4XCI6OSxcImRldmljZUluZGV4ZXNcIjpbOCwwLDQsNl19LFwidGltZXN0YW1wXCI6XCIxNzEzMjgzMDg1ODk1XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSWFCLmpzb24iOiAie1wia2V5RGF0YVwiOlwicXBoS1VvR3ZZR3dFV2lUbGV5K1NMdFJnWHNnRUZmMHhsbUZzNk10ZVNxRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzU4NzQ3NDIsXCJjdXJyZW50SW5kZXhcIjo5LFwiZGV2aWNlSW5kZXhlc1wiOls4LDAsNl19LFwidGltZXN0YW1wXCI6XCIxNzEzMjgzMDkwMDUwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSWFDLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQ1F3UEVDRzBybGFyZEdqb0dYeGVMTllBMDVWbmZMMlQveVZiU1hOZDVCVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzU4NzQ3NDIsXCJjdXJyZW50SW5kZXhcIjoxMixcImRldmljZUluZGV4ZXNcIjpbMTEsMCwxMiw2XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUNBQUFJWisuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJWT3duT3lURVFFeThRUmE0MzA4b0s0RmhVL0tyMWpQNHVTMS9KaVBFeVRjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3NTg3NDc0MixcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsMzIsNCw3XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTMyNTk3MTU0NzhcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUNBQUFJWjcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI3dXByQ1liblYwTW1SUFBlOXFURGZUUWNZbDQ3YkpWWjRDdTJTNU1YM2g4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3NTg3NDc0MixcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsMzIsNCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTMyMDA0NTAwMDhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
