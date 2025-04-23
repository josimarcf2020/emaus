import { ColetasServiceService } from './../service/coletas-service.service';
import { Component, OnInit }     from '@angular/core';
import { Coletas }               from '../model/coletas';
import { catchError, Observable, of, tap }       from 'rxjs';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-coletas',
  standalone: false,
  templateUrl: './coletas.component.html',
  styleUrl: './coletas.component.scss'
})
export class ColetasComponent implements OnInit {

  coletas$: Observable<Coletas[]>;
  dataSource = new MatTableDataSource<Coletas>();

  displayedColumns: string[] = ['select','endereco', 'bairro', 'cidade', 'uf', 'actions'];

  constructor(private ColetasServiceService: ColetasServiceService) {
    this.coletas$ = this.ColetasServiceService.coletas_list().pipe(
      catchError(error => {
        console.log(error);
        return of([])
      })
    );
  }

  ngOnInit(): void {
    this.coletas$.subscribe(coletas => {
      this.dataSource.data = coletas;
    },
    error => {
      console.log('Erro ao carregar coletas', error);
    });
  }

  // Método chamado pelo input de filtro
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase(); // Aplica o filtro ao dataSource
  }

  // Método para limpar o campo de busca
  clearSearch(input: HTMLInputElement) {
    input.value = '';
    this.dataSource.filter = ''; // Limpa o filtro no dataSource
  }

  // Método para lidar com a mudança do checkbox
  onSelectChange(coletas: Coletas, event: MatCheckboxChange): void {
    // Atualiza o valor no objeto 'coleta' em memória
    coletas.select = event.checked;

    // Aqui você pode adicionar lógica adicional, como:
    // 1. Chamar um serviço para salvar essa mudança no backend (se aplicável)
    //    this.coletasService.updateSelection(coleta._id, event.checked).subscribe(...);
    // 2. Manter uma lista de itens selecionados para alguma ação em lote
    console.log(`Coleta ${coletas.nome} selecionada: ${coletas.select}`);
    // 3. Atualizar o estado de um checkbox "Selecionar Todos" no cabeçalho (lógica mais complexa)
  }

}
