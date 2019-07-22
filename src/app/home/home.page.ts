import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  openFutebol() {
    this.navCtrl.navigateForward('futebol')
  }
  openPrefeitura() {
    this.navCtrl.navigateForward('prefeitura')
  }
}
