import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para *ngFor
import { Experiencia } from '../page/models/experiencia';
import { ExperienciaService } from '../../../providers/services/experiencias.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss'],
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class ExperienciaComponent implements OnInit {

  public experiencias: Experiencia[] = [];

  constructor(private experienciaService: ExperienciaService) {}

  ngOnInit(): void {
    this.getExperiencias();
  }

  getExperiencias(): void {
    this.experienciaService.getAll$().subscribe(data => {
      this.experiencias = data;
      console.log('Datos recibidos:', data);
    });
  }
}
