import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoService } from '../../servicios/info.service';



@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  id: any = "";
  campo: any;
  

  constructor(private route: ActivatedRoute,
              public infoService: InfoService) { }

  ngOnInit(): void {
  this.id = this.route.snapshot.paramMap.get('id');
    
      console.log(this.id);

      this.infoService.getProduct(this.id)
      .subscribe((resp:any) =>{
        console.log(resp);
        this.campo = resp;
      })
      
  }
  

}
