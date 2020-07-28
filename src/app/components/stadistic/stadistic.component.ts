import { Component, OnInit } from '@angular/core';
import { AppService, Stadistic } from '../../services/app.service';


@Component({
  selector: 'app-stadistic',
  templateUrl: './stadistic.component.html',
  styleUrls: ['./stadistic.component.scss']
})
export class StadisticComponent implements OnInit {
  
  private appService:AppService;
  public arrStadistics:Stadistic[] = [];
  constructor(private _appService: AppService) { }

  
  ngOnInit(): void {
    this.load_Stadistics();
  }

  
  public load_Stadistics(){
  this._appService.getStadistics()
  .subscribe((response:any) => {
    this.arrStadistics = response.data.statistics;
  }, error => {
    console.log(error);
  });
}

}
