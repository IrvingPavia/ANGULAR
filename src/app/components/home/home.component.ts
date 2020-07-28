import { Component, OnInit } from '@angular/core';
import { AppService, Game } from '../../services/app.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private appService:AppService;
  public arrGames:Game[] = [];
  public arrMonths:Mont[] = [];
  public arrGamesByMonths;
  public arrGamesByLiga;
  public cEquipoLocal:string = 'Venados F.C.';

  public cMonths:string[]  = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];


  constructor(private _appService: AppService){
        
  }

  ngOnInit(): void {
    this.load_Games();
  }

  
  public load_Games(){
  this._appService.getGames()
  .subscribe((response:any) => {
    
    this.arrGames = response.data.games;
    this.arrGamesByMonths = this.groupByDate(this.arrGames,'datetime');
  
    let monthLength = this.arrGamesByMonths['-1'];
  
    for(let i=0;i<monthLength;i++){
      this.arrMonths.push({numMonth:i,strMonth:this.cMonths[i]});
      }

}, error => {
    console.log(error);
  });
}
  
  public groupByDate(objArray:Game[], cKey) {
    let indexMonths:number = 0; 
      return objArray.reduce((oArr,obj) => {
        const dtGame:Date = new Date(obj[cKey]);
        
        const cMonth = dtGame.getMonth();

        const key = cMonth;
        if(!oArr[key]){
          oArr[key] = [];
          indexMonths++;
        }
        oArr[key].push(obj);
        oArr[-1]= indexMonths;
        return oArr;
      }, {});    
  }
   
  
diaSemana(sDateGame:string){
  const dtGame:Date = new Date(sDateGame);
  const dias=["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  return dias[dtGame.getUTCDay()];
};

getGamesByLiga(_Liga:string) {
  switch(_Liga){
    case 'COM':
        this.arrGamesByMonths = this.groupByDate(this.arrGames.filter(g=>g.league == 'Copa MX'),'datetime');
      break;
    case 'LDA':
        this.arrGamesByMonths = this.groupByDate(this.arrGames.filter(g=>g.league == 'Ascenso MX'),'datetime');
      break;
    default:
      break;

  }
}

}

export interface Mont{
  numMonth:number;
  strMonth:string;
}