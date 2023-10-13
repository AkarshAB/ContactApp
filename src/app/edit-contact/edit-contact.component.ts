import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from '../services/api.service';
import { MyContact } from 'src/Model/myContact';
import { MyGroup } from 'src/Model/myGroup';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  contactId: string = ''; //to hold the id of th contact

  contact: MyContact = {} //to hold contact details

  groups: MyGroup[] = [] //to hold all groups

  constructor(private activatedRoute: ActivatedRoute, private api: APIService, private route:Router) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data: any) => {
      console.log(data);
      console.log(data.contactId);
      this.contactId = data.contactId;

      //call api for particular ocontact details
      this.api.viewContactDetails(this.contactId).subscribe((result: any) => {
        console.log(result);

        this.contact = result

        //call api for geting group information
        this.api.getAllGroups().subscribe((data: any) => {
          console.log(data);
          this.groups = data;

        })
      })
    })
  }
  updateContact() {
    this.api.updateContact(this.contactId, this.contact).subscribe((result: any) => {
      console.log(result);
      this.route.navigateByUrl('/')
    })
  }
}
