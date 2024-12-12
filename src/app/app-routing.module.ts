import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//Este módulo gestiona las rutas de la aplicación, aunque en el código proporcionado no hay rutas definidas. Se configura el enrutador para que pueda ser usado en el futuro
