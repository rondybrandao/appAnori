import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { User } from '../interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(
    private afa: AngularFireAuth,
    private db: AngularFireDatabase
  ) { }
  
  login(user: User) {
    return this.afa.auth.signInWithEmailAndPassword(user.email, user.password)
  }

  register(user: User) {
    
    return this.afa.auth.createUserWithEmailAndPassword(user.email, user.password).then((res) => {
      console.log(res);
      if(res) {
        let uid = res.user.uid
        console.log(uid)
        this.saveUser(user, uid)
      }
      
    })
  }

  logout() {
    return this.afa.auth.signOut();
  }

  getAuth() {
    return this.afa.auth;
  }

  saveUser(user, uid) {
    
    console.log(user)
    console.log(uid)
    return this.db.database.ref('usuarios/' + uid).set({
      uid:uid,
      nome:user.nome,
      //sobrenome: user.sobrenome,
      nascimento: user.nascimento,
      sexo: user.sexo,
      time: user.time
    })
  }
  
}
