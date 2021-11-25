import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceryListService {

  ///////// DATA ////////////
  public name: any = 'Project version Gro2Backup';
  public inputValue: any;
  public editValue: any;
  public items = [];  // Array for *ngFor looping Array generate ionTags
  /////////////  DataService //////////////////////////////////////


  constructor() { console.log('groceryliset service test'); }
  clearsInputField(){
    return this.inputValue = ' ';
  }
          ///  adds and/or removes array elements.

  addRemove(groceryItem){
    const indexOfgroceryItem = this.items.indexOf(groceryItem); // Grab index from groceryItem
    return this.items.splice(indexOfgroceryItem, 1);
  }

  add(inputValue){
    return this.items.push(inputValue);
  }
}
