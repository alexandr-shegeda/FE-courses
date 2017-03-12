import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UserListService } from './services/user-list.service';
import { AppComponent } from './app.component';
import { AddUserFormComponent } from './add-user-form/add-user-form.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserFormComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ UserListService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
