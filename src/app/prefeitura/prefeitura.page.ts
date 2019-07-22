import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-prefeitura',
  templateUrl: './prefeitura.page.html',
  styleUrls: ['./prefeitura.page.scss'],
})
export class PrefeituraPage implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }
  voltar() {
    this.navCtrl.navigateBack('')
  }

}
