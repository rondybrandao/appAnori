import { UserService } from './../services/user.service';
import { DeliveryService } from './../services/delivery.service';
//import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController, LoadingController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-delivery-sacola',
  templateUrl: './delivery-sacola.page.html',
  styleUrls: ['./delivery-sacola.page.scss'],
})
export class DeliverySacolaPage implements OnInit {
  sub_total
  pedido
  ok = false
  total = 0
  loading
  referencia
  posicaoUsuario = {}
  troco = ""
  endereco = {
    bairro: "",
    rua: "",
    casa: ""
  }
  constructor(
    public navCtrl: NavController, 
    navParams: NavParams, 
    public modalController: ModalController,
    //private router: Router,
    private service: DeliveryService,
    private geolocation: Geolocation,
    public loadingController: LoadingController,
    private userService: UserService
    ) {
    console.log(navParams.get('pedido'))
    this.pedido = navParams.get('pedido')
  
   }

  ngOnInit() {
    this.calcTotal(this.pedido)
    this.getPosition()
  }

  async dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    console.log('dismiss()')
    this.modalController.dismiss({
      'dismissed': true,
    });
  }

  async enviarPedido_() {
    this.loading = await this.loadingController.create({message:'Por favor, aguarde...'})
    await this.loading.present()
    let position
    console.log(this.endereco)
    this.geolocation.getCurrentPosition().then((res)=>{
      let latitude = res.coords.latitude;
      let longitude = res.coords.longitude;
      position = {
        latitude: latitude,
        longitude: longitude
      }
    }).then(()=>{
      console.log(position)
      this.service.fazerPedido(this.pedido, this.total, position, this.endereco, this.troco).then((res)=>{
        console.log(res)
        
        let comprovante = {
          key: res,
          plataforma:'s.u.s.e delivery',
          empresa:'Boteco do Pretinho',
          total: this.total
        
        }
        this.userService.addComprovanteCarteira(comprovante)
        this.loading.dismiss()
        this.ok = true
      })
    })
  }
  async enviarPedido(){
    this.loading = await this.loadingController.create({message:'Por favor, aguarde...'})
    await this.loading.present()
    this.service.fazerPedido(this.pedido, this.total, this.posicaoUsuario, this.endereco, this.troco).then((res)=>{
      console.log(res)
      console.log(res['key'])
      let comprovante = {
        key: res['key'],
        plataforma:'s.u.s.e delivery',
        tipo: 'delivery',
        empresa:'Boteco do Pretinho',
        total: this.total,
        hora: res['hora']
      }
      this.userService.addComprovanteCarteira(comprovante)
      this.loading.dismiss()
      this.ok = true
    })
  }
  calcTotal(sacola){
    let total = 0
    sacola.forEach(element => {
      console.log(element)
      total = total + element.subTotal
    });
    console.log(total)
    this.total = total
    console.log(this.total)
    
  }

  close(){
    this.modalController.dismiss({
      'dismissed': true,
      'close':true
    });
  }
  
  getPosition(){
    let pos = {}
    this.geolocation.getCurrentPosition().then((res)=>{
      let latitude = res.coords.latitude;
      let longitude = res.coords.longitude;
      this.posicaoUsuario = {
        latitude: latitude,
        longitude: longitude
      }
      //console.log(latitude, longitude, pos)
      //return pos
    })
  }

  deletarItem(index){
    
    let subTotal = this.pedido[index].subTotal
    this.total = this.total - subTotal
    console.log(this.pedido[index].subTotal, this.total)
    this.pedido.splice(index, 1);
  }
}
