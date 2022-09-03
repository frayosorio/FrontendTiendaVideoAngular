import { Component, OnInit } from '@angular/core';
import { Empresa } from '../../modelos/empresa';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  public textoBusqueda: string = "";
  public empresas: Empresa[] = [];

  public columnas = [
    { name: 'Nombre', prop: 'nombre' },
    { name: 'Codigo', prop: 'id' },
    { name: 'País', prop: 'pais.nombre' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  buscar() {

  }

}
