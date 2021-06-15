import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstudiantesComponent } from './pages/estudiantes/estudiantes.component';
import { HomeComponent } from './pages/home/home.component';
import { PersonasComponent } from './pages/personajes/personas.component';
import { ProfesoresComponent } from './pages/profesores/profesores.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'Personas', component: PersonasComponent },
  { path: 'Estudiantes', component: EstudiantesComponent },
  { path: 'Profesores', component: ProfesoresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
