import { ColetasServiceService } from './../service/coletas-service.service';
import { Component, OnInit }     from '@angular/core';
import { Coletas }               from '../model/coletas';
import { Observable, tap }       from 'rxjs';

@Component({
  selector: 'app-coletas',
  standalone: false,
  templateUrl: './coletas.component.html',
  styleUrl: './coletas.component.scss'
})
export class ColetasComponent implements OnInit {

  coletas$: Observable<Coletas[]>;
  displayedColumns = ['endereco', 'bairro', 'cidade', 'cep', 'uf'];

  constructor(private ColetasServiceService: ColetasServiceService) {
    this.coletas$ = this.ColetasServiceService.coletas_list()
  }

  ngOnInit(): void {

  }

}
