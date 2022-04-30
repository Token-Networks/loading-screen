// ignore
var Config = {};

/**
 * What should the text in the center of the screen be?
 * if empty it will fill in your Server Name
 */
Config.title = "Token Networks";

/**
 * Enable map text in the top left corner of the screen?
 */
Config.enableMap = true;

/**
 * Enable steamId text in the top right corner of the screen?
 */
Config.enableSteamID = true;

/**
 * Enable announcements?
 */
Config.enableAnnouncements = true;

/**
 * What messages do you want to show up?
 * only works if enableAnnouncements = true
 */
Config.announceMessages = [
"Enjoy the server",
"Thanks for joining us!",
"Welcome to Token RP",
"Did you know 'OMG' usage can be traced back to 1917.",
"Some cats are actually allergic to humans",
"Enjoy your stay",
"There was a successful Tinder match in Antarctica in 2014."
];

/**
 * How many miliseconds for each announcement?
 * only works if enableAnnouncements = true
 */
Config.announcementLength = 3000;

/**
 * Image Filename
 * DROP IMAGE IN "images" FOLDER
 */
Config.backgroundImage = "";

/**
 * Enable debug messages?
 */
Config.enableDebug = false;
