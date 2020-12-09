import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-america',
  templateUrl: './america.component.html',
  styleUrls: ['./america.component.scss']
})
export class AmericaComponent implements OnInit {

  started: boolean = false
  randomList: any[] = []
  random: any
  randomToCap: any[] = []
  paisesList: any[] = []
  paisEnJuego: any = {
    name: 'eiron',
    capital: 'asa',
    trasnlations: {
      es: ''
    }
  }

  capitalList: any[] = []
  randomToSHowCapitaList: any[] = [0, 1, 2, 3, 4]

  puntos: number = 0
  mala: number = 0
  partida: number = 0

  correcta: boolean = false
  erronea: boolean = false
  clicked: boolean = false

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    this.getPaises()
  }

  play() {
    this.started = true
    this.correcta = false
    this.erronea = false
    this.clicked = false

    this.randomToCap = []
    //this.random = this.randomNumer()
    this.randomNumer()
    this.paisEnJuego = this.paisesList[this.random]
    this.randomToCapital()
    this.capitalList = []
    this.capitalList.push(this.paisesList[this.randomToCap[0]].capital)
    this.capitalList.push(this.paisesList[this.randomToCap[1]].capital)
    this.capitalList.push(this.paisesList[this.randomToCap[2]].capital)
    this.capitalList.push(this.paisesList[this.randomToCap[3]].capital)
    this.capitalList.push(this.paisesList[this.random].capital)
    console.log(this.capitalList)
    this.randomToSHowCapitaList = [0, 1, 2, 3, 4]
    this.randomToSHowCapital()
    this.partida++ 
  }

  getPaises() {
    this.paisService.getAmerica().subscribe(
      res => {
        console.log(res)
        this.paisesList = res
      },
      error => {
        console.log(error)
      }
    )
  }

  randomNumer() {
    let number = Math.floor(Math.random() * 57)
    console.log(number)
    if (this.randomList.includes(number)) {
      console.log('repetido')
      this.randomNumer()
    }
    else {
      this.randomList.push(number)
      this.random = number
    }
    //return number
  }

  randomToCapital() {
    let number = Math.floor(Math.random() * 57)
    if (this.randomToCap.includes(number) || number === this.random) {
      this.randomToCapital()
    }
    else {
      this.randomToCap.push(number)
      if (this.randomToCap.length < 4) {
        this.randomToCapital()
      }
      console.log(this.randomToCap)
    }
  }

  randomToSHowCapital() {
    /* for (let i = 0; i < 5; i++) {  
      let number = Math.floor(Math.random() * 5)
  
      if (this.randomToSHowCapitaList.includes(number)) {
        this.randomToSHowCapital()
      } else {
        this.randomToSHowCapitaList.push(number)
      }
    } */
    this.randomToSHowCapitaList = this.randomToSHowCapitaList.sort(function() { return Math.random() - 0.5 })
    console.log(this.randomToSHowCapitaList)
  }

  adivinar(nombre) {
    if (nombre === this.paisEnJuego.capital) {
      this.puntos++
      this.correcta = true
    }
    else {
      this.mala++
      this.erronea = true
    }
    //this.play()
    this.clicked = true
  }
}
