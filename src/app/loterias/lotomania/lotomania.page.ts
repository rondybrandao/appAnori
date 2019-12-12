import { LoteriaService } from './../../services/loteria.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-lotomania',
  templateUrl: './lotomania.page.html',
  styleUrls: ['./lotomania.page.scss'],
})
export class LotomaniaPage implements OnInit {
  entrada_usuario = []
  apostas = []
  public form = [
    { id: 0, fixa: false, val: '01', checked: false },
    { id: 1, fixa: false, val: '02', checked: false },
    { id: 2, fixa: false, val: '03', checked: false },
    { id: 3, fixa: false, val: '04', checked: false },
    { id: 4, fixa: false, val: '05', checked: false },
    { id: 5, fixa: false, val: '06', checked: false },
    { id: 6, fixa: false, val: '07', checked: false },
    { id: 7, fixa: false, val: '08', checked: false },
    { id: 8, fixa: false, val: '09', checked: false },
    { id: 9, fixa: false, val: '10', checked: false },
    { id: 10, fixa: false, val: '11', checked: false },
    { id: 11, fixa: false, val: '12', checked: false },
    { id: 12, fixa: false, val: '13', checked: false },
    { id: 13, fixa: false, val: '14', checked: false },
    { id: 14, fixa: false, val: '15', checked: false },
    { id: 15, fixa: false, val: '16', checked: false },
    { id: 16, fixa: false, val: '17', checked: false },
    { id: 17, fixa: false, val: '18', checked: false },
    { id: 18, fixa: false, val: '19', checked: false },
    { id: 19, fixa: false, val: '20', checked: false },
    { id: 20, fixa: false, val: '21', checked: false },
    { id: 21, fixa: false, val: '22', checked: false },
    { id: 22, fixa: false, val: '23', checked: false },
    { id: 23, fixa: false, val: '24', checked: false },
    { id: 24, fixa: false, val: '25', checked: false },
    { id: 25, fixa: false, val: '26', checked: false },
    { id: 26, fixa: false, val: '27', checked: false },
    { id: 27, fixa: false, val: '28', checked: false },
    { id: 28, fixa: false, val: '29', checked: false },
    { id: 29, fixa: false, val: '30', checked: false },
    { id: 30, fixa: false, val: '31', checked: false },
    { id: 31, fixa: false, val: '32', checked: false },
    { id: 32, fixa: false, val: '33', checked: false },
    { id: 33, fixa: false, val: '34', checked: false },
    { id: 34, fixa: false, val: '35', checked: false },
    { id: 35, fixa: false, val: '36', checked: false },
    { id: 36, fixa: false, val: '37', checked: false },
    { id: 37, fixa: false, val: '38', checked: false },
    { id: 38, fixa: false, val: '39', checked: false },
    { id: 39, fixa: false, val: '40', checked: false },
    { id: 40, fixa: false, val: '41', checked: false },
    { id: 41, fixa: false, val: '42', checked: false },
    { id: 42, fixa: false, val: '43', checked: false },
    { id: 43, fixa: false, val: '44', checked: false },
    { id: 44, fixa: false, val: '45', checked: false },
    { id: 45, fixa: false, val: '46', checked: false },
    { id: 46, fixa: false, val: '47', checked: false },
    { id: 47, fixa: false, val: '48', checked: false },
    { id: 48, fixa: false, val: '49', checked: false },
    { id: 49, fixa: false, val: '50', checked: false },
    { id: 50, fixa: false, val: '51', checked: false },
    { id: 51, fixa: false, val: '52', checked: false },
    { id: 52, fixa: false, val: '53', checked: false },
    { id: 53, fixa: false, val: '54', checked: false },
    { id: 54, fixa: false, val: '55', checked: false },
    { id: 55, fixa: false, val: '56', checked: false },
    { id: 56, fixa: false, val: '57', checked: false },
    { id: 57, fixa: false, val: '58', checked: false },
    { id: 58, fixa: false, val: '59', checked: false },
    { id: 59, fixa: false, val: '60', checked: false },
    { id: 60, fixa: false, val: '61', checked: false },
    { id: 61, fixa: false, val: '62', checked: false },
    { id: 62, fixa: false, val: '63', checked: false },
    { id: 63, fixa: false, val: '64', checked: false },
    { id: 64, fixa: false, val: '65', checked: false },
    { id: 65, fixa: false, val: '66', checked: false },
    { id: 66, fixa: false, val: '67', checked: false },
    { id: 67, fixa: false, val: '68', checked: false },
    { id: 68, fixa: false, val: '69', checked: false },
    { id: 69, fixa: false, val: '70', checked: false },
    { id: 70, fixa: false, val: '71', checked: false },
    { id: 71, fixa: false, val: '72', checked: false },
    { id: 72, fixa: false, val: '73', checked: false },
    { id: 73, fixa: false, val: '74', checked: false },
    { id: 74, fixa: false, val: '75', checked: false },
    { id: 75, fixa: false, val: '76', checked: false },
    { id: 76, fixa: false, val: '77', checked: false },
    { id: 77, fixa: false, val: '78', checked: false },
    { id: 78, fixa: false, val: '79', checked: false },
    { id: 79, fixa: false, val: '80', checked: false },
    { id: 80, fixa: false, val: '81', checked: false },
    { id: 81, fixa: false, val: '82', checked: false },
    { id: 82, fixa: false, val: '83', checked: false },
    { id: 83, fixa: false, val: '84', checked: false },
    { id: 84, fixa: false, val: '85', checked: false },
    { id: 85, fixa: false, val: '86', checked: false },
    { id: 86, fixa: false, val: '87', checked: false },
    { id: 87, fixa: false, val: '88', checked: false },
    { id: 88, fixa: false, val: '89', checked: false },
    { id: 89, fixa: false, val: '90', checked: false },
    { id: 90, fixa: false, val: '91', checked: false },
    { id: 91, fixa: false, val: '92', checked: false },
    { id: 92, fixa: false, val: '93', checked: false },
    { id: 93, fixa: false, val: '94', checked: false },
    { id: 94, fixa: false, val: '95', checked: false },
    { id: 95, fixa: false, val: '96', checked: false },
    { id: 96, fixa: false, val: '97', checked: false },
    { id: 97, fixa: false, val: '98', checked: false },
    { id: 98, fixa: false, val: '99', checked: false },
    { id: 99, fixa: false, val: '00', checked: false }

  ];
  constructor(
    private router: Router,
    public toastController:ToastController,
    public loadingController: LoadingController,
    private loteriaService: LoteriaService
  ) { }

  ngOnInit() {
  }
  voltar() {
    this.router.navigate(['loteria'])
  }
  onFilterChange(eve: any){
    console.log("id:",this.form[eve.id])
      this.form[eve.id].checked = !this.form[eve.id].checked
      console.log('evento:',eve)
      if (eve.checked){
        this.entrada_usuario.push(eve.val)
      } else {
        let index = this.entrada_usuario.indexOf(eve.val);
        console.log("index:",index);
        this.entrada_usuario.splice(index, 1)
        
      }
      console.log('entrada_usuario:', this.entrada_usuario)
  }

  callFechamento(){
    if (this.entrada_usuario.length == 60 ){
      this.loadingFechamento_60x6()
    } else {
      this.showToastError()
    }
  }

  async loadingFechamento_60x6() {
    const loading = await this.loadingController.create({
      message: 'Criando fechamentos',
      duration: 2000
    });
    await loading.present();
    this.loteriaService.callFechamentoLotomania_60x6(this.entrada_usuario)
      .then((result:any[])=>{
        console.log(result)
        this.apostas = result;
        
      })
      .catch((error:any)=>{
        console.log('error:',error)
    });
  }

  async showToastError(){
    const toast = await this.toastController.create({
      message: 'ERRO!: ESCOLHA 60 DEZENAS!.' +'/n TENTE DENOVO',
      duration: 2000,
      position: "middle"
    });
    toast.present();
  }

}
