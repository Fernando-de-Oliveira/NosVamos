import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule  } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResponsavelFormComponent } from './components/responsavel-form/responsavel-form.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { PcdFormComponent } from './components/pcd-form/pcd-form.component';
import { TrajetosListComponent } from './components/trajetos-list/trajetos-list.component';
import { ResponsavelService } from './services/responsavel.service';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    ResponsavelFormComponent,
    MenuComponent,
    HomeComponent,
    MapaComponent,
    PcdFormComponent,
    TrajetosListComponent,
    AdminComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ResponsavelService,
    HttpModule,
    HttpClient,
    HttpClientModule,
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
