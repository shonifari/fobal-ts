export type LeagueData = {
  league_id: string;
  name: string;
  nation: string;
  league_level: number;
  squad_size: number;
  logo: string;
  transfermarkt_id: string;
  diretta_id: string;
  fbref_id: string;
  transfermarkt_url: string;
  direttait_url: string;
  fbref_url: string;
};

export type TeamData = {
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
};


export type PlayerData = {
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
}

export type FixtureData = {
    fixture_id: number;
    season: number;
    nation: string;
    league: string;
    league_id: number;
    matchday: number;
    date: string;
    home: string;
    away: string;
    home_id: number;
    away_id: number;
    home_score: number;
    away_score: number;
    home_score_1T: number;
    away_score_1T: number;
    home_score_2T: number;
    away_score_2T: number;
    stadium: string;
    referee: string;
    is_terminated: boolean;
    diretta_link: string;
    transfermarkt_id: number;
    transfermarkt_url: string;
    diretta_id: number;
    direttait_url: string;
    fbref_id: number;
    fbref_url: string;
}