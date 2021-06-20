import { Component, OnInit , ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ClientService } from 'src/app/core/services/client.service';
import { MatSort } from '@angular/material/sort';
import * as moment from 'moment';

//tabla profesores
export class ProfesoresElement {
  Codigo!: number;
  Name!: string;
  Patronus!: string;  
  Age!: number;
  Image!: string;
}


@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})

export class ProfesoresComponent implements OnInit {

  // tabla profesores
  displayedColumns: string[] = ['Codigo', 'Name', 'Patronus', 'Age', 'Image'];
  dataSource!: MatTableDataSource<ProfesoresElement>;
  @ViewChild('paginatorProfesores') paginatorProfesores!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  // fin tabla profesores
  ProfesoresElement = [];

  listProfesoresElement : ProfesoresElement [] = [];

  selectedHouse!: string;
  
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.consultar();
  }

  // boton para consultar
  consultar() : any{
    console.log('data', event);
    
    this.clientService.getStaft().subscribe(
      data => {
        let i=1;//para simular el codigo como indice
        data.forEach(((object: { name: string; patronus: string; image: string; dateOfBirth: Date; }) => {              
            let dataTable = new ProfesoresElement();
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
            this.listProfesoresElement.push(dataTable);
        }));

        console.log(this.listProfesoresElement);

        this.dataSource = new MatTableDataSource<ProfesoresElement>(this.listProfesoresElement);
        this.dataSource.paginator = this.paginatorProfesores;
        this.dataSource.sort = this.sort; // ordenamiento de los campos
      },
      err => {
      
        console.log(err);
        window.alert('Ha ocurrido un error. Favor intente mas tarde.');
      }
    );
  }

}
