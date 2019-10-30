import { Component, ViewChild } from '@angular/core';
import { NavController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  category = 'home'
  @ViewChild(IonSlides) slides: IonSlides;
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

  openPassagens() {
    this.navCtrl.navigateForward('viagem')
  }

  openHoteis() {
    this.navCtrl.navigateForward('hotel')
  }

  openIgrejas(){
    this.navCtrl.navigateForward('igreja')
  }

  openDelivery() {
    this.navCtrl.navigateForward('delivery')
  }

  openFake() {
    this.navCtrl.navigateForward('fake-news')
  }

  segmentChanged_(ev: any) {
    //const valorSegment = ev.detail.value
    this.category = ev.detail.value
    console.log(this.category)
    return this.category 
  }

  segmentChanged(event: any) {
    if (event.detail.value === 'home') {
      this.slides.slidePrev();
      //this.wavesPosition += this.wavesDifference;
    } else {
      this.slides.slideNext();
      //this.wavesPosition -= this.wavesDifference;
    }
  }
}
