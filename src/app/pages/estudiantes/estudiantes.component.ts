import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ClientService } from 'src/app/core/services/client.service';
import { MatSort } from '@angular/material/sort';
import * as moment from 'moment';
import { Router } from '@angular/router';

//tabla estudiantes
export class EstudiantesElement {
  Codigo!: number;
  Name!: string;
  Patronus!: string;  
  Age!: number;
  Image!: string;
}

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  // tabla estudiantes
  displayedColumns: string[] = ['Codigo', 'Name', 'Patronus', 'Age', 'Image'];
  dataSource!: MatTableDataSource<EstudiantesElement>;
  @ViewChild('paginatorEstudiantes') paginatorEstudiantes!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  // fin tabla estudiantes
  EstudiantesElement = [];

  listEstudiantesElement : EstudiantesElement [] = [];

  selectedHouse!: string;

  constructor(private clientService: ClientService,
              private router: Router) { }

  ngOnInit(): void {
  }

  // boton para consultar
  consultar(event: Event) : any{
    console.log('data', event);
    
    this.clientService.getStudent().subscribe(
      data => {
        let i=1;//para simular el codigo como indice
        data.forEach(((object: { name: string; patronus: string; image: string; dateOfBirth: Date; }) => {              
            let dataTable = new EstudiantesElement();
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
            this.listEstudiantesElement.push(dataTable);
        }));

        console.log(this.listEstudiantesElement);

        this.dataSource = new MatTableDataSource<EstudiantesElement>(this.listEstudiantesElement);
        this.dataSource.paginator = this.paginatorEstudiantes;
        this.dataSource.sort = this.sort; // ordenamiento de los campos
      },
      err => {
      
        console.log(err);
        window.alert('Ha ocurrido un error. Favor intente mas tarde.');
      }
    );
  }

  // todo
  agregar(event: Event) : any{
  //    window.alert('En proceso');
    this.router.navigateByUrl('/FormularioEstudiante');
  }

}
