import { Component, OnInit } from '@angular/core';
import { InfoService } from '../servicios/info.service';
import { InfoPag } from '../interfaces/infoPag';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  /* Construcción automatica para el año  [en el html declarar entre dobles {{}} ]*/
  anio: any = new Date().getFullYear();
  /* Variable */
  infoPag: InfoPag = {};

  constructor(public infoService: InfoService) { 
    
  }

  ngOnInit(): void {

    /*Llamada al InfoService */
    this.infoService.getinfoPag()
      .subscribe((resp: InfoPag) => {
        console.log(resp);
        this.infoPag = resp;
      })
    
  }

}
