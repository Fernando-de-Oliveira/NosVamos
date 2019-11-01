import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  constructor( private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if(localStorage.getItem('isLogged') == undefined ){
      this.router.navigate(['/login']);
    }
  }

}
