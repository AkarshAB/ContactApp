import { Component, OnInit } from '@angular/core';
import { MyContact } from 'src/Model/myContact';
import { APIService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css']
})
export class AddContactsComponent implements OnInit{
  // contactName:string = ''; //variable to hold data input from user and to export into html using double binding

  contact: MyContact = {}; //holds contact details in the form of obbjects
  allGroups:any = []; //to hold all group data


  constructor(private api: APIService, private router: Router) {
    this.contact.groupid = "Select"
  }
  ngOnInit(): void {
    this.api.getAllGroups().subscribe((data:any) => {
      console.log(data);
      this.allGroups = data;
      
    })
  }

  addContact() {
    this.api.addContact(this.contact).subscribe((result: any) => {
      this.router.navigateByUrl('')
    })
  }
}
