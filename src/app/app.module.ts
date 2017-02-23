import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PersonService } from './person/shared/person.service';
import { PersonFormComponent } from './person/person-form/person-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { FooterComponent } from './footer/footer.component';
import 'hammerjs';

const appRoutes: Routes = [
  { path: 'home', component: PersonComponent },
  { path: 'person', component: PersonComponent },
  { path: 'person/add', component: PersonFormComponent },
  { path: '**', component: PersonComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonFormComponent,
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule.forRoot()
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
