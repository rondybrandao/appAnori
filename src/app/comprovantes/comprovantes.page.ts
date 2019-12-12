import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';

enum COLORS {
  GREY = "#E0E0E0",
  GREEN = "#76FF03",
  YELLOW = "#FFCA28",
  BLUE = "#FFCA28",
  RED = "#DD2C00"
}

@Component({
  selector: 'app-comprovantes',
  templateUrl: './comprovantes.page.html',
  styleUrls: ['./comprovantes.page.scss'],
})
export class ComprovantesPage implements OnInit {
  list_comprovantes
  currentClass
  plataforma
  loading
  constructor(
    private userService: UserService,
    private navCtrl: NavController,
    private loadingController: LoadingController
  ) { 
    //this.loadingAguardar()
  }

  ngOnInit() {
    //this.getColorPlataforma(this.plataforma)
    this.listarComprovantes()
  }
  listarComprovantes(){
    this.userService.getAllComprovantes().then((res)=>{
      console.log(res)
      this.list_comprovantes = res
    })
    
  }

  voltar() {
    this.navCtrl.navigateBack('home')
  }

  getColor(plataforma) {
    switch (plataforma) {
      case 's.u.s.e passagem':
        return COLORS.BLUE
      case 's.u.s.e delivery':
        return COLORS.RED
    }
  }
  getColorPlataforma(plataforma) {
    switch (plataforma) {
      case 's.u.s.e passagem':
        return this.plataforma = "plataforma_passagem"
      case 's.u.s.e delivery':
        return this.plataforma = "plataforma_delivery" 
    }
  }

  async loadingAguardar(){
    this.loading = await this.loadingController.create({
      message:'Por favor, aguarde...',
      duration: 2000
    })
    return await this.loading.present()
  }
}
