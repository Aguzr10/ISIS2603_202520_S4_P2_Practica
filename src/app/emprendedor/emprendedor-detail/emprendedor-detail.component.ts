import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmprendedorDetail } from '../emprendedor-detail';
import { EmprendedorService } from '../services/emprendedor.service';

@Component({
  selector: 'app-emprendedor-detail',
  standalone: false,
  templateUrl: './emprendedor-detail.component.html',
  styleUrl: './emprendedor-detail.component.css'
})
export class EmprendedorDetailComponent implements OnInit {

  emprendedorDetail: EmprendedorDetail | null = null;

  constructor(
    private route: ActivatedRoute,
    private emprendedorService: EmprendedorService
  ) {}

  ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));

  this.emprendedorService.getDetalle(id)
    .subscribe(data => {
      this.emprendedorDetail = data;
    });
}

}