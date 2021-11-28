import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { GroceryListService } from '../grocery-list.service';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  constructor(private http: HttpClient, private dataService: GroceryListService) {
  }
  getMessages(): Observable<Object> {
    return this.http.get('http://localhost:8080/api/groceries');
  }

  getMessage(id: string): Observable<Object> {
    return this.http.get(`http://localhost:8080/api/groceries${id}`);
  }


  onMessage(postData: any) {
    this.http.post('http://localhost:8080/api/groceries', postData)  //http://localhost:8080/api/groceries
    .subscribe(data => {  // We subscribe to this observable, which allows us to grab the response from the request.
    console.log(data);
    }, error => {
    console.log(error);
    });
  }
                ///api/groceries/:id
  deleteProductById(productId: number) {
    console.log('delte items');
    const url: string = 'http://localhost:8080/api/groceries/:' + productId;
    this.http.delete(url).subscribe(data => {  // We subscribe to this observable, which allows us to grab the response from the request.
      console.log(data);
      }, error => {
      console.log(error);
      });

    console.log(url);
    return this.http.delete(url);
  }
}
