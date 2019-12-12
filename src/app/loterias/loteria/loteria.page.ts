import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-loteria',
  templateUrl: './loteria.page.html',
  styleUrls: ['./loteria.page.scss'],
})
export class LoteriaPage implements OnInit {

  constructor(
    private router: Router,
    private navCtrl: NavController) { }

  ngOnInit() {
  }
  voltar() {
    this.navCtrl.navigateBack('home');
  }
  megasena(){
    this.router.navigate(['megasena'])
  }

  lotofacil(){
    this.router.navigate(['lotofacil'])
  }

  lotomania(){
    this.router.navigate(['lotomania'])
  }

}
