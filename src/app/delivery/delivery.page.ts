import { Router } from '@angular/router';
import { DeliverySacolaPage } from './../delivery-sacola/delivery-sacola.page';
import { DeliveryConfirmacaoPageModule } from './../delivery-confirmacao/delivery-confirmacao.module';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, ModalController, IonGrid, IonCard, IonSlides } from '@ionic/angular';
import { DeliveryConfirmacaoPage } from '../delivery-confirmacao/delivery-confirmacao.page';

enum COLORS {
  GREY = "#E0E0E0",
  GREEN = "#76FF03",
  YELLOW = "#FFCA28",
  RED = "#DD2C00"
}

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.page.html',
  styleUrls: ['./delivery.page.scss'],
})
export class DeliveryPage implements OnInit {
  @ViewChild(IonCard) category: IonCard ;
  @ViewChild(IonSlides) slides: IonSlides;
  slide
  slide_promo
  rating
  ratingChange
  //category
  pedido = [{
    cod: "",
    qnt: 0,
    obs: ""
  }]
  sliderOpts = {
    zoom: false,
    slidesPerView: 1,
    centeredSlides: false
  }
  constructor(
    public navCtrl: NavController, 
    public modalController: ModalController,
    private router: Router) 
  {
    //this.slide = false
   }

  ngOnInit() {
  }

  rate(index:number) {
    this.rating = index;
    this.ratingChange.emit(this.rating)
  }

  isAboveRating(index:number):boolean {
    return index > this.rating
  }
  

  getColor(index:number) {
    if (this.isAboveRating(index)) {
      return COLORS.GREY
    }
    switch ( this.rating) {
      case 1: 
      case 2:
        return COLORS.RED
      case 3: 
        return COLORS.YELLOW
      case 4:
      case 5:
        return COLORS.GREEN
    }
  }

  segmentChanged_(ev: any) {
    
    const valorSegment = ev.detail.value
    this.category = valorSegment
    console.log('Segment changed', this.category);
  }

  segmentChanged(event: any) {
    
    
    if (event.detail.value === 'info') {
      this.slide = true
      this.slide_promo = false
      this.router.navigate(['delivery-menu'])
      
    } else {
      this.slide = false
      this.slide_promo = true
      this.slides.slideNext();
      
    }
  }

  voltar() {
    this.navCtrl.navigateBack('home')
  }

  pedir_delivery() {               
    this.navCtrl.navigateForward('delivery-confirmacao')
  }

  async pedidoDetalhesModal() {
    const modal = await this.modalController.create({
      component: DeliveryConfirmacaoPage,
      componentProps: {
        'sanduiche': 'X-Burg',
        'preco': 10
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    console.log(data)
    console.log(data.data.qnt)
    this.pedido['qnt'] = data.data.qnt
    console.log(this.pedido['qnt'])
    
  }

  async openSacolaModal() {
    const modal = await this.modalController.create({
      component: DeliverySacolaPage,
      componentProps: {
        'pedido': this.pedido
      }
    });
    await modal.present();
    await modal.onWillDismiss().then(()=>{this.navCtrl.navigateBack('home')})
    
    
  }
}
