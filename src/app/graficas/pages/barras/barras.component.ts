import { Component } from '@angular/core';

import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  public barCharLabels: Label[] = ['2017', '2018', '2019', '2020', '2021', '2022', '2023'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#3479E3', hoverBackgroundColor: 'red' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#3ABAFD', hoverBackgroundColor: 'red' },
    { data: [16, 11, 90, 32, 27, 37, 51], label: 'Series C', backgroundColor: '#893AFD', hoverBackgroundColor: 'red' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData[0].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)
    ];

    this.barChartData[1].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)
    ];

    this.barChartData[3].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)
    ];
  }

}
