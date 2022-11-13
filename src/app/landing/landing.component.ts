import { Component, OnInit } from '@angular/core';
import { Proyectos } from '../models/proyectos';
import data from '../../assets/data/proyectos/paginas.json';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
  listaProyectos: Array<Proyectos> = []
  
  constructor() { }

  ngOnInit() {

    this.listaProyectos  = data as Array<Proyectos>;
    
  }
 
}
