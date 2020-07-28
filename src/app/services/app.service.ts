import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class AppService{

    private APP_URL = environment.server;
    private games:Game[] = [];
    private stadistics: Stadistic[] = [];
    private players: Player[] = [];

    constructor(private http: HttpClient){
     }

  getGames()  {
   let httpHeaders = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get(`${this.APP_URL}/games`, {headers: httpHeaders});
  }

  getStadistics() {
    let httpHeaders = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get<Stadistic[]>(`${this.APP_URL}/statistics`, {headers: httpHeaders});
  }

  getPlayers() {
    let httpHeaders = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get<Team[]>(`${this.APP_URL}/players`, {headers: httpHeaders});
  }

}

export interface Game{
  local: boolean;
  opponent: string;
  opponent_image: string;
  datetime: string;
  league: string;
  image: string;
  home_score: number;
  away_score: number;
}

export interface Stadistic{
  position : number;
  image :  string;
  team :  string ;
  games : number;
  win : number;
  loss : number;
  tie : number;
  f_goals : number;
  a_goals : number;
  score_diff : number;
  points : number;
  efec : any;
}

export interface Team {
    position: string;
    jugador:Player;
}


export interface Player{
  name : string;
  first_surname :  string;
  second_surname :  string ;
  birthday : string;
  birth_place : string;
  weight : number;
  height : number;
  position : string;
  number : number;
  position_short : string;
  last_team : string;
  image : string;
  role: string;
  role_short: string;
}
