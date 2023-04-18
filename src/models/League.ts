import { Client } from "../fobal/Client";
import { Team, Player } from ".";
import { LeagueData } from "../types";


  export class League {
    client: Client;
    league_id: string;
    name: string;
    nation: string;
    league_level: number;
    n_teams: number;
    logo: string;
    transfermarkt_id: string;
    diretta_id: string;
    fbref_id: string;
    transfermarkt_url: string;
    direttait_url: string;
    fbref_url: string;
  
    constructor(client: Client, data: LeagueData) {
      this.client = client;
      this.league_id = data.league_id;
      this.name = data.name;
      this.nation = data.nation;
      this.league_level = data.league_level;
      this.n_teams = data.squad_size;
      this.logo = data.logo;
      this.transfermarkt_id = data.transfermarkt_id;
      this.diretta_id = data.diretta_id;
      this.fbref_id = data.fbref_id;
      this.transfermarkt_url = data.transfermarkt_url;
      this.direttait_url = data.direttait_url;
      this.fbref_url = data.fbref_url;
    }
  
    async getTeams(): Promise<Team[]> {
      const data = await this.client.request('GET', `/leagues/${this.league_id}/teams`);
      return this.client.processData(data, Team);
    }
  
    async getPlayers(): Promise<Player[]> {
      const data = await this.client.request('GET', `/leagues/${this.league_id}/players`);
      return this.client.processData(data, Player);
    }
  }