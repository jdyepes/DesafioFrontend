import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WebApp';
  route: string='';
  mostrar: any;


    ngOnInit(): void {

    }
}
