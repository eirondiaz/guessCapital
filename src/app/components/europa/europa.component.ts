import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-europa',
  templateUrl: './europa.component.html',
  styleUrls: ['./europa.component.scss']
})
export class EuropaComponent implements OnInit {

  paisesList: any[] = []

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    this.getPaises()
  }

  getPaises() {
    this.paisService.getEuropa().subscribe(
      res => {
        console.log(res)
      },
      error => {
        console.log(error)
      }
    )
  }
}
