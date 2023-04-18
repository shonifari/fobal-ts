import axios, { Method } from "axios";
import { Fixture, League, Player, Team } from "../models";

type GetLeagueParams = {
  league_id?: string;
  name?: string;
  nation?: string;
  level?: number;
};

type GetFixtureParams = {
  fixture_id?: string
  team_id?: string
  season?: string
  nation?: string
  league?: string
  league_id?: string
  matchday?: string
  date?: string
  home?: string
  away?: string
  home_id?: string
  away_id?: string
  is_terminated?: boolean
}

type GetTeamParams = {
  team_id?: string;
  name?: string;
  tag?: string;
  nation?: string;
};

type GetPlayerParams = {
  player_id?: string;
  name?: string;
  team_id?: string;
  league_id?: string;
  nation?: string;
  position?: string;
  position_tag?: string;
  fanta_position?: string;
};

/////////////////////////////
export class Client {
  baseURL: string;
  api_key: string;
  apiVersion: string;
  headers: any;

  constructor(api_key: string, api_version = "v1") {
    // this.base_url = `http://132.145.58.62:8000/${api_version}`;
    this.baseURL = `http://132.145.58.62:8000/data`;

    this.apiVersion = api_version;
    this.api_key = api_key;
    this.headers = { Authorization: `Bearer ${this.api_key}` };
  }

  async request(
    method: string,
    endpoint: string,
    params: any = {}
  ): Promise<any> {
    try {
      const response = await axios({
        method: method,
        url: this.baseURL + endpoint,
        headers: this.headers,
        params: params,
      });

      return response.data;
    } catch (error) {
      throw new Error(
        `Request failed with status code ${error.response.status}: ${error.response.statusText}`
      );
    }
  }

  processData<T>(
    data: any[],
    entityClass: new (client: Client, data: any) => T
  ): T[] {
    return data.map((item) => new entityClass(this, item));
  }

  // API Endpoints
  async getLeagues(params: GetLeagueParams = {}): Promise<League[]> {
    const data = await this.request("GET", "/leagues/", params);
    return this.processData(data, League);
  }

  async getLeague(params: GetLeagueParams = {}): Promise<League | null> {
    const data = await this.request("GET", "/leagues/", params);
    const result = this.processData(data, League);
    return result.length > 0 ? result[0] : null;
  }

  async getFixtures(params: GetFixtureParams = {}): Promise<Fixture[]> {
    const data = await this.request("GET", "/fixtures/", params);
    return this.processData(data, Fixture);
  }

  async getFixture(params: GetFixtureParams = {}): Promise<Fixture | null> {
    const data = await this.request("GET", "/fixtures/", params);
    const result = this.processData(data, Fixture);
    return result.length > 0 ? result[0] : null;
  }

  //##############################

  async getTeams(params: GetTeamParams = {}): Promise<Team[]> {
    const data = await this.request("GET", "/teams/", params);
    return this.processData(data, Team);
  }

  async getTeam(params: GetTeamParams = {}): Promise<Team | null> {
    const data = await this.request("GET", "/teams/", params);
    const result = this.processData(data, Team);
    return result.length > 0 ? result[0] : null;
  }

  async getPlayers(params: GetPlayerParams = {}): Promise<Player[]> {
    const data = await this.request("GET", "/players/", params);
    return this.processData(data, Player);
  }

  async getPlayer(params: GetPlayerParams = {}): Promise<Player | null> {
    const data = await this.request("GET", "/players/", params);
    const result = this.processData(data, Player);
    return result.length > 0 ? result[0] : null;
  }
}
