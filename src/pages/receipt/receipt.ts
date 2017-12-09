import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReceiptPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-receipt',
  templateUrl: 'receipt.html',
})
export class ReceiptPage {
  datas: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.datas = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReceiptPage');
  }

}
