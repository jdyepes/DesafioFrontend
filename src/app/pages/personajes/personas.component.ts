import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ClientService } from 'src/app/core/services/client.service';
import { MatSort } from '@angular/material/sort';
import * as moment from 'moment';

//tabla personajes
export class PersonajesElement {
  Codigo!: number;
  Name!: string;
  Patronus!: string;  
  Age!: number;
  Image!: string;
}


@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})

export class PersonasComponent implements OnInit {

   // tabla personajes
    displayedColumns: string[] = ['Codigo', 'Name', 'Patronus', 'Age', 'Image'];
    dataSource!: MatTableDataSource<PersonajesElement>;
    @ViewChild('paginatorPersonajes') paginatorPersonas!: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort!: MatSort;

    // fin tabla personajes
    PersonajesElement = [];

    listPersonajesElement : PersonajesElement [] = [];
 
    selectedHouse!: string;
    
    constructor(private clientService: ClientService) { }

    ngOnInit(): void {
    }

    nombreCasa: any[] = [
      {value: 'slytherin', viewValue: 'Slytherin'},
      {value: 'gryffindor', viewValue: 'Gryffindor'},
      {value: 'ravenclaw', viewValue: 'Ravenclaw'},
      {value: 'hufflepuff', viewValue: 'Hufflepuff'}         
    ];

    // boton para consultar
    consultar(event: Event) : any{
      console.log('data', event);
      
      this.clientService.getHouseCharacters(this.selectedHouse).subscribe(
        data => {
          let i=1;//para simular el codigo como indice
          data.forEach(((object: { name: string; patronus: string; image: string; dateOfBirth: Date; }) => {              
              let dataTable = new PersonajesElement();
              dataTable.Codigo = i;
              dataTable.Name = object.name;
              dataTable.Patronus = object.patronus;
              dataTable.Image = object.image;
             // calculo de edad
              var birthyear = moment(new Date().getFullYear(), 'YYYY'); 
              var visitdate = moment(object.dateOfBirth, 'DD-MM-YYYY');
              if (!Number.isNaN(birthyear.diff(visitdate, 'y'))) 
                  dataTable.Age = birthyear.diff(visitdate, 'y');
              else  
                dataTable.Age = 0; 
               
              i++;
              this.listPersonajesElement.push(dataTable);
          }));

          console.log(this.listPersonajesElement);

          this.dataSource = new MatTableDataSource<PersonajesElement>(this.listPersonajesElement);
          this.dataSource.paginator = this.paginatorPersonas; // paginacion de la tabla
          this.dataSource.sort = this.sort; // ordenamiento de los campos
        },
        err => {
        
          console.log(err);
          window.alert('Ha ocurrido un error. Favor intente mas tarde.');
        }
      );
    }
}



