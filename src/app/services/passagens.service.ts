import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as moment from 'moment'

@Injectable({
  providedIn: 'root'
})
export class PassagensService {
  barco
  constructor(
    private db: AngularFireDatabase,
    private loginService: LoginService
  ) { 
    
  }

  pesquisar_(data, origem){
    return new Promise((resolve, reject) => {
      this.db.database.ref('viagens/' + data).child(origem).once('value', (resp)=>{
        console.log(resp.val())
        resolve(resp.val())
      })
    })
  }

  pesquisar(data, origem){
    console.log("origm:", origem)
    return new Promise((resolve, reject) => {
      this.db.database.ref('viagens/' + origem).child(data).once('value', (resp)=>{
        console.log(resp.val())
        resolve(resp.val())
      })
    })
  }

  addViagem(){
    this.db.database.ref('viagens').child('anori').child("11/15").set({
      
        barco: "Silva Lopes",
        hora: "08:00",
        valor: 100,
        qnt: 10,
        poltronas:""
      
    })
  }

  addPassageiros(key, passageiros){
    console.log('key passagens:', key)
    return new Promise((resolve)=>{
      this.db.database.ref('passagens/silva_lopes').child('11/15').child(key).update({
        passageiros: passageiros
      }).then((res=>{
        console.log(res)
        resolve(res)
      }))
      
    })
  }

  addPassagens(passagens){
    let currentTime = moment().format('MMMM D YYYY, h:mm:ss a')
    return new Promise((resolve)=>{
      this.db.database.ref('passagens/silva_lopes').child('11/15').push({
        passagens: passagens,
        passageiros: "",
        hora: currentTime
      }).then((res=>{
        let r = {
          key: res.key,
          hora: currentTime
        }
        console.log(res.key)
        resolve(r)
      }))
      
    })
  }

  addPoltrona(origem, data, poltronas){
    console.log(origem, data, poltronas)

    this.db.database.ref('viagens/').child(origem).child(data).update({
      poltronas:poltronas
    })
  }

  addNotificacao(passageiros){
    const auth = this.loginService.getAuth()
    console.log(auth.currentUser.uid)
    let key = auth.currentUser.uid
    this.db.database.ref('usuarios/' + key).child('notificacao').push({
      item: passageiros,
      tipo: 'passagem'
    })
  }

}
