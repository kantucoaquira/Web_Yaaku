import {Component, OnInit} from '@angular/core';
import {NgFor} from "@angular/common";
import {HotelesService} from "../../../providers/services/hoteles.service";
import {Hotel} from "./models/hotel";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-page',
  imports: [
    NgFor,
    HeaderComponent
  ],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent implements OnInit {
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
