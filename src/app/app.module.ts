import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AnaComponentComponent } from './ana-component/ana-component.component';
import { AnaListaComponentComponent } from './ana-lista-component/ana-lista-component.component';
import { AnaDetalhesComponentComponent } from './ana-detalhes-component/ana-detalhes-component.component';
import { RouterModule } from '@angular/router';

const ROUTES = [
  {path:'', component: AnaComponentComponent},
  {path:'aulas', component: AnaListaComponentComponent},
  {path:'aula/:id', component: AnaDetalhesComponentComponent}
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(ROUTES) ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
