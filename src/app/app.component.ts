import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from './template/side-bar/side-bar.component';
import { MainComponent } from './main/main.component';
import { NavBarComponent } from './template/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AppComponent,
    SideBarComponent,
    NavBarComponent,
    MainComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'inovar-portiguar-adminFront';
  public activeSide: boolean = true;
  
  receiveActiveSide(activeSide: boolean){
    this.activeSide = activeSide;
  }
  
  ngOnInit(): void {
  }
}
