import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-primer-dia',
  standalone: true,
  imports: [],
  templateUrl: './primer-dia.component.html',
  styleUrl: './primer-dia.component.css'
})
export class PrimerDiaComponent {
  @Input() ejemplo:string = ''
  @Input() usuario:number = 0

  card={
    title : 'INSTITUTO TECNOLOGICO DE LOS MOCHIS',
    descripcion: "Instituto donde los baños no sirven y la inscripcion sube"
    
      }
}
