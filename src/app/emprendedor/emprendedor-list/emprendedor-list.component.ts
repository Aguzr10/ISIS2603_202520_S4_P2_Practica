import { Component, OnInit } from '@angular/core';
import { Emprendedor } from '../emprendedor';
import { EmprendedorService } from '../services/emprendedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emprendedor-list',
  standalone: false,
  templateUrl: './emprendedor-list.component.html',
  styleUrl: './emprendedor-list.component.css'
})
export class EmprendedorListComponent implements OnInit {

  emprendedores: Array<Emprendedor> = [];

  constructor(
    private emprendedorService: EmprendedorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.emprendedorService.getListado()
      .subscribe(data => {
        this.emprendedores = data;
      });
  }

  verDetalle(id: number): void {
    this.router.navigate(['/emprendedores', id]);
  }

}
