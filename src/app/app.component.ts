import {Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  @ViewChild('f') clientForm: NgForm;
  title = 'app';
  ngOnInit(){

  }
  copyClient(){

    let client = this.clientForm.value.clientData;
    this.clientForm.form.patchValue({
      billingData: client
    })


  }

  onSubmit(){
     console.log(this.clientForm)

  }
}
