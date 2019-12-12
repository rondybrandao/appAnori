import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-minhas-notificacoes',
  templateUrl: './minhas-notificacoes.page.html',
  styleUrls: ['./minhas-notificacoes.page.scss'],
})
export class MinhasNotificacoesPage implements OnInit {
  list_notificacoes
  constructor(
    private userService: UserService
  ) { 
    this.callNotificacao()
  }

  ngOnInit() {
  }
  callNotificacao(){
    this.userService.getAllNotificacoes().then((res=>{
      console.log(res)
      this.list_notificacoes = res
    }))
  }

}
