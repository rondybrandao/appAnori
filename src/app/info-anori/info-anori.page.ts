import { Component, OnInit, ViewChild } from '@angular/core';

import { Chart } from 'chart.js';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-info-anori',
  templateUrl: './info-anori.page.html',
  styleUrls: ['./info-anori.page.scss'],
})
export class InfoAnoriPage implements OnInit {
  @ViewChild('chartPieLavoura') chartPieLavoura;
  @ViewChild('chartDoughnutPresidente') chartDoughnutPresidente;
  @ViewChild('chartDoughnutGoverno') chartDoughnutGoverno;
  @ViewChild('chartBarPresidente') chartBarPresidente;

  pieChart: any
  doughnuPresidente: any
  doughnuGoverno: any
  barPresidente: any

  constructor(public navCrtl: NavController) {}

  ngOnInit() {
    this.showPie();
    //this.showDoughnutPresidente();
    this.showDoughnutorGoverno();
    this.showBarPresidente()
  }
  voltar() {
    this.navCrtl.navigateBack('')
  }
  showPie(){
    this.pieChart = new Chart(this.chartPieLavoura.nativeElement, {
			type: 'pie',
			data: {
				datasets: [{
					data: [238,242,36,7,35,35
					],
					backgroundColor: [
            'rgba(156, 195, 20, 1.0)',
            'rgba(176, 71, 33, 1.0)',
            'rgba(182, 46, 235, 1.0)',
            'rgba(47, 198, 67, 1.0)',
            'rgba(81, 46, 34, 1.0)',
            'rgba(255, 159, 64, 0.2)'
        ],
					label: 'Dataset 1'
				}],
				labels: [
					'Açaí',
					'Banana',
					'Cupuaçu',
					'Goiaba',
          'Laranja',
          'outras'
				]
			},
			options: {
				responsive: true
			}
		});
  }

  showBarPresidente(){
    var MONTHS = ['Haddad', 'Bolsonaro', 'Ciro', 'G.Alckmin', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
		var horizontalBarChartData = {
			labels: [''],
			datasets: [{
				label: 'Haddad',
				backgroundColor: 'rgba(255,0,0,1)',
				borderColor: 'rgba(255,0,0,1)',
				borderWidth: 1,
				data: [3955
				]
			}, {
				label: 'Bolsonaro',
				backgroundColor: 'rgba(0,153,0,1)',
				borderColor: 'rgba(0,153,0,1)',
				data: [2297
				]
      }, {
				label: 'Ciro Gomes',
				backgroundColor: 'rgba(0,0,102,1)',
				borderColor: 'rgba(0,0,102,1)',
				data: [329
				]
			}, {
				label: 'G. Alckmin',
				backgroundColor: 'rgba(51,102,255,1)',
				borderColor: 'rgba(51,102,255,1)',
				data: [106 
				]
			}, {
				label: 'Amoêdo',
				backgroundColor: 'rgba(153,153,204,1)',
				borderColor: 'rgba(153,153,204,1)',
				data: [88
				]
			}]
		};
		this.barPresidente = new Chart(this.chartBarPresidente.nativeElement, {
				type: 'horizontalBar',
				data: horizontalBarChartData,
				options: {
					// Elements options apply to all of the options unless overridden in a dataset
          // In this case, we are setting the border of each horizontal bar to be 2px wide
          scales: {
            xAxes: [{
              ticks: {
                userCallback: function(tick) {
                  return tick.toString() + ' votos'
                }
              }
            }]
          },
					elements: {
						rectangle: {
							borderWidth: 2,
						}
					},
					responsive: true,
					legend: {
						position: 'right',
					},
					title: {
						display: true,
						text: 'Presidente'
					}
				}
			});
    };

    showBarPresidente2(){
      
      var barChartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Dataset 1',
          backgroundColor: [
            'rgba(255,0,0,1)',
            'rgba(0,153,0,1)',
            'rgba(0,0,102,1)',
            'rgba(51,102,255,1)',
            'rgba(153,153,204,1)',
            'rgba(255,255,0,1)',
            'rgba(153,51,0,1)'
          ],
          yAxisID: 'y-axis-1',
          data: [3955, 2297, 329, 106, 88, 60, 51]
        }]
      };
      this.barPresidente = new Chart(this.chartBarPresidente.nativeElement, {
        type: 'bar',
				data: barChartData,
				options: {
					responsive: true,
					title: {
						display: false,
						text: 'Chart.js Bar Chart - Multi Axis'
					},
					tooltips: {
						mode: 'index',
						intersect: true
					},
					scales: {
						yAxes: [{
							//type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
							display: true,
							position: 'left',
							id: 'y-axis-1',
						}, {
							type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
							display: false,
							position: 'right',
							id: 'y-axis-2',
							gridLines: {
								drawOnChartArea: false
							}
						}],
					}
				}
        });
      };

  showDoughnutPresidente(){
    this.doughnuPresidente = new Chart(this.chartDoughnutPresidente.nativeElement, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [3955, 2297, 329, 106, 88, 60, 51
          ],
          backgroundColor: [
            'rgba(255,0,0,1)',
            'rgba(0,153,0,1)',
            'rgba(0,0,102,1)',
            'rgba(51,102,255,1)',
            'rgba(153,153,204,1)',
            'rgba(255,255,0,1)',
            'rgba(153,51,0,1)'
          ],
          label: 'Presidente'
        }],
        labels: [
          'Haddad (PT)',
          'Bolsonaro (PSL)',
          'Ciro Gomes (PDT)',
          'Geraldo Alckmin (PSDB)',
          'Amoêdo (NOVO)',
          'Henrique Meirelles (MDB)',
          'Marina Silva (PV)'
        ]
      },
      options: {
        responsive: true,
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Presidente'
        },
        animation: {
          //animateScale: true,
          animateRotate: true
        }
      }
    });
  }

  showDoughnutorGoverno(){
    this.doughnuGoverno = new Chart(this.chartDoughnutGoverno.nativeElement, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [3511, 1291, 1116, 734, 570, 46
          ],
          backgroundColor: [
            'rgba(0,0,102,1)',
            'rgba(51,102,255,1)',
            'rgba(153,51,0,1)',
            'rgba(0,153,0,1)',
            
            'rgba(255,255,255,1)',
            'rgba(153,153,204,1)',
            
            
          ],
          label: 'Presidente'
        }],
        labels: [
          'Amazonino (PDT)',
          'Omar Aziz (PSD)',
          'David Almeida (PSB)',
          'Wilson Lima (PSC)',
          'Branco/Nulos',
          'Outros Candidatos',
          
        ]
      },
      options: {
        responsive: true,
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Governador'
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    });
  }



}
