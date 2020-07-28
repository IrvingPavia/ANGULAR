import { Component, ViewChild, ViewEncapsulation } from "@angular/core";
import { IgxNavigationDrawerComponent } from "igniteui-angular";
import { RouterLink } from '@angular/router';

@Component({
  selector: "app-navDrawer",
  styleUrls: ["./drawerlayout.component.scss"],
  templateUrl: "./drawerlayout.component.html"
})
export class DrawerComponent  {
    public navItems = [
        { name: "home", text: "Partidos", icon: "sports" },
        { name: "stadistic", text: "Estadísticas", icon: "list" },
        { name: "player", text: "Jugadores", icon: "account_box" }
    ];

    public selected = "home";
    public selectedText = "Partidos";



    @ViewChild(IgxNavigationDrawerComponent, { static: true })
    public drawer: IgxNavigationDrawerComponent;

    ngOnInit(): void {
        this.drawer.close();
    }
        
    public navigate(item) {
        this.selected = item.name;
        this.selectedText = item.text;
        this.drawer.close();
    }
}
