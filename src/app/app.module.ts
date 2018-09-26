import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListadoComponent } from './components/listado/listado.component';
import { ContactosService } from './services/contactos.service';
import { HomeComponent } from './components/home/home.component'
import { Routes, RouterModule } from "@angular/router";

const ROUTES:Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'listado', component: ListadoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListadoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ContactosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
