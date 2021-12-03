import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from '../types';

@Injectable({
  providedIn: 'root'
})



export class MessagesService {
  constructor(private http: HttpClient) {}


  // getActivity
  onMessage(): Observable <Activity> {
    return this.http.get<Activity>('http://localhost:8080/api/groceries');

  }
  // getallactivites
  getMessages(){
    this.http.get('http://localhost:8080/api/groceries').subscribe((res) => {
      const keys = Object.entries(res);

        for (const key of keys) {
          const b = [...key];
          const bob = key[1];
          const id = bob._id;
          const nameId = id.name;
          console.log('id',id, 'item Name',nameId, b[1]);
        }


    });

  }

  // post
    postMessage(message): Observable <Activity> {
      console.log('postmessage test');
      return this.http.post<Activity>('http://localhost:8080/api/groceries', {
        id: '1',
        name: message
      });
  }
}

