import { Component, OnInit } from '@angular/core';
import { Pages } from '../../const/format';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title?: string; // titulo de la pagina
  public usuario : Usuario = new Usuario();

  constructor( ) { }

  ngOnInit(): void {
    this.title = Pages.TITLE;//contante del titulo
  
  }
}
