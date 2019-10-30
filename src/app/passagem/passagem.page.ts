import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-passagem',
  templateUrl: './passagem.page.html',
  styleUrls: ['./passagem.page.scss'],
})
export class PassagemPage implements OnInit {
  total
  constructor(
    private route: ActivatedRoute,
    public navCtrl: NavController,
    private router: Router,
  ) { 
    this.total = this.route.snapshot.paramMap.get('total')
    console.log(this.total)
  }

  ngOnInit() {
  }
  voltar() {
    this.navCtrl.navigateBack('viagem')
  }

  openPoltrona() {
    this.router.navigate(['assento', {qnt:1, poltronas: "01"}])
  }
}
