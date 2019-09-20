import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  category = 'home'

  constructor(public navCtrl: NavController) {}

  openFutebol() {
    this.navCtrl.navigateForward('futebol')
  }
  openPrefeitura() {
    this.navCtrl.navigateForward('prefeitura')
  }
  openDenuncia() {
    this.navCtrl.navigateForward('denuncia')
  }
  openBingoTorneio() {
    this.navCtrl.navigateForward('bingo-torneio')
  }
  openInfoAnori() {
    this.navCtrl.navigateForward('info-anori')
  }
  openMototaxi(){
    this.navCtrl.navigateForward('mototaxi')
  }

  segmentChanged(ev: any) {
    
    const valorSegment = ev.detail.value
    this.category = valorSegment
    console.log('Segment changed', this.category);
  }
}
