import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ReceiptPage } from '../receipt/receipt';

/**
 * Generated class for the CartinfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-cartinfo',
  templateUrl: 'cartinfo.html',
})
export class CartinfoPage {
  items : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log(this.items);
  }

  clickDelete(data){
   let aw = this.items.indexOf(data);
   this.items.splice(aw, 1);
    
  }

  clickAdd(data){
    let aw = this.items.indexOf(data);
    this.items.forEach(we => {
      if(we.id == data.id){
        we.quantity = we.quantity + 1;
      }
    });
  }

  clickSub(data){
    this.items.forEach(we => {
      if(we.id == data.id){
        we.quantity = we.quantity - 1;
      }
    });
   
  }

  clickSubmit(){
    this.navCtrl.push(ReceiptPage, this.items);
  }

}
