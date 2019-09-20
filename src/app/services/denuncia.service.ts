import { Injectable } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DenunciaService {
  toDaySend: any
  PATH: 'denuncia'
  
  constructor(
    private db: AngularFireDatabase,
  ) { 
    moment.locale('pt-BR');
    this.toDaySend = moment().format('D/MM');
  }

  save(denuncia:any) {
    console.log(denuncia)
    return new Promise((resolve, reject) => {
      if(denuncia) {
        this.db.list('/denuncia')
          .push({
            data: this.toDaySend,
            nome: denuncia.nome,
            contato: denuncia.contato,
            denuncia: denuncia.denuncia
          })
          .then(() => resolve())
      }
    })
  }
}
