import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PassagensService } from '../services/passagens.service';

@Component({
  selector: 'app-passagem',
  templateUrl: './passagem.page.html',
  styleUrls: ['./passagem.page.scss'],
})
export class PassagemPage implements OnInit {
  total
  qnt
  key
  poltronas
  origem
  dataIda
  constructor(
    private route: ActivatedRoute,
    public navCtrl: NavController,
    private router: Router,
    private userService: UserService,
    private passagemService: PassagensService,
  ) { 
    this.total = this.route.snapshot.paramMap.get('total')
    this.qnt = this.route.snapshot.paramMap.get('qnt')
    this.poltronas = this.route.snapshot.paramMap.get('poltronas')
    this.origem = this.route.snapshot.paramMap.get('origem')
    this.dataIda = this.route.snapshot.paramMap.get('dataIda')
    console.log(this.total)
  }

  ngOnInit() {
  }
  voltar() {
    this.navCtrl.navigateBack('viagem')
  }

  openPoltrona() {
    this.addPassagem()
    //this.router.navigate(['assento', {key: this.key, qnt:this.qnt, poltronas: "01"}])
    
  }

  addComprovante(res){
    let comprovante = {
      plataforma:'s.u.s.e passagem',
      tipo:'passagem',
      empresa: 'Silva Lopes',
      total: this.total,
      key:res['key'],
      hora: res['hora']
    }
    this.userService.addComprovanteCarteira(comprovante)
    
  }

  addPassagem(){
    let passagens = {
      quantidade: this.qnt,
      total: this.total
    }
    this.passagemService.addPassagens(passagens).then((res)=>{
      console.log(res)
      this.key = res['key']
      this.addComprovante(res)
    }).then(()=>{
      this.router.navigate(['assento', {key: this.key, qnt:this.qnt, poltronas: this.poltronas, origem: this.origem, dataIda: this.dataIda}])
    })
    
  }
}
