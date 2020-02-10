import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {  FormBuilder} from '@angular/forms';
import { ItemService } from '../../services/item.service';

import { LoadingController } from '@ionic/angular';
import { ArretsFilterService } from 'src/app/services/arrets-filter.service';


@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.page.html',
  styleUrls: ['./update-item.page.scss'],
})
export class UpdateItemPage implements OnInit {

  item: any;
 // edit_item_form: FormGroup;
  items: Array<any>;
  data : any;
  ligneFiltrer : string;
  sens: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public formBuilder: FormBuilder,
    private itemService: ItemService,
    public arretService :ArretsFilterService,
    public loadingCtrl: LoadingController,
    
  ) { } 

 
  goBack(){
    this.router.navigate(['/home']);
  }
  
  filtrerArret(param: any): void {
    this.items = this.arretService.getItems(); 
    const val: string 	= param ;
    if (val.trim() !== '') {
      this.items = this.items.filter((item) => {       
        return item.RouteCode.toLowerCase().indexOf(val.toLowerCase()) > -1 ;
      });        
    } 
  }

  ngOnInit() { 
    this.route.params.subscribe(
      data => {
        this.item = this.itemService.getItemById(data.id)[0];            
      }
    )
    console.log(this.item.id);
    this.affichage();  
  }

  async openWaiting() {
    const loading = await this.loadingCtrl.create({
      message: `Chargement de arrets .... `,
      duration: (Math.random() * 500) + 500
    });
    await loading.present();
    await loading.onWillDismiss();  
  } 

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
    console.log(this.sens);
  } 

  affichage(){   
    if (this.sens==="aller") {
      this.ligneFiltrer= this.item.ligne +"s2"; 
    } else {
      this.ligneFiltrer= this.item.ligne +"s1";
    }
    this.filtrerArret(this.ligneFiltrer); 
  }
}
