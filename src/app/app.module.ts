import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListadoComponent } from './components/listado/listado.component';
import { ContactosService } from './services/contactos.service';
import { HomeComponent } from './components/home/home.component'
import { Routes, RouterModule } from "@angular/router";

import { HttpClientModule } from "@angular/common/http";
import { FormComponent } from './components/listado/form/form.component' ;

const ROUTES:Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'contactos', component: ListadoComponent},
  {path:'contactos/form',component: FormComponent},
  {path:'contactos/form/:id',component: FormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListadoComponent,
    HomeComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    FormsModule
  ],
  providers: [ContactosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
