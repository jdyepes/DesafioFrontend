import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../../core/services/token-storage.service';
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

  constructor( private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.title = Pages.TITLE;//contante del titulo
    this.cargarUsuario();
  }

  cargarUsuario() :void {
    let user = this.tokenStorageService.getUser();
    this.usuario.nombre = user.Nombre;
    this.usuario.apellido = user.Apellido;
    console.log(this.usuario);
  }

  logout(): void { // Por hacer mensaje de confirmacion al salir la sesion
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
