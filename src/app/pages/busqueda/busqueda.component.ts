import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoService } from 'src/app/servicios/info.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  textbusqueda: any = '';
  productos: any = [];
  ProductosResultados: any = [];
  loading = true;


  constructor(private route: ActivatedRoute, 
              public infoService: InfoService) {  }



  ngOnInit(): void {

    this.textbusqueda = this.route.snapshot.paramMap.get('textBusq');
    /* Pasamos la variable textbusqueda a minusculas para que no de problemas al discernir entre mayusculas y minusculas */
    this.textbusqueda = this.textbusqueda.toLowerCase();
   
    this.infoService.getInfoProductos_idx()
    .subscribe((resp:any) => {
      this.productos = resp;

      this.productos.forEach((producto: any) => {
      let categoria = producto.categoria.toLowerCase();
        

          if (producto.categoria.indexOf(this.textbusqueda) >= 0) {
            /* Si entra el condicional, lo que haremos es cargar el Array de resultados 'ProductosResultados'*/
            this.ProductosResultados.push(producto);
          }
          
      });
      
      
      setTimeout(()=> {
        this.loading = false;
      }, 1000)

    });

  }

}
