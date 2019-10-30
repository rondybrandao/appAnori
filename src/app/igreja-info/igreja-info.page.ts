import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-igreja-info',
  templateUrl: './igreja-info.page.html',
  styleUrls: ['./igreja-info.page.scss'],
})
export class IgrejaInfoPage implements OnInit {

  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  voltar(){
    this.navCtrl.navigateBack('igreja')
  }

}
