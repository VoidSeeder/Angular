import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  giro: string = null;

  constructor() { }

  ngOnInit() {
  }

  girar() {
    this.giro = 'rotate';

    timer(1000).subscribe(() => this.giro = null);
  }

}
