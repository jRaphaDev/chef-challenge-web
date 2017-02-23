import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html'
})
export class PersonFormComponent {

  public personForm = this.fb.group({
    email: ['', Validators.required],
    nome: ['', Validators.required]
  });

  constructor(public fb: FormBuilder) {}

  doLogin(event) {
    console.log(event);
    console.log(this.personForm.value);
  }

}