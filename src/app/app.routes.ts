import { Routes } from "@angular/router";
import { HomeComponent } from "./Navigation/home/home.component";
import { ContatoComponent } from "./Institucional/contato/contato.component";
import { SobreComponent } from "./Institucional/sobre/sobre.component";
import { DataBindingComponent } from "./demos/data-binding/data-binding.component";
import { ListaProdutoComponent } from "./Produtos/lista-produto/lista-produto.component";

export const rootRoutesConfig : Routes = [
    {path: '', redirectTo:'/home',pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path: 'contato', component: ContatoComponent},
    {path: 'sobre', component: SobreComponent},
    {path: 'feature-data-binding', component: DataBindingComponent},
    {path: 'produtos', component: ListaProdutoComponent},
    {path: 'produto-detalhe/:id', component: ListaProdutoComponent}
];

