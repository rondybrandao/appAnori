import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-igreja',
  templateUrl: './igreja.page.html',
  styleUrls: ['./igreja.page.scss'],
})
export class IgrejaPage implements OnInit {

  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  voltar(){
    this.navCtrl.navigateBack('home')
  }

  openIgrejaInfo() {
    this.navCtrl.navigateForward('igreja-info')
  }
}
