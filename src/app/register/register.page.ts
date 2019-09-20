import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
//import * as firebase from 'firebase/app';
import { auth } from 'firebase/app';
import { NavController } from '@ionic/angular';

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
  public user:User = new User();
  constructor(
    public afAuth: AngularFireAuth,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(res => {
      console.log(res)
      if(res){
        this.navCtrl.navigateRoot('')
      }
    });
  }
  logout() {
    this.afAuth.auth.signOut();
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

}
