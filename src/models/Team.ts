


// CREATE TEAM CLASS FOLLOWING THE PATTERN OF LEAGUE CLASS and the structure above
import { Player } from "./Player";
import { Client } from "../fobal/Client";
import { League } from "./League";
import { TeamData } from "../types";

export class Team {
  client: Client;
  team_id: string;
  name: string;
  visual_name: string;
  tag: string;
  league_id: string;
  nation: string;
  city: string;
  stadium: string;
  stadium_address: string;
  seats: number;
  squad_size: number;
  logo: string;
  transfermarkt_id: string;
  diretta_id: string;
  fbref_id: string;
  transfermarkt_url: string;
  direttait_url: string;
  fbref_url: string;

  constructor(client: Client, data: TeamData) {
    this.client = client;
    this.team_id = data.team_id;
    this.name = data.name;
    this.visual_name = data.visual_name;
    this.tag = data.tag;
    this.league_id = data.league_id;
    this.nation = data.nation;
    this.city = data.city;
    this.stadium = data.stadium;
    this.stadium_address = data.stadium_address;
    this.seats = data.seats;
    this.squad_size = data.squad_size;
    this.logo = data.logo;
    this.transfermarkt_id = data.transfermarkt_id;
    this.diretta_id = data.diretta_id;
    this.fbref_id = data.fbref_id;
    this.transfermarkt_url = data.transfermarkt_url;
    this.direttait_url = data.direttait_url;
    this.fbref_url = data.fbref_url;
  }

  async getPlayers(): Promise<Player[]> {
    const data = await this.client.request('GET', `/teams/${this.team_id}/players`);
    return this.client.processData(data, Player);
  }

  async getLeague(): Promise<League> {
    const data = await this.client.request('GET', `/teams/${this.team_id}/league`);
    return this.client.processData(data, League)[0];
  }

  
}