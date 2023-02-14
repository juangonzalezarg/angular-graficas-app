import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: Label[] = [
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others'
  ];
  public doughnutChartData: MultiDataSet = [
    // [350, 450, 100, 150]
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

  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {
    // this.graficasService.getUserSocialNetworks()
    //   .subscribe(data => {

    //     const labels = Object.keys(data);
    //     const values = Object.values(data);

    //     this.doughnutChartLabels = labels;
    //     this.doughnutChartData.push(values);

    //   });

    this.graficasService.getUserSocialNetworksData()
      .subscribe(({ labels, values }) => {

        this.doughnutChartLabels = labels;
        this.doughnutChartData.push(values);
        
      })
  }

}
