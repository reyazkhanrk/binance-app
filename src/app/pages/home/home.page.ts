/* eslint-disable @typescript-eslint/member-ordering */
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import * as HighCharts from 'highcharts';
import  Chart  from 'chart.js/auto';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  // darkColor: any;
  @ViewChild('pieCanvas', {static: true}) pieCanvas: ElementRef;
  pieChart: Chart;

  constructor(public router: Router,private menu: MenuController) { }
  chartData=[
    { name:'Ethereum (ETH)',value:2000,currency:'$',percent:'20%'},
    { name:'Bitcoins (BTC)',value:2000,currency:'$',percent:'20%'},
    { name:'USD (USDT)',value:4000,currency:'$',percent:'40%'},
    { name:'ChainLink (LINK)',value:2000,currency:'$',percent:'20%'},
  ];
  ngOnInit() {
    // this.darkColor='black';
    this.plotSimplePieChart();

  }

  plotSimplePieChart() {
    this.pieChart = new Chart(this.pieCanvas.nativeElement, {
      type: 'pie',
      data: {
        labels: ['BTC', 'ETH', 'USDT', 'LINK'],
        datasets: [{
          label: 'Total of Your Holding',
          data: [2000,2000,4000,2000],
          backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1'],
          hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5'],
          borderWidth: 2,
        }]
      },
    });
  }

  openEnd() {
    this.menu.close();
  }
  goToPage(url)
  {
    this.menu.close();
    this.router.navigate(['/'+url]);
  }


}
