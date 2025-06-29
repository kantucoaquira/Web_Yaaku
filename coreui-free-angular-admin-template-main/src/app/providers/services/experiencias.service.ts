import { Injectable } from '@angular/core';
import { EntityDataService } from '../utils/entity-data.service';
import { HttpClient } from '@angular/common/http';
import { ENS_POINTS } from '../utils/end-points';

@Injectable({ providedIn: 'root' })
export class ExperienciaService extends EntityDataService<any> {
  constructor(protected override httpClient: HttpClient) {
    super(httpClient, ENS_POINTS.services.experiencias); // Asegúrate de tener esta ruta en end-points
  }
}
