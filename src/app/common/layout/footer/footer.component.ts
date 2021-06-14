import { Component, OnInit } from '@angular/core';
import { Pages } from '../../const/format';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footerMessage: string = Pages.FOOTER;
  constructor() { }

  ngOnInit(): void {
  }

}
