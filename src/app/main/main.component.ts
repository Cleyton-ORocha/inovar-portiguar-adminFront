import { Component, Output, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../template/nav-bar/nav-bar.component';
import DashboardComponent from './dashboard/dashboard.component';
import HomeComponent from './home/home.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent,
    HomeComponent,
    DashboardComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  @Output() parentActiveSide = new EventEmitter<boolean>();

  handleChildEvent(newValue: boolean) {
    this.parentActiveSide.emit(newValue);
  }

}
