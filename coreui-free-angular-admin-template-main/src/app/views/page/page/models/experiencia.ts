export class Experiencia {
  id?: number;
  nombre?: string;         // Nombre de la experiencia (ej: "Tour por Machu Picchu")
  descripcion?: string;    // Descripción detallada
  direccion?: string;      // Ubicación o punto de encuentro
  duracion?: string;       // Ej: "3 horas", "Todo el día"
  telefono?: string;       // Contacto
  imageUrl?: string;       // URL de la imagen principal
  categoria?: number | string; // Ej: 4.5 o "4.5★"
  precio?: number;         // Precio por persona
}
