import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asia',
  templateUrl: './asia.component.html',
  styleUrls: ['./asia.component.scss']
})
export class AsiaComponent implements OnInit {

  paisesList: any[] = []

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    this.getPaises()
  }

  getPaises() {
    this.paisService.getAsia().subscribe(
      res => {
        console.log(res)
      },
      error => {
        console.log(error)
      }
    )
  }
}
