import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  /* En la variable buscarcat se recoge lo que escribimos en la lupa 
    Hacemos un condicional If/ELSE para que realice la busqueda en el caso de recibir 3 caracteres o mas,
    de lo contrario, devolverá un mesaje de alerta*/
  buscarcat(text:string){
    if (text.length >2) {
      this.router.navigate(['buscar', text])
    } else {
      alert('La cantidad mínima de caracteres para realizar la busque es de 3')
    }


    /* Navigate irá a buscar la variable definida en el app-routing module.ts como 'buscar'
        y navega al componente BusquedaComponent*/
  }
  cleanBusqueda(){
    this.router.navigate(['home'])
  }

}
