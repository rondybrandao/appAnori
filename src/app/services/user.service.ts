import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private afa: AngularFireAuth,
    private db: AngularFireDatabase,
  ) { }

  getAuth() {
    return this.afa.auth
  }
  getAllNotificacoes(){
    var listNotificacoes
    let user = this.afa.auth.currentUser.uid
    console.log(user)
    return new Promise((resolve)=>{
      this.db.list('usuarios/'+ user + '/notificacao').snapshotChanges()
      .subscribe(list => {
        listNotificacoes = list.map(item => {
          return {
            key: item.key, ...item.payload.val()
          }
        })
        resolve(listNotificacoes)
      })
    })
  }

  addComprovanteCarteira(comprovante){
    let user = this.afa.auth.currentUser.uid
    console.log(comprovante)
    return new Promise((resolve)=>{
      this.db.database.ref('usuarios').child(user).child('carteira').child('comprovantes').push({
        items:comprovante
      })
    })
  }

  getAllComprovantes(){
    var listComprovantes
    let user = this.afa.auth.currentUser.uid
    console.log(user)
    return new Promise((resolve)=>{
      this.db.list('usuarios/'+ user + '/carteira/comprovantes').snapshotChanges()
      .subscribe(list => {
        listComprovantes = list.map(item => {
          return {
            key: item.key, ...item.payload.val()
          }
        })
        console.log(listComprovantes)
        resolve(listComprovantes)
      })
    })
  }
}
