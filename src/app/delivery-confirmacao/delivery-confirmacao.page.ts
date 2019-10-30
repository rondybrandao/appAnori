import { auth } from 'firebase/app';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-delivery-confirmacao',
  templateUrl: './delivery-confirmacao.page.html',
  styleUrls: ['./delivery-confirmacao.page.scss'],
})
export class DeliveryConfirmacaoPage implements OnInit {
  sub_total
  qnt = 1
  valorItem
  item
  descricao: any
  constructor(
    public navCtrl: NavController, 
    private navParams: NavParams, 
    public modalController: ModalController,
    public afAuth: AngularFireAuth,
    ) {
      this.valorItem = parseFloat(navParams.get('preco')).toPrecision(3)
      this.item = navParams.get('sanduiche')
      this.descricao = navParams.get('descricao')
      this.sub_total = this.qnt * this.valorItem
      console.log('sub_total',parseFloat(this.sub_total).toPrecision(3),'preço:',this.valorItem)
   }

  ngOnInit() {
    this.getUser()
    
  }

  voltar() {
    this.navCtrl.navigateBack('delivery')
  }

  plus() {
    this.qnt++
    if(this.qnt > 0) {
      this.sub_total = this.qnt * parseFloat(this.valorItem)
    }
    
  }
  diminuir() {
    if(this.qnt > 0){
      this.qnt--
      this.sub_total = this.sub_total - parseFloat(this.valorItem)
    }
  }

  async dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    console.log('dismiss()')
    this.modalController.dismiss({
      'dismissed': true,
    });
  }
  addCarrinho(item, qnt) {
    let res = this.calcQnt(qnt, this.valorItem)
    console.log('subTotal:', res)
    this.modalController.dismiss({
      'dismissed': true,
      'data': {
        'qnt':qnt, 
        'cod_item':'001',
        'item': item,
        'subTotal': res
      }
    });
  }

  calcQnt(qnt, valor){
    let v = parseFloat(valor)
    let r = qnt * v
    return r
  }

  getUser(){
    let user = this.afAuth.auth.currentUser
    console.log(user)
  }
  

}
