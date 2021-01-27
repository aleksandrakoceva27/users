import { UsersService } from './services/users.service';
import { User } from './models/user.model';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserListComponent } from './components/user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFilterPipe } from './pipes/user-fiilter.pipe';


@NgModule({
  declarations: [
    UserListComponent,
    UserFilterPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UsersService],
  bootstrap: [],
  exports: [
    UserListComponent,
    UserFilterPipe
  ]
})
export class UsersModule { }
