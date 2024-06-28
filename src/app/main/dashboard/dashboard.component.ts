import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { TabelaComponent } from './tabela/tabela.component';
import { DOCUMENT } from '@angular/common';
import { WINDOW, WINDOW_PROVIDER } from '../../providers/window.provider';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ChartModule,
    TabelaComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export default class DashboardComponent implements OnInit {
  data: any;

  options: any;

  constructor(@Inject(DOCUMENT) private document: Document, @Inject(WINDOW) private window : Window ) {}

  ngOnInit() {
    const documentStyle = this.window.getComputedStyle(this.document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
        }
      ]
    };


    this.options = {
      responsive: false,
      maintainAspectRatio: false,
      cutout: '60%',
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      }
    };
  }
}
