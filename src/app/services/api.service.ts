import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyContact } from 'src/Model/myContact';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  //dependency injection
  constructor(private http: HttpClient) { }

  //get function for getting all contact details
  getAllContact(): Observable<MyContact> {
    return this.http.get('http://localhost:3000/contacts')
  }

  //view particular contact details - http://localhost:3000/contacts/3
  viewContactDetails(contactId: any) {
    return this.http.get(`http://localhost:3000/contacts/${contactId}`)
  }



  //API call for getting group name
  getGroupName(groupId: string) {
    return this.http.get(`http://localhost:3000/groups/${groupId}`)
  }

  //API call for adding contact information
  addContact(contactBody: any) {
    return this.http.post('http://localhost:3000/contacts', contactBody)
  }

  //API call for getting group details
  getAllGroups (){
    return this.http.get('http://localhost:3000/groups')
  }

  //api call for deleting particular contact
  deleteContact (contactId:any){
    return this.http.delete(`http://localhost:3000/contacts/${contactId}`)
  }

  //api call for updating contact
  updateContact(contactId:any,contactBody:any){
    return this.http.put(`http://localhost:3000/contacts/${contactId}`,contactBody)
  }
}
