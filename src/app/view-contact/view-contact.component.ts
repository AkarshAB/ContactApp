import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit{

  contactId:any = '' //to hold id of contacts
  contact:any = [] // to hold contact information
  groupId:string = '' //to hold the group id of the contact
  groupName:string = '' //to hold the group name of the contact

  constructor (private activatedRoute:ActivatedRoute, private api:APIService){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any) => {
      console.log(data);
      console.log(data.id);
      this.contactId = data.id;
      console.log(this.contactId);
      
      this.api.viewContactDetails(this.contactId).subscribe((result:any) => {
        console.log(result); //to get the details of corresponding id; contact details - object
        this.contact = result;

        this.groupId = result.groupid
        console.log(this.groupId);

        this.api.getGroupName(this.groupId).subscribe((data:any) => {
          console.log(data); //this calls the group id into the view contact 
          
        this.groupName = data.name;
        console.log(this.groupName);
        
        })
        
        
      })
    })
  }
}
