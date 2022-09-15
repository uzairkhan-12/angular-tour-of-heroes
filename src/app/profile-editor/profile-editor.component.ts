import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Validator } from '@angular/forms';
import { FormArray } from '@angular/forms';
@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  
  profileForm =  this.fb.group({
    firstName : ['',Validators.required],
    lastName : [''],
    address :  this.fb.group({
      street : [''],
      city : [''],
      state : [''],
      zip : [''],
  }),
  aliases:this.fb.array([
      this.fb.control('')
    ])
});

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.profileForm.value);
    console.log(this.profileForm.valid)
  }
  updateProfile(){
    this.profileForm.patchValue({
      firstName:"Uzair khan",
      address:{
        street:'123 abc'
      }
    })
  }
  get aliases(){
    return this.profileForm.get('aliases') as FormArray
  }
  addAlias(){
    this.aliases.push(this.fb.control(''))
  }
  constructor( private fb : FormBuilder ) { }
}
