import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../servicios/info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos_idx: any = "";
  loading = true;

  constructor(public infoService: InfoService) { }

  ngOnInit(): void {
  this.infoService.getInfoProductos_idx()
    .subscribe((resp:any) => {
      this.productos_idx = resp;

      setTimeout(() => {
        this.loading = false;
      }, 500)
    });
  }

}
