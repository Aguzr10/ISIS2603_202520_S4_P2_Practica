import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmprendedorListComponent } from './emprendedor-list/emprendedor-list.component';
import { EmprendedorDetailComponent } from './emprendedor-detail/emprendedor-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    EmprendedorListComponent,
    EmprendedorDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule   
  ],
  exports: [
    EmprendedorListComponent
  ]
})
export class EmprendedorModule { }
