import { Component, OnInit } from '@angular/core';
import { AppService, Player } from '../../services/app.service';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  private appService:AppService;
  
  public arrPlayers:Player[] = [];
  constructor(private _appService: AppService) { }

  ngOnInit(): void {
    this.load_Players();
  }

  
  public load_Players(){
  this._appService.getPlayers()
  .subscribe((response:any) => {
    Object.keys(response.data.team).forEach( (key:string)  =>{
      Object.keys(response.data.team[key]).forEach( (pos:string)  =>{
        this.arrPlayers.push(response.data.team[key][pos]);
      });
    });

    console.log(this.arrPlayers);
    
  }, error => {
    console.log(error);
  });
}

}
