import { DenunciaService } from './../services/denuncia.service';
import { NavController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

    
@Component({
  selector: 'app-denuncia',
  templateUrl: './denuncia.page.html',
  styleUrls: ['./denuncia.page.scss'],
})
export class DenunciaPage implements OnInit {
  form: FormGroup

  constructor(
    public navCtrl: NavController, 
    private formBuilder: FormBuilder, 
    private toast: ToastController,
    private denuncia: DenunciaService,
    private  router:  Router) {
      this.createForm()
     }

  ngOnInit() {
  }
  voltar() {
    this.navCtrl.navigateBack('')
  }
  createForm() {
    this.form = this.formBuilder.group({
      nome: new FormControl(''),
      contato: new FormControl('', Validators.compose([
        Validators.required,
        //Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      denuncia: new FormControl('')
    })
  }

  registrarDenuncia(form) {
    console.log(form.value)
    this.denuncia.save(form.value).then(() => {
      this.router.navigateByUrl('denuncia')
    })
  }

  // onSubmit() {
  //   if (this.form.valid) {
  //     this.denuncia.save(this.form.value)
  //       .then(() => {
  //         //this.toast.create({ message: 'Questionario enviado com sucesso.', duration: 3000 }).present();
  //         //this.viewCtrl.dismiss();
  //         //this.navCtrl
  //       })
  //       .catch((e) => {
  //         //this.toast.create({ message: 'Erro ao enviar questionario.', duration: 3000 }).present();
  //         console.error(e);
  //       })
  //   }
  // }

}
