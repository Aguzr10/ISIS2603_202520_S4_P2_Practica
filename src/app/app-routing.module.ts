import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmprendedorDetailComponent } from './emprendedor/emprendedor-detail/emprendedor-detail.component'; 
import { EmprendedorListComponent } from './emprendedor/emprendedor-list/emprendedor-list.component';

const routes: Routes = [
  {
    path: 'emprendedores',
    component: EmprendedorListComponent
  },
  {
    path: 'emprendedores/:id',
    component: EmprendedorDetailComponent
  },
  {
    path: '',
    redirectTo: 'emprendedores',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
