import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule',
    canActivate: [AuthGuard]
  },
  
  // {
  //   path: 'list',
  //   loadChildren: './list/list.module#ListPageModule'
  // },
  // { path: 'futebol', loadChildren: './futebol/futebol.module#FutebolPageModule' },
  // { path: 'times', loadChildren: './times/times.module#TimesPageModule' },
  { path: 'prefeitura', loadChildren: './prefeitura/prefeitura.module#PrefeituraPageModule' },
  { path: 'denuncia', loadChildren: './denuncia/denuncia.module#DenunciaPageModule' },
  { path: 'bingo-torneio', loadChildren: './bingo-torneio/bingo-torneio.module#BingoTorneioPageModule' },
  { path: 'info-anori', loadChildren: './info-anori/info-anori.module#InfoAnoriPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  //{ path: '', loadChildren: 'full' },
  { path: 'melhor-jogador', loadChildren: './melhor-jogador/melhor-jogador.module#MelhorJogadorPageModule' },
  { path: 'mototaxi', loadChildren: './mototaxi/mototaxi.module#MototaxiPageModule' },
  { path: 'viagem', loadChildren: './viagem/viagem.module#ViagemPageModule' },
  { path: 'passagem', loadChildren: './passagem/passagem.module#PassagemPageModule' },
  { path: 'assento', loadChildren: './assento/assento.module#AssentoPageModule' },
  { path: 'igreja', loadChildren: './igreja/igreja.module#IgrejaPageModule' },
  { path: 'igreja-info', loadChildren: './igreja-info/igreja-info.module#IgrejaInfoPageModule' },
  { path: 'hotel', loadChildren: './hotel/hotel.module#HotelPageModule' },
  { path: 'delivery', loadChildren: './delivery/delivery.module#DeliveryPageModule' },
  { path: 'delivery-confirmacao', loadChildren: './delivery-confirmacao/delivery-confirmacao.module#DeliveryConfirmacaoPageModule' },
  { path: 'delivery-sacola', loadChildren: './delivery-sacola/delivery-sacola.module#DeliverySacolaPageModule' },
  { path: 'fake-news', loadChildren: './fake-news/fake-news.module#FakeNewsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule', canActivate: [LoginGuard] },
  { path: 'delivery-menu', loadChildren: './delivery-menu/delivery-menu.module#DeliveryMenuPageModule' },
  { path: 'megasena', loadChildren: './loterias/megasena/megasena.module#MegasenaPageModule' },
  { path: 'loteria', loadChildren: './loterias/loteria/loteria.module#LoteriaPageModule' },
  { path: 'lotofacil', loadChildren: './loterias/lotofacil/lotofacil.module#LotofacilPageModule' },
  { path: 'lotomania', loadChildren: './loterias/lotomania/lotomania.module#LotomaniaPageModule' },
  { path: 'minhas-notificacoes', loadChildren: './minhas-notificacoes/minhas-notificacoes.module#MinhasNotificacoesPageModule' },
  { path: 'comprovantes', loadChildren: './comprovantes/comprovantes.module#ComprovantesPageModule' },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
