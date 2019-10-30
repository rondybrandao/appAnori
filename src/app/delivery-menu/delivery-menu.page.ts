import { DeliverySacolaPage } from './../delivery-sacola/delivery-sacola.page';
import { DeliveryService } from './../services/delivery.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController, ModalController } from '@ionic/angular';
import { DeliveryConfirmacaoPage } from '../delivery-confirmacao/delivery-confirmacao.page';

@Component({
  selector: 'app-delivery-menu',
  templateUrl: './delivery-menu.page.html',
  styleUrls: ['./delivery-menu.page.scss'],
})
export class DeliveryMenuPage implements OnInit {
  //@ViewChild(IonCard) category: IonCard ;
  @ViewChild(IonSlides) slides: IonSlides;
  slide
  slide_promo
  category
  pedido
  sanduiches: any
  bebidas: any
  sacola = []
  total
  constructor(
    private navCtrl: NavController,
    private router: Router,
    public modalController: ModalController,
    private service: DeliveryService
    ){
      this.category = 'info'
      this.listaSanduiches()
      //this.listaBebidas()
     }

  ngOnInit() {
  }

  segmentChanged_(event: any) {
    if (event.detail.value === 'info') {
      this.slide = true
      this.slide_promo = false
      this.slides.slidePrev();
    } else {
      this.slide = false
      this.slide_promo = true
      this.slides.slideNext();
    }
  }

  segmentChanged(ev: any) {
    const valorSegment = ev.detail.value
    this.category = valorSegment
    console.log('Segment changed', this.category);
  }

  voltar() {
    this.navCtrl.navigateBack('delivery')
    //this.router.navigate(['delivery'])
  }

  async pedidoDetalhesModal(nome, preco, descricao) {
    console.log('preço:', preco)
    const modal = await this.modalController.create({
      component: DeliveryConfirmacaoPage,
      componentProps: {
        'sanduiche': nome,
        'preco': preco,
        'descricao': descricao
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    console.log(data)
    if (data.data){
      this.sacola.push(data.data)
      console.log(this.sacola)
    }
    
  }

  listaSanduiches() {
    this.service.getAllSanduiches().then((resp)=>{
      this.sanduiches = resp
      console.log(this.sanduiches)
    })
  }

  listaBebidas() {
    this.service.getAllBebidas().then((resp)=>{
      this.bebidas = resp
      console.log(this.bebidas)
    }) 
  }

  async openSacolaModal(){
    const modal = await this.modalController.create({
      component: DeliverySacolaPage,
      componentProps: {
        'pedido': this.sacola
        
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    console.log(data)
    if(data.close){
      this.sacola = []
      this.router.navigate(['home'])
    }
  
  }

}
