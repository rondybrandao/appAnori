import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DeliveryConfirmacaoPage } from './delivery-confirmacao.page';

const routes: Routes = [
  {
    path: '',
    component: DeliveryConfirmacaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DeliveryConfirmacaoPage]
})
export class DeliveryConfirmacaoPageModule {}
