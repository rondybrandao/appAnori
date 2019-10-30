import { DeliverySacolaPage } from './delivery-sacola/delivery-sacola.page';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//disqus
import { DisqusModule } from "ngx-disqus";

//google maps
import { AgmCoreModule } from '@agm/core';
import { GoogleMaps } from '@ionic-native/google-maps'

//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';

//rating
import { IonicRatingModule } from 'ionic-rating';

//storage
import { IonicStorageModule } from '@ionic/storage';

import { Http, HttpModule } from '@angular/http' 
import { DatePipe } from '@angular/common';
import { DeliveryConfirmacaoPage } from './delivery-confirmacao/delivery-confirmacao.page';

import { Geolocation } from '@ionic-native/geolocation/ngx';

@NgModule({
  declarations: [AppComponent, DeliveryConfirmacaoPage, DeliverySacolaPage],
  entryComponents: [DeliveryConfirmacaoPage, DeliverySacolaPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    IonicRatingModule,
    
    DisqusModule.forRoot('appanoriesporte'),
    AgmCoreModule.forRoot({
      apiKey: 'CHAVES_GOOGLE_MAPS'
    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    GoogleMaps,
    DatePipe,
    Geolocation
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
