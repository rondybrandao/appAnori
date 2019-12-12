import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoteriaService {
  jogo1; jogo2; jogo3; jogo4; jogo5; jogo6 = []
  jogo7; jogo8; jogo9; jogo10; jogo11; jogo12 = []
  constructor() { }

  //Fechamentos Megasena

  callFechamento_10x3(dez) {
    //100% quadra acertando 6
    return new Promise((resolve, reject) => {
      console.log('dezenas:', dez)
      this.jogo1 = [dez[0], dez[1], dez[3], dez[5], dez[6], dez[7]]
      this.jogo2 = [dez[0], dez[1], dez[4], dez[5], dez[8], dez[9]]
      this.jogo3 = [dez[2], dez[3], dez[4], dez[7], dez[8], dez[9]]
      
      let fechamentos = [
        this.jogo1,
        this.jogo2,
        this.jogo3,
      ]
      resolve(fechamentos)
    
    })
  }

  //Fechamentos Lotofacil

  callFechamentoLotofacil_18x6(dez) {
    //15 acertos
    //13 pontos garantido
    return new Promise((resolve, reject) => {
      this.jogo1 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[7], dez[8], dez[9], dez[10], dez[12], dez[14], dez[15], dez[16], dez[17]]
      this.jogo2 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[16], dez[17], dez[10], dez[11], dez[12], dez[13], dez[15], dez[16]]
      this.jogo3 = [dez[0], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[10], dez[11], dez[12], dez[13], dez[14], dez[16], dez[17]]
      this.jogo4 = [dez[0], dez[1], dez[2], dez[3], dez[5], dez[6], dez[7], dez[9], dez[11], dez[12], dez[13], dez[14], dez[15], dez[16], dez[17]]
      this.jogo5 = [dez[0], dez[1], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[13], dez[14], dez[15], dez[17]]
      this.jogo6 = [dez[1], dez[2], dez[4], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[13], dez[14], dez[15], dez[16], dez[17]]
      
      let fechamentos = [
        this.jogo1,
        this.jogo2,
        this.jogo3,
        this.jogo4,
        this.jogo5,
        this.jogo6,
      ]
      resolve(fechamentos)
    })
  }

  //QUINA

  callFechamentoQuina_8x8(dez) {
    //4 acertos
    //3 pontos garantido & 90% quadra
    //5 acertos 100% quadra $ 75% quina
    return new Promise((resolve, reject) => {
      this.jogo1 = [dez[0], dez[1], dez[2], dez[3], dez[6]]
      this.jogo2 = [dez[0], dez[1], dez[4], dez[5], dez[7]]
      this.jogo3 = [dez[0], dez[2], dez[4], dez[5], dez[7]]
      this.jogo4 = [dez[0], dez[2], dez[5], dez[6], dez[7]]
      this.jogo5 = [dez[0], dez[3], dez[4], dez[6], dez[7]]
      this.jogo6 = [dez[1], dez[2], dez[3], dez[4], dez[7]]
      this.jogo7 = [dez[1], dez[2], dez[3], dez[5], dez[6]]
      this.jogo8 = [dez[1], dez[3], dez[4], dez[6], dez[7]]
      
      let fechamentos = [
        this.jogo1,
        this.jogo2,
        this.jogo3,
        this.jogo4,
        this.jogo5,
        this.jogo6,
        this.jogo7,
        this.jogo8,
      ]
      resolve(fechamentos)
    })
  }

  callFechamentoLotomania_60x6(dez) {
    
    //se os 20 estiverem entre os 60 garantia de no minimo 17 pontos
    return new Promise((resolve, reject) => {
      this.jogo1 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[7], dez[9], dez[10], dez[11], dez[12], dez[13], dez[14], dez[15], dez[16], dez[17], dez[19], dez[21], dez[22], dez[23], dez[24], dez[25], dez[26], dez[27], dez[28], dez[29], dez[31], dez[33], dez[34], dez[35], dez[36], dez[37], dez[38], dez[39], dez[40], dez[41], dez[43], dez[45], dez[46], dez[47], dez[48], dez[49], dez[50], dez[51], dez[52], dez[53], dez[55], dez[57], dez[58], dez[59]]
      this.jogo2 = [dez[0], dez[1], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[11], dez[12], dez[13], dez[15], dez[16], dez[17], dez[18], dez[19], dez[20], dez[21], dez[23], dez[24], dez[25], dez[27], dez[28], dez[29], dez[30], dez[31], dez[32], dez[33], dez[35], dez[36], dez[37], dez[39], dez[40], dez[41], dez[42], dez[43], dez[44], dez[45], dez[47], dez[48], dez[49], dez[51], dez[52], dez[53], dez[54], dez[56], dez[56], dez[57], dez[59]]
      this.jogo3 = [dez[1], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[13], dez[15], dez[16], dez[17], dez[18], dez[19], dez[20], dez[21], dez[22], dez[23], dez[25], dez[27], dez[28], dez[29], dez[30], dez[31], dez[32], dez[33], dez[34], dez[35], dez[37], dez[39], dez[40], dez[41], dez[42], dez[43], dez[44], dez[45], dez[46], dez[47], dez[49], dez[51], dez[52], dez[53], dez[54], dez[55], dez[56], dez[57], dez[58], dez[59]]
      this.jogo4 = [dez[0], dez[1], dez[2], dez[4], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[13], dez[14], dez[16], dez[18], dez[19], dez[20], dez[21], dez[22], dez[23], dez[24], dez[25], dez[26], dez[28], dez[30], dez[31], dez[32], dez[33], dez[34], dez[35], dez[36], dez[37], dez[38], dez[40], dez[42], dez[43], dez[44], dez[45], dez[46], dez[47], dez[48], dez[49], dez[50], dez[52], dez[54], dez[55], dez[56], dez[57], dez[58], dez[59]]
      this.jogo5 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[8], dez[9], dez[10], dez[12], dez[13], dez[14], dez[15], dez[16], dez[17], dez[18], dez[20], dez[21], dez[22], dez[24], dez[25], dez[26], dez[27], dez[28], dez[29], dez[30], dez[32], dez[33], dez[34], dez[36], dez[37], dez[38], dez[39], dez[40], dez[41], dez[42], dez[44], dez[45], dez[46], dez[48], dez[49], dez[50], dez[51], dez[52], dez[53], dez[54], dez[56], dez[57], dez[58]]
      this.jogo6 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[10], dez[11], dez[12], dez[13], dez[14], dez[15], dez[16], dez[17], dez[18], dez[19], dez[20], dez[22], dez[24], dez[25], dez[26], dez[27], dez[28], dez[29], dez[30], dez[31], dez[32], dez[34], dez[36], dez[37], dez[38], dez[39], dez[40], dez[41], dez[42], dez[44], dez[46], dez[48], dez[49], dez[50], dez[51], dez[52], dez[53], dez[54], dez[56], dez[56], dez[58]]

      let fechamentos = [
        this.jogo1,
        this.jogo2,
        this.jogo3,
        this.jogo4,
        this.jogo5,
        this.jogo6,
      ]
      resolve(fechamentos)
    })
  }
}
