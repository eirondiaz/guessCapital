import { PaisService } from './../../services/pais.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-america',
  templateUrl: './america.component.html',
  styleUrls: ['./america.component.scss']
})
export class AmericaComponent implements OnInit {

  @ViewChild('card1', { static: false }) card1: ElementRef
  @ViewChild('card2', { static: false }) card2: ElementRef
  @ViewChild('card3', { static: false }) card3: ElementRef
  @ViewChild('card4', { static: false }) card4: ElementRef
  @ViewChild('card5', { static: false }) card5: ElementRef

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
    if (this.started) {
      this.card1.nativeElement.className = 'card mb-2'
      this.card2.nativeElement.className = 'card mb-2'
      this.card3.nativeElement.className = 'card mb-2'
      this.card4.nativeElement.className = 'card mb-2'
      this.card5.nativeElement.className = 'card mb-2'
    }
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

  adivinar(nombre, card) {
    if (nombre === this.paisEnJuego.capital) {
      this.puntos++
      this.correcta = true
      if (card === 1) { 
        this.card1.nativeElement.className = 'card mb-2 alert-success'
      }
      else if (card === 2) {
        this.card2.nativeElement.className = 'card mb-2 alert-success'      
      }
      else if (card === 3) {
        this.card3.nativeElement.className = 'card mb-2 alert-success'      
      }
      else if (card === 4) {
        this.card4.nativeElement.className = 'card mb-2 alert-success'      
      }
      else if (card === 5) {
        this.card5.nativeElement.className = 'card mb-2 alert-success'      
      }
    }
    else {
      this.mala++
      this.erronea = true
      if (card === 1) { 
        this.card1.nativeElement.className = 'card mb-2 alert-danger'
      }
      else if (card === 2) {
        this.card2.nativeElement.className = 'card mb-2 alert-danger'      
      }
      else if (card === 3) {
        this.card3.nativeElement.className = 'card mb-2 alert-danger'      
      }
      else if (card === 4) {
        this.card4.nativeElement.className = 'card mb-2 alert-danger'      
      }
      else if (card === 5) {
        this.card5.nativeElement.className = 'card mb-2 alert-danger'      
      }
    }
    //this.play()
    this.clicked = true
  }
}
