import { Client, Fixture, League } from "../src/index";


const fobal = new Client(api_key="apiiKey");
console.log(fobal.baseURL)
fobal.baseURL = "http://localhost:5000/data";


 
async function main() {
    var league = await fobal.getLeague({name:'serie-a'});
    let milan = await fobal.getTeam({name:'milan'});
    console.log(milan)
    
    let rafaLeato = await fobal.getPlayers({name:'sergej'});
    console.log(rafaLeato)

    fixt = await fobal.getFixture({home: 'milan', away: 'juventus'});
    console.log(fixt)
    players = await fixt.getPlayers()
    console.log(players)
}


main()