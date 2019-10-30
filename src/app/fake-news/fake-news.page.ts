import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fake-news',
  templateUrl: './fake-news.page.html',
  styleUrls: ['./fake-news.page.scss'],
})
export class FakeNewsPage implements OnInit {
  passageiro
  constructor(
    public afAuth: AngularFireAuth, 
    public navCtrl: NavController,
    private route: ActivatedRoute,) 
    {
      this.passageiro = this.route.snapshot.paramMap.get('passageiro')
     }

  ngOnInit() {
    console.log(this.passageiro)
  }

  voltar() {
    this.navCtrl.navigateBack('home')
  }

}
