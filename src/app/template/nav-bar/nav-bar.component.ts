import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit{
  @Output() activeSideChild = new EventEmitter<boolean>();
  public activeChild: boolean = true;

  sendActiveSide(value: boolean) {
    this.activeChild = !this.activeChild;
    this.activeSideChild.emit(this.activeChild);
  }
  
  constructor(){}
  ngOnInit(): void {}
}
