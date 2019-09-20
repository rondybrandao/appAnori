import { FutebolService } from './../services/futebol.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-melhor-jogador',
  templateUrl: './melhor-jogador.page.html',
  styleUrls: ['./melhor-jogador.page.scss'],
})
export class MelhorJogadorPage implements OnInit {
  votoJogador
  constructor(
    private service: FutebolService,
    public navCrtl: NavController
  ) { }

  ngOnInit() {
  }

  radioSelect(eve) {
    console.log(eve)
    this.votoJogador = eve.detail.value
  }

  votar() {
    this.service.votar(this.votoJogador)
    this.navCrtl.navigateRoot('')
  }

}
