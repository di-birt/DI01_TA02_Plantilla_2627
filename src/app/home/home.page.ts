import { Component } from '@angular/core';
import { Router } from '@angular/router';
//TODO importa los componentes necesarios de Ionic y FormsModule
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  ToastController
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { Elemento } from '../models/elemento.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, 
    FormsModule
  ],
})
export class HomePage {

  // TODO (Apartado 3 – Two-way Binding): Variable enlazada al campo de búsqueda
  busqueda: string = '';

  // TODO (Apartado 1): Añade al menos 5 elementos a este array
  // Puedes cambiar los campos según tu dominio (películas, libros, países, etc.)
  elementos: Elemento[] = [
    // Ejemplo:
    // { id: 1, nombre: 'Elemento 1', descripcion: 'Descripción breve', categoria: 'Cat A' },
  ];

  // TODO (Apartado 3 – Property Binding): Devuelve true si hay elementos en la lista
  get hayElementos(): boolean {
    return false; //Modificar
  }

  // TODO (Apartado 3 – Two-way Binding): Filtra los elementos según this.busqueda
  get elementosFiltrados(): Elemento[] {
    // Implementa el filtro (this.elementos.filter): devuelve solo los elementos cuyo nombre
    // incluya el texto de this.busqueda (ignorando mayúsculas/minúsculas -> .toLowerCase())
    return this.elementos;
  }

  // TODO Modificar el constructor para inyectar Router y ToastController con inject
  constructor(private router: Router, private toastController: ToastController) {}

  // TODO (Apartado 1 + 3 – Event Binding): Mostrar un ion-toast al pulsar el botón
  async mostrarToast(): Promise<void> {
    // Consulta la teoría: apartado "ion-toast vs ion-alert"    
  }
}
