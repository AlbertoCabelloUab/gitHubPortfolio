import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InfoService {

/* Creación del servicio */
  constructor( private http: HttpClient) { 
    this.getinfoPag();
    this.getInfoEquipo();
    this.getInfoProductos_idx();
    this.getProducts();

  }
    /* Llamadas a estos servicios */
    public getinfoPag(){
    return this.http.get('assets/data/infoPag.json');
  }
    
  
  /* Funciones independientes */
    public getInfoEquipo(){
    return this.http.get('https://portfolioapp-ae5b7-default-rtdb.firebaseio.com/equipo.json'); 
  }

  public getInfoProductos_idx(){
    return this.http.get('https://portfolioapp-ae5b7-default-rtdb.firebaseio.com/productos_idx.json')
  }

  public getProducts(){
    return this.http.get('https://portfolioapp-ae5b7-default-rtdb.firebaseio.com/productos')
  }

  public getProduct(id: string){
    return this.http.get(`https://portfolioapp-ae5b7-default-rtdb.firebaseio.com/productos/${id}.json`)
  }

  

}
