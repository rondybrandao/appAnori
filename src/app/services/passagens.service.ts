import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PassagensService {
  barco
  constructor(
    private db: AngularFireDatabase
    
  ) { 
    
  }

  pesquisar(data, origem){
    return new Promise((resolve, reject) => {
      this.db.database.ref('viagens/' + data).child(origem).once('value', (resp)=>{
        console.log(resp.val())
        resolve(resp.val())
      })
    })
  }

  addViagem(){
    this.db.database.ref('viagens').child("09/21").set({
      ANORI:{
        barco: "expresso01",
        hora: "08:00",
        valor: 100,
        qnt: 10
      }
    })
  }
}
