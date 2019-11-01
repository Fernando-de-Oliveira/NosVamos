import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResponsavelFormComponent } from './components/responsavel-form/responsavel-form.component';
import { LoginComponent } from './components/login/login.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { PcdFormComponent } from './components/pcd-form/pcd-form.component';
import { TrajetosListComponent } from './components/trajetos-list/trajetos-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'mapa',
    component: MapaComponent
  },
  {
    path: 'trajetos/list',
    component: TrajetosListComponent
  },
  {
    path: 'pcd/create',
    component: PcdFormComponent
  },
  {
    path: 'responsavel/create',
    component: ResponsavelFormComponent
  }
  // {
  //   path: 'games/edit/:id',
  //   component: GameFormComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
