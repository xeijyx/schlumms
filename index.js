const steamUser = require('steam-user');
const steamTotp = require('steam-totp');
const keep_alive = require('./keep_alive.js')

var un = process.env.us;
var pd = process.env.ps;
var ss = process.env.sh;

var games = [1245620];
var status = 1;


user = new steamUser();
user.logOn({ "accountName": un, "password": pd, "twoFactorCode": steamTotp.generateAuthCode(ss) });
user.on('loggedOn', () => {
  if (user.steamID != null) console.log(user.steamID + ' - Successfully logged on');
  user.setPersona(status);
  user.gamesPlayed(games);
});
