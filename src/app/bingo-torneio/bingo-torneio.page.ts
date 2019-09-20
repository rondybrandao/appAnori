import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bingo-torneio',
  templateUrl: './bingo-torneio.page.html',
  styleUrls: ['./bingo-torneio.page.scss'],
})
export class BingoTorneioPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  voltar() {
    this.navCtrl.navigateBack('')
  }

}
