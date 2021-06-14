import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/common/models/usuario';

//tabla personas
export interface PersonasElement {
  Codigo: number;
  Identificacion: string;
  Nombre: string;  
  Apellidos: string;
  Pais: string;
}

//=========== contenido dentro de los tabs ==============//

//Datos Personales
export interface DatosPersonalesTab {
  Codigo: number;
  Nombre: string; 
  Apellidos: string;
  FechaNacimiento: Date;
  RRSS: string; //redes sociales
  Correos: string[]; 
  Telefonos: string[];
}

//Notas
export interface Notas {
  Codigo: number;
  fechaCreacion: Date;
  Usuario: Usuario;
  descripcion: string;  
}

//Vinculos familiar empresarial
export interface VinculoFamEmp {
  Codigo: number;
  fechaCreacion: Date;
  parentesco: string;
  relacion: string;  
}

// Datps de prueba
const ELEMENT_DATA: PersonasElement[] = [
  {Codigo: 1, Identificacion: 'V123456789', Nombre: 'Jesus', Apellidos: 'Yepes', Pais: 'Venezuela'},
  {Codigo: 2, Identificacion: '', Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 3, Identificacion: '', Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 4, Identificacion: '', Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 5, Identificacion: '', Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 6, Identificacion: '', Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 7, Identificacion: '', Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 8, Identificacion: '', Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 9, Identificacion: '', Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 10, Identificacion: '', Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 11, Identificacion: '', Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 12, Identificacion: '', Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 13, Identificacion: '', Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 14, Identificacion: '', Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 15, Identificacion: '', Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 16, Identificacion: '', Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 17, Identificacion: '', Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 18, Identificacion: '', Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 19, Identificacion: '', Nombre: '', Apellidos: '', Pais: ''},
  {Codigo: 20, Identificacion: 'J-145655555', Nombre: 'Boris', Apellidos: 'Arteta', Pais: 'Venezuela'},
];

const DATOS_PERSONALES: DatosPersonalesTab[] = [                        //meses de 0-11
  { Codigo: 1, Nombre: 'Jesus', Apellidos: 'Yepes', FechaNacimiento: new Date(1995,4,12),RRSS:'correo',Correos:['jesus123@gmail.com','jesus456@hotmail.com'], Telefonos:['0412-123-45-56', '0212-254-65-45']},  
  { Codigo: 2, Nombre: 'Boris', Apellidos: 'Arteta P', FechaNacimiento: new Date(1995,9,23),RRSS:'instagram',Correos:['boris123@gmail.com', 'boriskraka6@hotmail.com'], Telefonos:['0412-123-45-56', '0212-254-65-45']}
];

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})

export class PersonasComponent implements OnInit, AfterViewInit {

   // tabla personas
    displayedColumns: string[] = ['Codigo', 'Identificacion', 'Nombre', 'Apellidos', 'Pais'];
    dataSource = new MatTableDataSource<PersonasElement>(ELEMENT_DATA);
    @ViewChild('paginatorPersonas') paginatorPersonas!: MatPaginator;
    // fin tabla personas
    
    //==================== Contenido dentro de las Tabs ============================//
    
    //** Datos Personales */
    datosPersonalesColumns: string[] = ['Codigo', 'Nombre', 'Apellidos', 'FechaNacimiento','RRSS','Correos','Telefonos'];
    datosPersonalesdataSource = new MatTableDataSource<DatosPersonalesTab>(DATOS_PERSONALES);
    @ViewChild('paginatorDatosPers') paginatorDatosPers!: MatPaginator;


    ngAfterViewInit() {      
      this.dataSource.paginator = this.paginatorPersonas;
      this.datosPersonalesdataSource.paginator = this.paginatorDatosPers;
    }
    
    constructor() { }

    ngOnInit(): void {
    }

    estados: any[] = [
      {value: '0', viewValue: 'Activo'},
      {value: '1', viewValue: 'Inactivo'}      
    ];
}



