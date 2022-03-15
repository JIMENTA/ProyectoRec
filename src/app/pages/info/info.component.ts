import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  public info:Array<any> =[]

  constructor() { }

  ngOnInit(): void {
    this.info =[
      {
      img :"/assets/img/organic.jpg",  
      title:"Residuos organicos, residuos diarios",
      description:"Cada dia en cada casa generamos residuos organicos, te contamos donde puede llevar o que puedes hacer con los restos orgánicos de la cocina: restos de frutas y verduras, cáscaras de huevo, borra de café, té y sus saquitos.",
      link:"https://www.abonokm0.com/",
      linkText:"Conoce Abono km 0, una propuesta genial"
    },
    {
      img :"/assets/img/reparacio_electrodomesticos.jpg",  
      title:"DIY ! Repara o dona electrodomesticos ",
      description:"Puedes darle una segunda vida a eso que creias que ya no iba mas! (estamos hablando de electrodomesticos jeje) aprende a repapar o deja que alguien mas lo haga",
      link:"http://www.millorquenou.cat/",
      linkText:"Conoce Millor que nou hay talleres varios!"
    },
   ]
  }

}
