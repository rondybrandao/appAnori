import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, LoadingController, ToastController } from '@ionic/angular';
//import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { User } from '../interfaces/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  public wavesPosition: number = 0;
  private wavesDifference: number = 100;
  public userLogin: User = {}
  public userRegister: User = {}
  private loading: any;

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    public afAuth: AngularFireAuth,
    private  loginService:  LoginService, 
    
  ) { }

  ngOnInit() {}
 
  segmentChanged(event: any) {
    if (event.detail.value === 'login') {
      this.slides.slidePrev();
      this.wavesPosition += this.wavesDifference;
    } else {
      this.slides.slideNext();
      this.wavesPosition -= this.wavesDifference;
    }
  }

  async login() {
    await this.presentLoading();
    
    try {
      await this.loginService.login(this.userLogin);
    } catch (error) {
      this.presentToast(error.message);
    } finally {
      this.loading.dismiss();
    }
  }

  async register() {
    await this.presentLoading();
    console.log(this.userRegister)
    try {
      await this.loginService.register(this.userRegister)
    } catch (error) {
      this.presentToast(error.message);
    } finally {
      this.loading.dismiss();
    }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Aguarde...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }
}
