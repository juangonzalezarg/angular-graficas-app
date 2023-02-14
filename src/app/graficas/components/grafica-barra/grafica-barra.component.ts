import { Component, Input } from '@angular/core';

import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent {
  @Input() horizontal: boolean = false;

  @Input() barCharLabels: Label[] = [
    // '2017', '2018', '2019', '2020', '2021', '2022', '2023'
  ];
  
  @Input() barChartData: ChartDataSets[] = [
    // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#3479E3', hoverBackgroundColor: 'red' },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#3ABAFD', hoverBackgroundColor: 'red' },
    // { data: [16, 11, 90, 32, 27, 37, 51], label: 'Series C', backgroundColor: '#893AFD', hoverBackgroundColor: 'red' }
  ];
  
  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  constructor() { }

  ngOnInit(): void {
    if (this.horizontal){
     this.barChartType = 'horizontalBar';
    }
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
