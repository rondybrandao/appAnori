import { PassagensService } from './../services/passagens.service';
import { Component, OnInit, ɵConsole } from '@angular/core';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

export class Viagem {
  origem: string;
  destino: string;
  data: Date;
  qnt: number
  itinerario:string
}
@Component({
  selector: 'app-viagem',
  templateUrl: './viagem.page.html',
  styleUrls: ['./viagem.page.scss'],
})
export class ViagemPage implements OnInit {
  customDayShortNames = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
  barco
  valor
  poltronas
  qnt
  calendar
  ida
  dataDeIdaFormatada
  volta
  viagemVolta
  public v: Viagem = new Viagem()
  origem
  viagem = {
    origem: "",
    destino: "",
    data: "",
    volta: "",
    qnt: 1,
    itinerario:""
  }

  //calendario
  date: any;
  daysInThisMonth: any;
  daysInLastMonth: any;
  daysInNextMonth: any;
  monthNames: string[];
  currentMonth: any;
  currentYear: any;
  currentDate: any;
  eventList: any[];
  selectedEvent: any;
  isSelected: any;

  constructor(
    private passagemService: PassagensService,
    private router: Router,
    public alertController: AlertController,
    public navCtrl: NavController ) { }

  ngOnInit() {
  }

  voltar() {
    this.navCtrl.navigateBack('home')
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Não foram encontrados viagens para esse dia :( ',
      buttons: [
        {
          text: 'Fechar',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta!!!',
      message: 'Preencha todos os campos!!!',
      buttons: [
        {
          text: 'Fechar',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  pesquisar_passagem(){
    
    let data = this.viagem.data
    
    const origem = this.viagem.origem
    console.log(this.viagem)
    
    if(origem && data ) {
      console.log("tudo ok")
      const format = 'MM/dd';
      const locale = 'en-US';
      const formattedDate = formatDate(data, format, locale);
      this.dataDeIdaFormatada = formattedDate
      this.passagemService.pesquisar(formattedDate, origem).then((resp) => {
        console.log(resp)
        if(resp != null) {
          let qnt_disponivel = resp['qnt']
          if(qnt_disponivel != null && qnt_disponivel > this.viagem.qnt) {
            console.log(resp)
            console.log(resp['qnt'])
            let qnt = resp['qnt']
            this.qnt = this.viagem.qnt
            this.barco = resp['barco']
            this.valor = resp['valor']
            this.poltronas = resp['poltronas']
            
            this.valor = this.qnt * this.valor
            console.log(this.qnt, this.barco)
          } if(resp == null) {
            console.log("não foram encontrados passagens para esse dia")
            this.presentAlertConfirm()
          } if( qnt_disponivel < this.viagem.qnt) {
            console.log("não foram encontrados passagens suficiente")
          }
        } else {
          console.log("não foram encontrados passagens para esse dia")
          this.presentAlertConfirm()
        }
      })
    } else {
      console.log("não deu certo")
      this.presentAlert()
    }
    
  }
  addViagem(){
    this.passagemService.addViagem()
  }

  openCompra(){
    this.router.navigate(['passagem', {total:this.valor, qnt:this.qnt, poltronas:this.poltronas, origem:this.origem, dataIda:this.dataDeIdaFormatada}])
    //this.router.navigate(['assento', {qnt:1, poltronas: this.poltronas}])
  }

  calendario() {
    return this.calendar = true
  }

  voltaMetodo() {
    return this.viagemVolta = true
  }

  //calendario
  ionViewWillEnter() {
    this.date = new Date();
    this.monthNames = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
    this.getDaysOfMonth();
    this.loadEventThisMonth();
  }
  
  addEvent(day) {
    //var thisDate1 = this.date.getFullYear()+"-"+(this.date.getMonth()+1)+"-"+day+" 00:00:00";
    //var thisDate2 = this.date.getFullYear()+"-"+(this.date.getMonth()+1)+"-"+day+" 23:59:59";
    var thisDate3 = this.date.getFullYear()+"-"+(this.date.getMonth()+1)+"-"+day;
    //this.navCtrl.push(AddEventPage, {"day":day, "thisDate":thisDate3});
    this.ida = thisDate3
    this.calendar = false
    this.viagem.data = thisDate3
    //console.log(thisDate3)
  }

  addVolta(day) {
    var viagemvolta = this.date.getFullYear()+"-"+(this.date.getMonth()+1)+"-"+day;
    this.volta = viagemvolta
    this.viagemVolta = false
    this.viagem.volta = viagemvolta
  }

  getDaysOfMonth() {
    this.daysInThisMonth = new Array();
    this.daysInLastMonth = new Array();
    this.daysInNextMonth = new Array();
    this.currentMonth = this.monthNames[this.date.getMonth()];
    this.currentYear = this.date.getFullYear();
    if(this.date.getMonth() === new Date().getMonth()) {
      this.currentDate = new Date().getDate();
    } else {
      this.currentDate = 999;
    }

    var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
    var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
    for(var i = prevNumOfDays-(firstDayThisMonth-1); i <= prevNumOfDays; i++) {
      this.daysInLastMonth.push(i);
    }

    var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDate();
    for (var j = 0; j < thisNumOfDays; j++) {
      this.daysInThisMonth.push(j+1);
    }

    var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDay();
    // var nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0).getDate();
    for (var k = 0; k < (6-lastDayThisMonth); k++) {
      this.daysInNextMonth.push(k+1);
    }
    var totalDays = this.daysInLastMonth.length+this.daysInThisMonth.length+this.daysInNextMonth.length;
    if(totalDays<36) {
      for(var l = (7-lastDayThisMonth); l < ((7-lastDayThisMonth)+7); l++) {
        this.daysInNextMonth.push(l);
      }
    }
  }

  goToLastMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
    this.getDaysOfMonth();
  }

  goToNextMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0);
    this.getDaysOfMonth();
  }

  loadEventThisMonth(){
    this.eventList = new Array();
    var starDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
    var endDate = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0);
    
    // this.calendar.listEventsInRange(starDate, endDate).then(
    //   (msg) => {
    //     msg.forEach(item => {
    //       this.eventList.push(item);
    //     });
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );
  }

  checkEvent(day) {
    var hasEvent = false;
    var thisDate1 = this.date.getFullYear()+"-"+(this.date.getMonth()+1)+"-"+day+" 00:00:00";
    var thisDate2 = this.date.getFullYear()+"-"+(this.date.getMonth()+1)+"-"+day+" 23:59:59";
    this.eventList.forEach(event => {
      if(((event.startDate >= thisDate1) && (event.startDate <= thisDate2)) || ((event.endDate >= thisDate1) && (event.endDate <= thisDate2))) {
        hasEvent = true;
      }
    });
     return false;
   }

   selectDate(day) {
     this.isSelected = false;
     this.selectedEvent = new Array();
     var thisDate1 = this.date.getFullYear()+"-"+(this.date.getMonth()+1)+"-"+day+" 00:00:00";
     var thisDate2 = this.date.getFullYear()+"-"+(this.date.getMonth()+1)+"-"+day+" 23:59:59";
     this.eventList.forEach(event => {
      if(((event.startDate >= thisDate1) && (event.startDate <= thisDate2)) || ((event.endDate >= thisDate1) && (event.endDate <= thisDate2))) {
        this.isSelected = true;
        this.selectedEvent.push(event);
      }
    });
   }

}
