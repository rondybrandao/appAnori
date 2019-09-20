import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'futebol', loadChildren: './futebol/futebol.module#FutebolPageModule' },
  { path: 'times', loadChildren: './times/times.module#TimesPageModule' },
  { path: 'prefeitura', loadChildren: './prefeitura/prefeitura.module#PrefeituraPageModule' },
  { path: 'denuncia', loadChildren: './denuncia/denuncia.module#DenunciaPageModule' },
  { path: 'bingo-torneio', loadChildren: './bingo-torneio/bingo-torneio.module#BingoTorneioPageModule' },
  { path: 'info-anori', loadChildren: './info-anori/info-anori.module#InfoAnoriPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'melhor-jogador', loadChildren: './melhor-jogador/melhor-jogador.module#MelhorJogadorPageModule' },
  { path: 'mototaxi', loadChildren: './mototaxi/mototaxi.module#MototaxiPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
