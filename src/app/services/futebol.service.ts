import { Injectable, ɵConsole } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FutebolService {

  constructor(
    private db: AngularFireDatabase,
  ) { }

  votar(voto) {
    console.log(voto)
    this.db.database.ref('melhor-jogador').child(voto).push({
      voto:1
    })
  }
}
