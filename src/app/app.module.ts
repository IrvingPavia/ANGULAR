import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';



//RUTAS
import {APP_ROUTING} from './app.routes';

//SERVICES
import {AppService} from './services/app.service'

//COMPONENTES
import { AppComponent } from './app.component';
import { DrawerComponent } from "./components/drawerlayout/drawerlayout.component";
import { HomeComponent } from './components/home/home.component';
import { StadisticComponent } from './components/stadistic/stadistic.component';
import { PlayerComponent } from './components/player/player.component';

//IMPORTS
import { 
  IgxButtonModule, 
  IgxIconModule, 
  IgxNavigationDrawerModule, 
  IgxActionStripComponent, 
  IgxRippleModule, 
  IgxToggleModule,
  IgxAvatarModule,
  IgxLayoutModule,
  IgxDatePickerModule,
  IgxDialogModule,
  IgxCardModule } 
from "igniteui-angular";

@NgModule({
  declarations: [
    AppComponent,
    DrawerComponent,
    HomeComponent,
    StadisticComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxButtonModule,
		IgxIconModule,
		IgxNavigationDrawerModule,
		IgxRippleModule,
		IgxToggleModule,
    IgxAvatarModule,
    IgxLayoutModule,
    IgxDatePickerModule,
    IgxDialogModule,
    IgxCardModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]  
})
export class AppModule {
}
