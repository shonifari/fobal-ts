
 


// CREATE PLAYER CLASS FOLLOWING THE PATTERN OF LEAGUE CLASS and the structure above
import { Client } from "../fobal/Client";
import { Team } from "./Team";
import { League } from "./League";
import { PlayerData } from "../types";

export class Player {
  client: Client;
  player_id: string;
  name: string;
  team_id: string;
  league_id: string;
  nation: string;
  number: number;
  dob: string;
  height: number;
  position: string;
  foot: string;
  status: string;
  visual_name: string;
  fantacalcio_id: string;
  fanta_position: string;
  img: string;
  transfermarkt_id: string;
  diretta_id: string;
  fbref_id: string;
  position_tag: string;
  transfermarkt_url: string;
  diretta_url: string;
  age: number;

  constructor(client: Client, data: PlayerData) {
    this.client = client;
    this.player_id = data.player_id;
    this.name = data.name;
    this.team_id = data.team_id;
    this.league_id = data.league_id;
    this.nation = data.nation;
    this.number = data.number;
    this.dob = data.dob;
    this.height = data.height;
    this.position = data.position;
    this.foot = data.foot;
    this.status = data.status;
    this.visual_name = data.visual_name;
    this.fantacalcio_id = data.fantacalcio_id;
    this.fanta_position = data.fanta_position;
    this.img = data.img;
    this.transfermarkt_id = data.transfermarkt_id;
    this.diretta_id = data.diretta_id;
    this.fbref_id = data.fbref_id;
    this.position_tag = data.position_tag;
    this.transfermarkt_url = data.transfermarkt_url;
    this.diretta_url = data.diretta_url;
    this.age = data.age;
  }

  async getTeam(): Promise<Team> {
    const data = await this.client.request("GET", `/players/${this.player_id}/team`);
    return this.client.processData(data, Team)[0];
  }

  async getLeague(): Promise<League> {
    const data = await this.client.request("GET", `/players/${this.player_id}/league`);
    return this.client.processData(data, League)[0];
  }
 
    
}