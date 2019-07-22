import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-futebol',
  templateUrl: './futebol.page.html',
  styleUrls: ['./futebol.page.scss'],
})
export class FutebolPage implements OnInit {

  images = []
  grid = true
  sliderOpts = {
    zoom: false,
    slidesPerView: 4,
    centeredSlides: false
  }

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }

  openTime() {
    this.navCtrl.navigateForward('times')
  }
  voltar() {
    this.navCtrl.navigateBack('')
  }

}
