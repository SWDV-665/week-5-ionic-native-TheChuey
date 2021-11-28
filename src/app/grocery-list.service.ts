import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceryListService {

  ///////// DATA ////////////
  public name: any = 'Project version Grocery ';
  public inputValue: any;
  public editValue: any;
  public items = [];  // Array for *ngFor looping Array generate ionTags
  public id: any;
  public food = {};
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
    console.log(inputValue);

    return this.items.push(inputValue);
  }
}


// const convertArrayToObject = (array) => {
//   let fruit = "fruit";
//   const food = new Object();

//   this.id = array.forEach(food);
//   console.log(this.id);

// };

// convertArrayToObject(this.items);
