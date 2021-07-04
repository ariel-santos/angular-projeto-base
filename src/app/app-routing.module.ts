import { HomeComponent } from './views/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { UrlPageEnum } from './shared/enums/url-pages.enum';
import { NgModule } from '@angular/core';


const routes: Routes = [
  {
    path: UrlPageEnum.HOME,
    component: HomeComponent
  },
  {
    path: UrlPageEnum.CLIENTE,
    loadChildren: () =>
      import('./views/cliente/cliente.module').then(
        (module) => module.ClienteModule,
      ),
  },
  {
    path: UrlPageEnum.PRODUTO,
    loadChildren: () =>
      import('./views/produto/produto.module').then(
        (module) => module.ProdutoModule,
      ),
  },
  {
    path: '**',
    redirectTo: '/home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
