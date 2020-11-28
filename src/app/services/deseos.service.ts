import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';
@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  constructor() {

    this.cargarStorage();

      // const lista1 = new Lista('Recolectar piedras del Infinito');
      // const lista2 = new Lista('Pasear a candy :v');
      // this.listas.push(lista1,lista2);
      // console.log(this.listas);
  }
  // crear la lista
  crearLista( titulo: string ){
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();
    return nuevaLista.id;
  }

  // obtener la lista por medio de id
  obtenerLista( id: string | number ){
    id = Number(id);

    return this.listas.find( listaData => {
      return listaData.id === id;
    });
  }

  borrarLista( lista: Lista){
    this.listas = this.listas.filter( listaData => listaData.id !== lista.id);    
    this.guardarStorage();
  }
  // guardar datos del localStorage
  guardarStorage(){
    localStorage.setItem('data', JSON.stringify(this.listas) );
  }
  // pedri datos del localStorage
  cargarStorage(){
    if ( localStorage.getItem('data') ){
      this.listas = JSON.parse(localStorage.getItem('data'));
    }else{
      this.listas = [];
    }
  }
}
