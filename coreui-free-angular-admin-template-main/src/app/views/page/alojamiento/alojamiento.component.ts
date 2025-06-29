import {Component, OnInit} from '@angular/core';
import {Hotel} from "../page/models/hotel";
import {HotelesService} from "../../../providers/services/hoteles.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-alojamiento',
  imports: [
    NgForOf
  ],
  standalone:true,
  templateUrl: './alojamiento.component.html',
  styleUrl: './alojamiento.component.scss'
})
export class AlojamientoComponent implements OnInit{
  public hoteles: Hotel[] = [];

  constructor(private hotelesService: HotelesService) {
    console.log("emprendedores");
  }

  ngOnInit(): void {
    this.getHoteles();
  }

  getHoteles(): void {
    this.hotelesService.getAll$().subscribe(data => {
      this.hoteles = data;

    });
  }
}
