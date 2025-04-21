import { Component, OnInit } from '@angular/core';
import { Coletas } from '../model/coletas';

@Component({
  selector: 'app-coletas',
  standalone: false,
  templateUrl: './coletas.component.html',
  styleUrl: './coletas.component.scss'
})
export class ColetasComponent implements OnInit {

  coletas: Coletas[];
  displayedColumns = ['nome', 'endereco', 'bairro', 'cidade', 'cep', 'email', 'uf'];

  constructor() {
    this.coletas = [
      {
        _id: '1', nome: 'Maria Valentina', endereco: 'Rua Liberato Barroso 1425', bairro: 'centro', cep: '60030-161', email: 'mvalentina@gmail.com',
        cidade: 'Fortaleza', uf: 'CE'
      },
      {
        _id: '2', nome: 'Camila Rafaela', endereco: 'Rua Liberato Barroso 1425', bairro: 'centro', cep: '60030-161', email: 'crafaela@gmail.com',
        cidade: 'Teresina', uf: 'PI'
      },
      {
        _id: '3', nome: 'Clóvis Rafael', endereco: 'Rua Liberato Barroso 1425', bairro: 'centro', cep: '60030-161', email: 'crafaeli@gmail.com',
        cidade: 'Campo Maior', uf: 'PI'
      }
    ];
  }

  ngOnInit(): void {
  }

}
