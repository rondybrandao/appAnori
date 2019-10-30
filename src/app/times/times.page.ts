import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

// var disqus_config = function () {
//   this.page.url = '/about';  // Replace PAGE_URL with your page's canonical URL variable
//   this.page.identifier = 'appanoriesporte'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
//   };

//   (function() { // DON'T EDIT BELOW THIS LINE
//   var d = document, s = d.createElement('script');
//   s.src = 'https://appanoriesporte.disqus.com/embed.js';
//   s.setAttribute('data-timestamp',  '15/09/2019');
//   (d.head || d.body).appendChild(s);
//   })();

  
@Component({
  selector: 'app-times',
  templateUrl: './times.page.html',
  styleUrls: ['./times.page.scss'],
})
export class TimesPage implements OnInit {
  pageId = '/about';
  heartNoVote = 'assets/futebol/heart.png'
  heartVote = 'assets/futebol/like.png'
  heart = this.heartNoVote
  contVote: any = 0

  vote = [
    {checked: false, value:'assets/futebol/heart.png'},
    {checked: true, value:'assets/futebol/like.png'},
  ]
  constructor(
    public navCrtl: NavController,
    public afAuth: AngularFireAuth,
    ) { }

  ngOnInit() {
  }

  voltar() {
    this.navCrtl.navigateBack('futebol')
  }
  torcedor(eve) {
    console.log(eve)
    //eve = !this.vote[0].checked
      console.log('evento:',eve)
      if (eve.checked){
        console.log('checkado')
        this.vote[0].checked = false
        this.vote[0].value = this.heartNoVote
      } else {
        console.log("nao checkado")
        this.vote[0].checked = true 
        this.vote[0].value = this.heartVote
      }
      
  }

}
