import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as moment from 'moment'

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  getAllSanduiches() {
    var listProdutos
    return new Promise((resolve, reject)=>{
      this.db.list('delivery/pretinho/sanduiches').snapshotChanges()
      .subscribe(list => {
        listProdutos = list.map(item => {
          return {
            $key: item.key, ...item.payload.val()
          }
        })
        console.log(listProdutos)
        resolve(listProdutos)
      })
    })
  }

  getAllBebidas() {
    var listBebidas
    return new Promise((resolve, reject)=>{
      this.db.list('delivery/pretinho/bebidas').snapshotChanges()
      .subscribe(list => {
        listBebidas = list.map(item => {
          return {
            $key: item.key, ...item.payload.val()
          }
        })
        console.log(listBebidas)
        resolve(listBebidas)
      })
    })
  }

  fazerPedido(pedido, total, position, endereco, troco){
    //console.log(position)
    let currentTime = moment().format('MMMM D YYYY, h:mm:ss a')
    //console.log(currentTime)
    return new Promise((resolve)=>{
      this.db.database.ref('delivery/pretinho/pedidos').push({
        pedido: pedido,
        total: total,
        position: position,
        endereco: endereco,
        troco: troco,
        hora: currentTime
        //referencia: referencia
      }).then(res => {
        let r = {
          key:res.key,
          hora:currentTime
        }
        
        resolve(r)
      })
    })
  }
}
