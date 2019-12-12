import { AngularFireDatabase } from '@angular/fire/database';
import { Component, NgZone } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  nome_usuario
  email_usuario
  public appPages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'home'
    }, 
    {
      title: 'Minhas notificações',
      url: '/minhas-notificacoes',
      icon:'mail-unread'
    },
    {
      title: 'Meus comprovantes',
      url: '/comprovantes',
      icon: 'checkbox-outline'
    }
    
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public afAuth: AngularFireAuth,
    public navCrtl: NavController,
    private router: Router,
    private ngZone: NgZone,
    private db: AngularFireDatabase
  ) {
    this.initializeApp();
  }

  initializeApp_() {
    console.log(this.afAuth.auth)
    if(this.afAuth.auth != null) {
      this.afAuth.authState.subscribe( user => {
        console.log(user)
        let obj = {
          nome: user.displayName,
          email: user.email
        }
        this.nome_usuario = obj.nome,
        this.email_usuario = obj.email
        console.log(obj.nome, obj.email)
      })
    }
    
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.afAuth.auth.onAuthStateChanged(user => {
        if (user) {
      
          this.ngZone.run(()=>{
            this.router.navigate(["/home"]);
            this.splashScreen.hide();
          })
          
        }
        else {
          this.ngZone.run(()=>{
            this.router.navigate(["/login"]);
            this.splashScreen.hide();
          })
        }
      })
      this.statusBar.styleDefault();
    });
  }
  

  logout() {
    this.afAuth.auth.signOut().then(() => {this.navCrtl.navigateBack('login')})
    
  }
}
