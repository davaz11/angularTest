import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {
console.log("se esta creando el modulo")
   }

  ngOnInit(): void {
console.log("modulo creado")
  }

contador=0;
nombre="Dani";
arr = [1,2,3,4,5];

crearNombre(){
  this.nombre="Daniel";
}

suma(){
this.contador++;
this.arr.push(this.contador);
}

}
