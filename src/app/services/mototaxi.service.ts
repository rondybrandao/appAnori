import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as moment from 'moment'
@Injectable({
  providedIn: 'root'
})
export class MototaxiService {
  id
  constructor(
    private db: AngularFireDatabase,
  ) { 
    this.id = moment().format('hmmss')
  }

  savePedido(pedido) {
    console.log(pedido)
    console.log(this.id)
    var passageiro = 'Jon Do'
    return new Promise((resolve, reject) => {
      let id =  this.id 
      console.log(id)
      this.db.database.ref('pedidos').child(id).set({
        id: id,
        passageiro: 'nomeDoUsuario',
        latitude: pedido.latitude,
        longitude: pedido.longitude,
        casa:pedido.casa,
        referencia: pedido.referencia,
        status: {
          mototaxista:"",
          OK:false
        }
      })
      this.getMototaxista().then((result) => {
        console.log(result['nome'])
        let nome = result['nome']
        let cont= result['cont']
        this.sendMessageMoto(nome, id, cont, passageiro, pedido.casa, pedido.latitude, pedido.longitude)
        let res = {
          id:id, 
          mototaxista:result
        }
        resolve(res)
      })
    })
  }

  sendMessageMoto(nome, numero, cont, passageiro, casa, latitude, longitude){
    this.db.database.ref('mototaxista/teste').update({
      corrida:true,
      contCorrida: cont,
      pedido:{
        numero: numero,
        passageiro: passageiro,
        casa: casa,
        latitude: latitude,
        longitude: longitude
      }
      
    })
  }

  getMototaxista() {
    var nome_mototaxi
    return new Promise((resolve, reject) => {
      var ref = this.db.database.ref("mototaxista");
      ref.orderByChild("contCorrida").limitToFirst(1).once("child_added", function(snapshot) {
        console.log(snapshot.key);
        nome_mototaxi = snapshot.key
        console.log(snapshot.val().contCorrida)
        let nome_cont = {
          nome:snapshot.key,
          cont:snapshot.val().contCorrida
        }
        resolve(nome_cont)
      });
    })
  }

  getStatusPedido(pedido) {
    var ped, nome, status
    return new Promise((resolve, reject) => {
      this.db.list('pedidos/' + pedido).snapshotChanges().subscribe(pedido => {
        console.log(pedido)
        
        pedido.forEach(item => {
          console.log(item.payload.val())
          ped = item.payload.val()
          console.log(ped['status'])
          status = ped['status']
          nome = ped['mototaxista']
          
        })
        if(status) {
          let res = {
            nome_mototaxista: nome
          }
          resolve(res)
        }
      })
    })
  }
}
