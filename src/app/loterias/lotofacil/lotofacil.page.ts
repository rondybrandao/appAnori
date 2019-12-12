import { LoteriaService } from './../../services/loteria.service';
import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-lotofacil',
  templateUrl: './lotofacil.page.html',
  styleUrls: ['./lotofacil.page.scss'],
})
export class LotofacilPage implements OnInit {
  entrada_usuario =[]
  apostas = []
  fechamento
  verificador
  sorteio_corrente
  dezenas_corrente

  public form = [
    { id: 0, val: '01', checked: false },
    { id: 1, val: '02', checked: false },
    { id: 2, val: '03', checked: false },
    { id: 3, val: '04', checked: false },
    { id: 4, val: '05', checked: false },
    { id: 5, val: '06', checked: false },
    { id: 6, val: '07', checked: false },
    { id: 7, val: '08', checked: false },
    { id: 8, val: '09', checked: false },
    { id: 9, val: '10', checked: false },
    { id: 10, val: '11', checked: false },
    { id: 11, val: '12', checked: false },
    { id: 12, val: '13', checked: false },
    { id: 13, val: '14', checked: false },
    { id: 14, val: '15', checked: false },
    { id: 15, val: '16', checked: false },
    { id: 16, val: '17', checked: false },
    { id: 17, val: '18', checked: false },
    { id: 18, val: '19', checked: false },
    { id: 19, val: '20', checked: false },
    { id: 20, val: '21', checked: false },
    { id: 21, val: '22', checked: false },
    { id: 22, val: '23', checked: false },
    { id: 23, val: '24', checked: false },
    { id: 24, val: '25', checked: false }]

  constructor(
    private loteriaService: LoteriaService,
    private navCtrl: NavController,
    private loadingController: LoadingController,
    public toastController:ToastController,
  ) { }

  ngOnInit() {
  }
  voltar() {
    this.navCtrl.navigateBack('loteria');
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

  async loadingFechamento_18x6() {
    const loading = await this.loadingController.create({
      message: 'Calculando Fechamentos',
      duration: 2000
    });
    await loading.present();
    this.loteriaService.callFechamentoLotofacil_18x6(this.entrada_usuario)
      .then((result:any[])=> {
        this.apostas = result
      })
  }

  callFechamento(){
    if (this.entrada_usuario.length == 18){
      this.loadingFechamento_18x6() 
    } else {
      this.showToastError()
    }
  }

  async showToastError(){
    const toast = await this.toastController.create({
      message: 'ERRO!: ESCOLHA 18 DEZENAS!.',
      duration: 2000,
      position: "middle"
    });
    toast.present();
  }

}
