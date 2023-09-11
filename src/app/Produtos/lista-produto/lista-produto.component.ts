import { Component, OnInit } from '@angular/core';
import { Produto } from '../Produto';
import { ProdutoService } from '../produtos.service';
import { Observable } from 'rxjs';
import { IApiResponse } from '../IApiResponse';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styles: [
  ]
})
export class ListaProdutoComponent implements OnInit {
  public produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService  ){}

  ngOnInit(): void {
    this.produtoService.obterProdutos()
                       .subscribe({
                          next:(data:IApiResponse) =>{
                            this.produtos = data.products;
                            console.log(data);
                          },
                          error:(error) =>{
                            console.error(error);
                          }
                       })
  }
}
