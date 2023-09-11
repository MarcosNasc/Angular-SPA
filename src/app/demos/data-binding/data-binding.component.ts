import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: [
  ]
})
export class DataBindingComponent {

  public contadorClique: number = 0;
  public urlImagem: string = "https://angular.gallerycdn.vsassets.io/extensions/angular/ng-template/16.1.8/1691610909935/Microsoft.VisualStudio.Services.Icons.Default";
  public nome: string = "";

  adicionarClique(){
    this.contadorClique++;
  }

  zerarClique(){
    this.contadorClique = 0;
  }

  KeyUp(event : any){
    this.nome = event.target.value;
  }
}
