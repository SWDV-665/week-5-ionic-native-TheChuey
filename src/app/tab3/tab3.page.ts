import { Component } from '@angular/core';
import { AlertController} from '@ionic/angular'; // , IonLabel, NavController
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
    private messages: MessagesService

    ) {}

    // save
    save(){
     console.log('test save', this.dataService.items);

     this.messages.onMessage(this.dataService.items);



     //this.dataService.items.forEach(function(value){ {} = value; console.log(value);});


    }

    //// Share
    share(){
      console.log("share test");
      this.messages.getMessages().subscribe((res) => {
        const keys = Object.entries(res);
        for (const key of keys) {
          let b = [...key];
          const bob = key[1];
          const id = bob['_id'];
          const nameId = id['name'];
          console.log('id',id, 'item Name',nameId, b[1]);
        }
      });

    }

   /// Delete
   delItem(groceryItem){

    this.dataService.addRemove(groceryItem);

      this.messages.getMessages().subscribe((res) => {
        const keys = Object.entries(res);
        for (const key of keys) {
          //let b = [...key];
          const bob = key[1];
          const id = bob['_id'];
          console.log('id',id);
         this.messages.deleteProductById(id);
      }
    });

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
function del(x: any) {
  throw new Error('Function not implemented.');
}

function x(x: any) {
  throw new Error('Function not implemented.');
}

