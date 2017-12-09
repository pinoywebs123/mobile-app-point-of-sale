import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CartinfoPage } from '../cartinfo/cartinfo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  order = 0;
  cart = [

  ];
  foods = [
    {id: "f1", name : "Burger", price: 100, quantity: 1},
    {id: "f2", name : "Ham Sandwich", price: 50, quantity: 1},
    {id: "f3", name : "Foorlong", price: 80, quantity: 1},
    {id: "f4", name : "Burger with Egg", price: 120, quantity: 1},
    {id: "f5", name : "Beacon", price: 100, quantity: 1}
    

  ];

  drinks = [
    {id: "d1", name : "Coke", price: 20, quantity: 1},
    {id: "d2", name : "Nestea", price: 20, quantity: 1},
    {id: "d3", name : "Coffee", price: 15, quantity: 1},
    {id: "d4", name : "Yakult", price: 10, quantity: 1}
  ];
  constructor(public navCtrl: NavController) {

  }

  ionViewDidEnter(){
    
  }

  clickOrder(order){
    this.order = this.order + 1;
    this.cart.push(order);
    console.log(this.cart);
  }

  clickCart(){
    this.navCtrl.push(CartinfoPage, this.cart);
  }

}
