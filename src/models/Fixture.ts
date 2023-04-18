 

import { League } from './League';
import { Team } from './Team';
import { Player } from './Player';
import { FixtureData } from '../types';
import { Client } from '../fobal/Client';

export class Fixture {
    client: Client;
    public fixture_id: number;
    public season: number;
    public nation: string;
    public league: string;
    public league_id: number;
    public matchday: number;
    public date: string;
    public home: string;
    public away: string;
    public home_id: number;
    public away_id: number;
    public home_score: number;
    public away_score: number;
    public home_score_1T: number;
    public away_score_1T: number;
    public home_score_2T: number;
    public away_score_2T: number;
    public stadium: string;
    public referee: string;
    public is_terminated: boolean;
    public diretta_link: string;
    public transfermarkt_id: number;
    public transfermarkt_url: string;
    public diretta_id: number;
    public direttait_url: string;
    public fbref_id: number;
    public fbref_url: string;

    constructor(client: Client, data: FixtureData) {
        this.client = client;
        this.fixture_id = data.fixture_id
        this.season = data.season
        this.nation = data.nation
        this.league = data.league
        this.league_id = data.league_id
        this.matchday = data.matchday
        this.date = data.date
        this.home = data.home
        this.away = data.away
        this.home_id = data.home_id
        this.away_id = data.away_id
        this.home_score = data.home_score
        this.away_score = data.away_score
        this.home_score_1T = data.home_score_1T
        this.away_score_1T = data.away_score_1T
        this.home_score_2T = data.home_score_2T
        this.away_score_2T = data.away_score_2T
        this.stadium = data.stadium
        this.referee = data.referee
        this.is_terminated = data.is_terminated
        this.diretta_link = data.diretta_link
        this.transfermarkt_id = data.transfermarkt_id
        this.transfermarkt_url = data.transfermarkt_url
        this.diretta_id = data.diretta_id
        this.direttait_url = data.direttait_url
        this.fbref_id = data.fbref_id
        this.fbref_url = data.fbref_url
    }

    async getTeams(): Promise<Team[]> {
        const data = await this.client.request('GET', `/fixtures/${this.fixture_id}/teams`);
        return this.client.processData(data, Team);
      }
   
      async getPlayers(): Promise<Player[][]> {
        const data = await this.client.request('GET', `/fixtures/${this.fixture_id}/players`);
        return [this.client.processData(data[0], Player), this.client.processData(data[1], Player)]
      }
}