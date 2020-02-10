import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ArretsFilterService } from 'src/app/services/arrets-filter.service';


@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.page.html',
  styleUrls: ['./new-item.page.scss'],
})
export class NewItemPage {
  item: any; 
  id:"";
  items: Array<any>;
  data : any;
  arret = {
    RouteCode: "",
    StationId: "",
    StationName: " ",
    SequenceNo: "",
    Latitude: "",
    Longitude: "",
    LongRouteName: ""
  }

  constructor(
    private router: Router,     
    private route: ActivatedRoute,
    public arretService :ArretsFilterService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      data => {
        this.arret = this.arretService.getItemById(data.id)[0];            
      }
    ) 
    console.log(this.arret.StationId);   
  }

  goBack(){
    this.router.navigate(['/home']);
  } 

}
