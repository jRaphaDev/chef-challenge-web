import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { PersonService } from '../shared/person.service';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html'
})
export class PersonFormComponent {

  public personForm = this.fb.group({
    email: ['', Validators.required],
    nome: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private personService: PersonService
  ) {}

  createPerson() {
    return this.personService.postPerson(this.personForm.value)
      .subscribe(data => console.log(data))
  }

}
