import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-assento',
  templateUrl: './assento.page.html',
  styleUrls: ['./assento.page.scss'],
})
export class AssentoPage implements OnInit {
  qnt
  p = ""
  passageiros = [
    { nome: null, RG: null},
  ];
  passageiro
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
    private router: Router) {
    this.qnt = this.route.snapshot.paramMap.get('qnt')
    this.p = this.route.snapshot.paramMap.get('poltronas')
    
   }

  ngOnInit() {
    //console.log(this.p.trim().split(" "))
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
    console.log(this.passageiros)
    console.log(this.poltronas_reservadas)
  }
  openFakeNews() {
    console.log(this.passageiros)
    this.passageiro = this.passageiros[0].nome
    this.router.navigate(['fake-news', {passageiro:this.passageiro}])
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
      this.poltronas_reservadas.push(
        polt
      )
      this.passageiros.push({
        nome: "",
        RG:""
      })
    } else {
      console.log(this.poltronas_reservadas)
      let index = this.poltronas_reservadas.indexOf(polt)
      console.log(index)
      this.poltronas_reservadas.splice(index, 1)
      this.passageiros.splice(index, 1)
      console.log(this.poltronas_reservadas)
    }
  }

}
