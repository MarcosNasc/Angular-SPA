import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Produto } from "./Produto";
import { Observable } from "rxjs";
import { IApiResponse } from "./IApiResponse";

@Injectable()
export class ProdutoService{

    private urlServiceV1: string = "https://dummyjson.com/";

    constructor(private http: HttpClient ){

    }

    obterProdutos() : Observable<IApiResponse> {
        return this.http
            .get<IApiResponse>(this.urlServiceV1 + "products");
    }
}