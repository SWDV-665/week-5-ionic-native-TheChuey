import { Component } from '@angular/core';
import { AlertController, Platform} from '@ionic/angular'; // , IonLabel, NavController
import { GroceryListService } from '../grocery-list.service'; // found  with the app dot files
import {MessagesService} from 'src/app/api/user.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    public dataService: GroceryListService,
    private alertController: AlertController,
    private messages: MessagesService,
    private platform: Platform

    ) {}

    // save
    save(){
     console.log('test save', this.dataService.items);
     this.messages.postMessage(this.dataService.items);
    }

    //// Share
    async share(){
      console.log('share test');
      this.messages.getMessages();

    }


   /// Delete
   delItem(groceryItem){
    this.dataService.addRemove(groceryItem);
  };

  /// ADD
   addItem(inputValue){
    this.dataService.add(inputValue);
    this.dataService.clearsInputField();
    }
  /// Edit
    editItem(groceryItem){
      this.aleartAndInput(groceryItem);
    }


  /// Aleart Method
     async aleartAndInput(groceryItem) {
         const alert = await this.alertController.create({
         cssClass: 'my-custom-class',
         header: 'Edit',
         message: groceryItem,
         buttons:  [
                  'Exit',
                  {
                  text: 'Edit', handler: (value) => {
                    this.delItem(groceryItem);
                    this.dataService.add(value.name1);
                    console.log('test handler', value.name1);
                  }
                  }],
         inputs: [
          {
            name: 'name1',
            type: 'text',
            placeholder: 'Enter Here'
          }],
       });
       await alert.present();
      }

}
