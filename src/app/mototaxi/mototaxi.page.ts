import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Component, OnInit, NgZone } from '@angular/core';
import { LoadingController, AlertController, NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import { MototaxiService } from '../services/mototaxi.service';

@Component({
  selector: 'app-mototaxi',
  templateUrl: './mototaxi.page.html',
  styleUrls: ['./mototaxi.page.scss'],
})
export class MototaxiPage implements OnInit {
  loading
  latitude
  longitude
  nCasa = ""
  referencia = ""
  casa = true
  outro
  latLong
  nome_mototaxista
  constructor(
    private loadingCtrl: LoadingController,
    private geolocation: Geolocation,
    private service: MototaxiService,
    public toastController: ToastController,
    public alertController: AlertController,
    public navCtrl: NavController,
    private zone: NgZone
  ) { }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Confirmação!!!',
      message: 'Deseja chamar <strong>mototaxista ?</strong> ',
      buttons: [
        {
          text: 'Confirmar',
          handler: () => {
            console.log('Confirm Okay');
            this.callMoto()
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }
      ]
    });

    await alert.present();
  }

  callMoto() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude
      this.longitude = resp.coords.longitude;
      
      this.latLong = {
        latitude: resp.coords.latitude,
        longitude: resp.coords.longitude,
        casa: this.nCasa,
        referencia: this.referencia
      }
      console.log(this.latLong)
      this.service.savePedido(this.latLong).then((result) => {
        console.log(result)
        console.log(result['mototaxista'].nome)
        this.nome_mototaxista = result['mototaxista'].nome
        //this.loading.dismiss()
      })
    })
  }
  
  async callMototaxi(){
    this.loading = await this.loadingCtrl.create({message:'Por favor, aguarde...'})
    //await this.loading.present()

    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      
      this.latLong = {
        latitude: resp.coords.latitude,
        longitude: resp.coords.longitude,
        casa: this.nCasa,
        referencia: this.referencia
      }
      console.log(this.latLong)
      //console.log('casa:',this.nCasa)
      //console.log('referencia:',this.referencia)
      this.presentAlertConfirm()
      //this.presentToastWithOptions()
      // this.service.savePedido(latLong).then((result)=>{
      //   //this.callConfirmacao(result)
      //   console.log(result)
      //   this.presentToastWithOptions().then(this.loading.present())
      // })
    }).catch((error) => {
      console.log('Error getting location', error);
    })
  }

  radioSelect(event) {
    console.log("radioSelect",event.detail);
    
    if(event.detail.value == "casa"){
      this.outro = false
      this.casa = event.detail.checked
    } else {
      this.casa = false
      this.outro = event.detail.checked
    }
  }

  async presentAlertConfirm() {
    console.log('presenteConfirm')
    const alert = await this.alertController.create({
      header: 'Confirmação!',
      message: 'Deseja chamar <strong>mototaxista ?</strong> ',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            console.log('Confirm Okay');
            this.loading.present()
            this.service.savePedido(this.latLong).then((result)=> this.zone.run(() => {
              //this.callConfirmacao(result)
              console.log(result)
              console.log(result['mototaxista'].nome)
              this.nome_mototaxista = result['mototaxista'].nome
              this.loading.dismiss()
            }))  
          }
        }
      ]
    });

    return await alert.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      //header: 'Confirmação',
      message: 'Chamar Mototaxista ?',
      position: 'middle',
      buttons: [
        {
          //side: '',
          //icon: 'star',
          text: 'SIM',
          handler: () => {
            console.log('Favorite clicked');
            this.loading.present()
            this.service.savePedido(this.latLong).then((result)=>{
              //this.callConfirmacao(result)
              console.log(result)
              this.loading.dismiss()
            })
            
          }
        }, {
          text: 'NÃO',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            this.loading.dismiss()
          }
        }
      ]
    });
    toast.present();
  }

  voltar() {
    this.navCtrl.navigateBack('home')
  }
}
