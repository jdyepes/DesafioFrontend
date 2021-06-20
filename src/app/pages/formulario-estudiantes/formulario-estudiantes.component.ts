import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

//tabla estudiantes
export class EstudiantesElement {
  Codigo!: number;
  Name!: string;
  Patronus!: string;  
  Age!: number;
  Image!: string;
}

@Component({
  selector: 'app-formulario-estudiantes',
  templateUrl: './formulario-estudiantes.component.html',
  styleUrls: ['./formulario-estudiantes.component.css']
})

export class FormularioEstudiantesComponent implements OnInit {
  resultado!: string;
  listEstudiantesElement : EstudiantesElement [] = [];

  constructor() { }

  ngOnInit(): void {
    console.log('myData: ', JSON.parse(this.getData() || '{}')); 
  }

  formularioEstudiante = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    patronus: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    age: new FormControl('', [Validators.required, Validators.maxLength(2)])
  });

  submit() {
    if (this.formularioEstudiante.valid){
      this.addStudent();
      this.resultado = "Todos los datos son válidos";  
      
    }      
    else
      this.resultado = "Hay datos inválidos en el formulario";

      window.alert(this.resultado);
  }

  addStudent(){
    let dataTable = new EstudiantesElement();
    let i =1;
    dataTable.Codigo = i !=0 ? i : i+1 ;
    dataTable.Name = this.formularioEstudiante.value.name;
    dataTable.Patronus = this.formularioEstudiante.value.patronus;
    dataTable.Image = this.formularioEstudiante.value.image;
    dataTable.Age = this.formularioEstudiante.value.age;     
    this.listEstudiantesElement.push(dataTable);

    var retrievedObject = this.getData();

    this.setData(this.listEstudiantesElement);
    
    console.log(this.listEstudiantesElement);
  
    console.log('myData: ', JSON.parse(retrievedObject || '{}'));   
  }
  
  // Manejo de variables de sesion
  setData(data:any) {
    const jsonData = JSON.stringify(data);
    localStorage.setItem('myData', jsonData);
 }
 
 getData() {
    return localStorage.getItem('myData');
 }


}
