import {Component, OnInit} from '@angular/core';
import {NgFor} from "@angular/common";
import {HotelesService} from "../../../providers/services/hoteles.service";
import {Hotel} from "./models/hotel";
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";
import {AlojamientoComponent} from "../alojamiento/alojamiento.component";
import {CategoriaComponent} from "../categoria/categoria.component";
import {HeroComponent} from "../hero/hero.component";
import {ExperienciaComponent} from "../experiencia/experiencia.component";

@Component({
  selector: 'app-page',
  imports: [
    NgFor,
    HeaderComponent,
    FooterComponent,
    AlojamientoComponent,
    CategoriaComponent,
    HeroComponent,
    ExperienciaComponent
  ],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent  {


}
