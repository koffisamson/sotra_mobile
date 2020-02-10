import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {
  reponse1=false;
  reponse2=false;
  reponse3=false;
  reponse4=false;
  reponse5=false;
  reponse6=false;
  reponse7=false;
  reponse8=false;
  reponse9=false;
  reponse10=false;

  constructor() { }

  ngOnInit() {
  }
  question1(){
    if (this.reponse1===false) {
     this.reponse1= true;
    } else {
      this.reponse1=false;
    }
  }

  question2(){
    if (this.reponse2===false) {
      this.reponse2= true;
     } else {
       this.reponse2=false;
     }
  }

  question3(){
    if (this.reponse3===false) {
          this.reponse3= true;
        } else {
          this.reponse3=false;
        }
  }

  question4(){
    if (this.reponse4===false) {
      this.reponse4= true;
     } else {
       this.reponse4=false;
     }

  }
  question5(){
    if (this.reponse5===false) {
      this.reponse5= true;
     } else {
       this.reponse5=false;
     }

  }
  question6(){
    if (this.reponse6===false) {
      this.reponse6= true;
     } else {
       this.reponse6=false;
     }

  }
  question7(){
    if (this.reponse7===false) {
      this.reponse7= true;
     } else {
       this.reponse7=false;
     }

  }
  question8(){
    if (this.reponse8===false) {
      this.reponse8= true;
     } else {
       this.reponse8=false;
     }

  }
  question9(){
    if (this.reponse9===false) {
      this.reponse9= true;
     } else {
       this.reponse9=false;
     }

  }
  question10(){
    if (this.reponse10===false) {
      this.reponse10= true;
     } else {
       this.reponse10=false;
     }

  }

  

}
