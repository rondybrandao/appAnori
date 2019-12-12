import { UserService } from './../services/user.service';
import { PassagensService } from './../services/passagens.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-assento',
  templateUrl: './assento.page.html',
  styleUrls: ['./assento.page.scss'],
})
export class AssentoPage implements OnInit {
  qnt
  p = ""
  key
  origem
  dataIda
  passageiros = [
    { nome: "", RG: "", poltrona: ""},
  ];
  passageiro
  poltronas_reservadas_ = [{
    poltrona: null,
    nome:null,
    RG:null,
    idade:null
  }]
  poltronas_reservadas = []
  poltronas = [
    {"00": false, isDisabled: false},
    {"01": false, isDisabled: false},
    {"02": false, isDisabled: false},
    {"03": false, isDisabled: false},
    {"04": false, isDisabled: false},
    {"05": false, isDisabled: false}
  ]
  constructor(
    private route: ActivatedRoute, 
    public navCtrl:NavController,
    private router: Router,
    private passagemService: PassagensService,
    public alertController: AlertController,
    private userService: UserService
    ) {
    this.qnt = this.route.snapshot.paramMap.get('qnt')
    this.p = this.route.snapshot.paramMap.get('poltronas')
    this.key = this.route.snapshot.paramMap.get('key')
    this.origem = this.route.snapshot.paramMap.get('origem')
    this.dataIda = this.route.snapshot.paramMap.get('dataIda')
    
   }

  ngOnInit() {
    //console.log(this.p.trim().split(" "))
    console.log(this.p)
    this.p.trim().split(" ").forEach((n) => {
      //this.poltronas[n] = true
      this.poltronas[n]
      let num = parseInt(n)
      this.poltronas[num][n] = true
      this.poltronas[num].isDisabled = true
      console.log(this.poltronas[num][n])
    })
  }

  reservar() {
    var array_temp = []
    console.log(this.qnt + "==" + this.poltronas_reservadas.length)
    console.log(this.poltronas_reservadas)
    if (this.poltronas_reservadas.length == parseInt(this.qnt)){
      this.passagemService.addPassageiros(this.key, this.poltronas_reservadas).then((res)=>{
        console.log(res)
        //this.userService.addComprovanteCarteira(res)
        //this.passagemService.addNotificacao(this.poltronas_reservadas)
        
        this.poltronas_reservadas.forEach((pr) => {
          let array_temporario = [] 
          array_temp.push(pr.poltrona)
        })
        let pol = this.p + " " + array_temp
        console.log("pol:", pol)
        this.passagemService.addPoltrona(this.origem, this.dataIda, pol)
        this.openFakeNews()
      })
      
    } else {
      console.log("Voce tem direito a  " + this.qnt + " poltrona(s)!")
      this.alert()
    }
    
  }
  openFakeNews() {
    console.log(this.passageiros)
    //this.passageiro = this.passageiros[0].nome
    this.router.navigate(['fake-news', {passageiro:'Jonh Snow'}])
  }
  
  // addPoltrona(n){
  //   console.log(n)
  //   this.passageiros.push({
  //     poltrona: n,
  //   })
  // }
  // removePoltrona(n) {
  //   console.log(n)
  //   let index = this.passageiros.indexOf(n)
  //   console.log(index)
  //   this.passageiros.splice(index, 1)
  //   console.log(this.passageiros)
  // }

  escolherPoltrona(event, polt){
    console.log(event.detail.checked, polt)
    if(event.detail.checked){
      let i = this.poltronas_reservadas.indexOf(polt)
      console.log(polt, i)
      this.poltronas_reservadas.push({
        poltrona:polt,
        nome: "",
        RG:"",
      })
      console.log(this.poltronas_reservadas)
      // this.passageiros.push({
      //   nome: "",
      //   RG:"",
      //   poltrona:polt
      // })
    } else {
      console.log(this.poltronas_reservadas)
      let index = this.poltronas_reservadas.indexOf(polt)
      console.log(index)
      this.poltronas_reservadas.splice(index, 1)
      this.passageiros.splice(index, 1)
      console.log(this.poltronas_reservadas)
    }
  }

  async alert() {
    const alert = await this.alertController.create({
      header: 'Alerta!!!',
      message: '"Voce tem direito a  "' + this.qnt + '" poltrona(s)!"',
      buttons: [
        {
          text: 'Fechar',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

}
