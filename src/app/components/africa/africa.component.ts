import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-africa',
  templateUrl: './africa.component.html',
  styleUrls: ['./africa.component.scss']
})
export class AfricaComponent implements OnInit {

  paisesList: any[] = []

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    this.getPaises()
  }

  getPaises() {
    this.paisService.getAfrica().subscribe(
      res => {
        console.log(res)
      },
      error => {
        console.log(error)
      }
    )
  }
}
