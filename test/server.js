const {Client} = require("fobal-ts");
const fobal = new Client("apiKey");

leagues = fobal.getLeagues();
console.log(leagues);