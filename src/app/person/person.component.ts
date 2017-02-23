import { Component, OnInit } from '@angular/core';
import { PersonService } from './shared/person.service';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(private personService: PersonService) { }

  public people = [];

  ngOnInit() {
    this.loadPerson();
  }

  loadPerson() {
    this.personService.getPerson().subscribe(
      data => this.people = data
    );
  }

}
