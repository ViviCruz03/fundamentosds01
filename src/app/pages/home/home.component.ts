import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

 ///propiedades
 nombre:string = "Vivi";
 apellido:string="";
 calificacion:number= 8;
 encendido:boolean = true;


 personas:string []=["Juan","Pedro","Luisa","Marta","Vivip<3"];

 constructor(){}

//método que cambia los valores de las propiedades

cambiarValores(){
  this.nombre= "Juan";
  this.calificacion=10;
  this.encendido= false;
}
}
