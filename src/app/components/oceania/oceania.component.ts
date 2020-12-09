import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oceania',
  templateUrl: './oceania.component.html',
  styleUrls: ['./oceania.component.scss']
})
export class OceaniaComponent implements OnInit {

  paisesList: any[] = []

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    this.getPaises()
  }

  getPaises() {
    this.paisService.getOceania().subscribe(
      res => {
        console.log(res)
      },
      error => {
        console.log(error)
      }
    )
  }
}
