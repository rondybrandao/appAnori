import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

var disqus_config = function () {
  this.page.url = '/about';  // Replace PAGE_URL with your page's canonical URL variable
  this.page.identifier = 'appanoriesporte'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
  };

  (function() { // DON'T EDIT BELOW THIS LINE
  var d = document, s = d.createElement('script');
  s.src = 'https://appanoriesporte.disqus.com/embed.js';
  s.setAttribute('data-timestamp',  '15/09/2019');
  (d.head || d.body).appendChild(s);
  })();

  
@Component({
  selector: 'app-times',
  templateUrl: './times.page.html',
  styleUrls: ['./times.page.scss'],
})
export class TimesPage implements OnInit {
  pageId = '/about';

  constructor(public navCrtl: NavController) { }

  ngOnInit() {
  }

  voltar() {
    this.navCrtl.navigateBack('futebol')
  }

}
