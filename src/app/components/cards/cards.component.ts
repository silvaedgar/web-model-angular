import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;


  // Variable que indica si esta leyendo o grabando datos utilizado para mostrar el spinner progress
  loading = false
  messageSpinner = "Leyendo Datos"


  // Utilizado para enviar los parametros al HeaderCard
  headerCard = { 'title' : "Cards Web Model",
        'buttons' : [ {'label' : 'Procesar', 'emit' : 'Btn1'}, {'label' : 'Imprimir', 'emit' : 'Btn2'}, {'label' : 'Limpiar', 'emit' : 'Btn3'} ],
        'message' : '' }

  ngOnInit(): void {
  }

  Btn1() {
    this.headerCard.message = "Fue presionado el Boton Procesar"
  }

  Btn2() {
    this.headerCard.message = "Fue presionado el Boton Imprimir"
  }

  Btn3() {
    this.headerCard.message = ""
  }


}
