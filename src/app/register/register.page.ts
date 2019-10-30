import { Component, OnInit, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
//import * as firebase from 'firebase/app';
import { auth } from 'firebase/app';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

export class User {
  email: string;
  password: string;
}


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  //public user:User = new User();
  login_ON
  user: any = {}
  constructor(
    public afAuth: AngularFireAuth,
    public navCtrl: NavController,
    private router: Router,
    public ngZone: NgZone,
    //private nativeStorage: NativeStorage
  ) { 
    //this.entrar()
  }

  ngOnInit() {
    this.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.user = {
          uid: user.uid,
          phoneNumber: user.phoneNumber,
          photoURL: user.photoURL,
          creationTime: user.metadata.creationTime,
          lastSignInTime: user.metadata.lastSignInTime,
          isAnonymous: user.isAnonymous,
          email: user.email,
          displayName: user.displayName,
          emailVerified: user.emailVerified,
          refreshToken: user.refreshToken
        }
      }
      else {
        this.router.navigate(["/register"]);
      }
    })
  }

  login_google() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then((res) => this.ngZone.run(() => {
      console.log(res)
      
    })).then(() => this.ngZone.run(() => { this.router.navigate(["/home"]) }))
  }

  login() {
    console.log(this.afAuth.auth)
    if(this.afAuth.auth != null) {
      this.afAuth.authState.subscribe( user => {
        let obj = {
          nome: user.displayName,
          email: user.email
        }
        console.log(obj.nome, obj.email)
      })
    }
  }
  logout() {
    this.afAuth.auth.signOut();
  }
  entrar() {
    console.log(this.afAuth.authState)
    this.afAuth.authState.subscribe( user => {
      console.log(user)
      if(user.emailVerified) {
        this.navCtrl.navigateForward('home')
      } 
    })

  }
  async register() {
    try {
      var r = await this.afAuth.auth.createUserWithEmailAndPassword(
        this.user.email,
        this.user.password
      );
      if (r) {
        console.log("Successfully registered!");
        this.navCtrl.navigateRoot('home')
      }

    } catch (err) {
      console.error(err);
    }
  }

  // async doGoogleLogin(){
  //   const loading = await this.loadingController.create({
  //     message: 'Please wait...'
  //   });
  //   this.presentLoading(loading);
  //   this.googlePlus.login({
  //     'scopes': '', // optional - space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
  //     'webClientId': environment.googleWebClientId, // optional - clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
  //     'offline': true, // Optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
  //     })
  //     .then(user => {
  //       //save user data on the native storage
  //       this.nativeStorage.setItem('google_user', {
  //         name: user.displayName,
  //         email: user.email,
  //         picture: user.imageUrl
  //       })
  //       .then(() => {
  //          this.router.navigate(["/user"]);
  //       }, (error) => {
  //         console.log(error);
  //       })
  //       loading.dismiss();
  //     }, err => {
  //       console.log(err);
  //       if(!this.platform.is('cordova')){
  //         this.presentAlert();
  //       }
  //       loading.dismiss();
  //     })
  // }


}
