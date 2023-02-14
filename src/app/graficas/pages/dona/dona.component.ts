import { Component } from '@angular/core';

import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100, 150]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {
      backgroundColor: [
        '#2B5CFA',
        '#2B26DE',
        '#7035F5',
        '#8F26DE',
        '#DA2BFA',
      ]
    }
  ];
}
