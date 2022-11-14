import { Component, OnInit } from '@angular/core';
import { Proyectos } from '../models/proyectos';
import data from '../../assets/data/proyectos/paginas.json';
import { Skills } from '../models/skill';
import lenguaje from '../../assets/data/skills/lenguajesProgramacion.json'
import databases from '../../assets/data/skills/databases.json'
import controversion from '../../assets/data/skills/controlVersiones.json'
import metologias from '../../assets/data/skills/metodologias.json'
import frameworks from '../../assets/data/skills/framework.json'
import integracion from '../../assets/data/skills/controlIntegracion.json'
import servidoreslist from '../../assets/data/skills/servidores.json'


@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
  listaProyectos: Array<Proyectos> = []
  listaLenguajeProgramacion: Array<Skills> = []
  listaBasesDatos: Array<Skills> = []
  listaControlVersion: Array<Skills> = []
  listaMetodologias: Array<Skills> = []
  listaFrameworks: Array<Skills> = []
  listaIntegracion: Array<Skills> = []
  listaServidores: Array<Skills> = []


  constructor() { }

  ngOnInit() {

    this.listaProyectos  = data as Array<Proyectos>;
    this.listaLenguajeProgramacion = lenguaje as Array<Skills>;
    this.listaBasesDatos = databases as Array<Skills>;
    this.listaControlVersion = controversion as Array<Skills>;
    this.listaMetodologias = metologias as Array<Skills>;
    this.listaFrameworks = frameworks as Array<Skills>;
    this.listaIntegracion = integracion as Array<Skills>;
    this.listaServidores = servidoreslist as Array<Skills>;
    
  }
 
}
