import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../models/estudiante.model';
import { EstudianteService } from '../../services/estudiante.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-listado-estudiantes',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './listado-estudiantes.component.html',
  styleUrl: './listado-estudiantes.component.css'
})

// listado-estudiantes.component.ts
export class ListadoEstudiantesComponent implements OnInit {
  estudiantes: Estudiante[] = [];
  nuevoEstudiante: Estudiante = { nombre: '', correo: '' };

  constructor(private estudianteService: EstudianteService) {}

  ngOnInit(): void {
    this.listarEstudiantes(); // Se ejecuta automáticamente al cargar
  }

  listarEstudiantes(): void {
    this.estudianteService.listar().subscribe(data => {
      this.estudiantes = data;
    });
  }

  guardarEstudiante(): void {
    this.estudianteService.guardar(this.nuevoEstudiante).subscribe(() => {
      this.nuevoEstudiante = { nombre: '', correo: '' };
      this.listarEstudiantes(); // refresca la lista automáticamente
    });
  }
}
