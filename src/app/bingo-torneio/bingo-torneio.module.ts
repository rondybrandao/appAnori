import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BingoTorneioPage } from './bingo-torneio.page';

const routes: Routes = [
  {
    path: '',
    component: BingoTorneioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BingoTorneioPage]
})
export class BingoTorneioPageModule {}
