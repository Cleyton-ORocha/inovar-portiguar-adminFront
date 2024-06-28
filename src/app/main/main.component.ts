import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import  DashboardComponent from './dashboard/dashboard.component';
import HomeComponent from './home/home.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    DashboardComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
