import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/api.service';
import { MyContact } from 'src/Model/myContact';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {

  loginDate: any;  //To hold system current date
  searchKey: any = ''; // To hold the search value

  // url:string =''
  //to hold contact details
  allContacts: any = [];
  //string interpolation
  heading: string = 'hi everyone'
  //api - dependency injection
  constructor(private api: APIService) {
    this.loginDate = new Date();
  }
  ngOnInit(): void {
    this.getAllContact();
  }
  getAllContact() {
    this.api.getAllContact().subscribe((data: MyContact) => {
      console.log(data);
      this.allContacts = data
    })
  }
// nameChange(){
//   alert('name change')
// }

search(event: any){
  // console.log(event); //shows the event in console.
  console.log(event.target.value); // gets the keystrokes in input box
  this.searchKey = event.target.value
}

deleteContact(contactId: any){
  this.api.deleteContact(contactId).subscribe((result: any) => {
    this.getAllContact();
    alert('Contact deleted successfully');
    alert('Contact deleted successfully');
  })
}
}

