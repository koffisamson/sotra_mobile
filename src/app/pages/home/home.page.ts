import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { AlertController,LoadingController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  items: Array<any>; 
  data :any;
  afficher= false;
  afficherGare= false;
  selection1: string = '';
  selection2: string = '';
  selection: string = '';
 
  constructor(
    private router: Router,
    public itemService: ItemService,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,   
 
  ){}

  ngOnInit(){
    
    this.items = this.itemService.getItems();
    //this.filtrerArret();
  }  

  onSlideChanged(e) {
    console.log('On slide change event');
  }

  onSlideChangeStart(event) {   
    event.target.isEnd().then(isEnd => {
      console.log('End of slide', isEnd);
    });
  }

  afficherFitre(){   
    if (this.afficher===false) {
      this.afficher=true;
    }
    else{
      this.afficher=false;
    }
  }

  filtrerLigne(param: any): void {
    this.items = this.itemService.getItems(); 
    const val: string 	= param ;
    if (val.trim() !== '') {
      this.items = this.items.filter((item) => {       
        return item.ligne.toLowerCase().indexOf(val.toLowerCase()) > -1 ;
      });        
    } 
  }

  validerDestination(){
    this.items = this.itemService.getItems(); 
    if ((this.selection1 !=='') && (this.selection2 !=='')) {
      this.items = this.items.filter((item) => {
        return item.description.toLowerCase().indexOf(this.selection2.toLowerCase()) > -1 &&
              item.description.toLowerCase().indexOf(this.selection1.toLowerCase()) > -1;            
        });        
      }
      else{
        this.presentAlert();
      } 
      this.correspondance();
  }

  validerGare(){
    this.items = this.itemService.getItems(); 
    if ((this.selection !=='') && (this.selection2 !=='')) {
      this.items = this.items.filter((item) => {
        return item.gare.toLowerCase().indexOf(this.selection.toLowerCase()) > -1 &&
              item.description.toLowerCase().indexOf(this.selection2.toLowerCase()) > -1;            
        });        
      }
      else{
        this.presentAlert();
      } 
     // this.correspondance();
  }

  correspondance(){
    if (this.items.length == 0 ) {

      this.presentAlertConfirm();    
    
    }    
  }

  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      header: 'Oupss! Aucune ligne direct allant de '+this.selection2+ ' à ' +this.selection1+'n a été trouvé',
      message: 'Nous pouvons vous proposer une correspondance par nos différentes <strong> Gares <strong>!!',
      buttons: [
        {
          text: 'Annulé',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        },
      {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');
            this.afficherGare= true;
          }
        }
      ]
    });
    await alert.present();
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
     header: 'Alert',
     subHeader: 'Informations manquantes',
     message: 'Veillez choisir votre lieu de départ et la destination souhaité!',
     buttons: ['Merci']
   });
   await alert.present();
 } 
 async openSocial(network: string, fab: HTMLIonFabElement) {
  const loading = await this.loadingCtrl.create({
    message: `Posting to ${network}`,
    duration: (Math.random() * 1000) + 500
  });
  await loading.present();
  await loading.onWillDismiss();
  fab.close();
}  

 
}
