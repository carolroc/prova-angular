import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AnaComponentComponent } from './ana-component/ana-component.component';
import { AnaListaComponentComponent } from './ana-lista-component/ana-lista-component.component';
import { AnaDetalhesComponentComponent } from './ana-detalhes-component/ana-detalhes-component.component';
import { RouterModule } from '@angular/router';
import { AnaDisciplinasServiceService } from './ana-disciplinas-service.service';

const ROUTES = [
  { path: '', component: AnaComponentComponent },
  { path: 'aulas', component: AnaListaComponentComponent },
  { path: 'aulas/:index', component: AnaDetalhesComponentComponent },
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(ROUTES)],
  declarations: [
    AppComponent,
    HelloComponent,
    AnaComponentComponent,
    AnaListaComponentComponent,
    AnaDetalhesComponentComponent,
  ],
  bootstrap: [AppComponent],
  providers: [AnaDisciplinasServiceService],
})
export class AppModule {}
